'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { GlowEffects, ParticleBackground } from '@/components/effects/background';
import GlassNavbar from '@/components/navbar/glass';
import Footer from '@/components/footer/footer';
import { searchContent } from 'src/service/search.service';
import { SearchForm } from '@/components/search/search-form';
import { SearchFilters } from '@/components/search/search-filters';
import { RecentSearches } from '@/components/recentSearches/recente-search';
import { SearchResults } from '@/components/searchResults/search-results';

interface RecentSearch {
    id: string;
    query: string;
    timestamp: Date;
}

export default function SearchPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');
    const [recentSearches, setRecentSearches] = useState<RecentSearch[]>([]);
    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState({
        type: 'all',
        year: '',
        genre: '',
    });
    const [results, setResults] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const savedSearches = localStorage.getItem('recentSearches');
        if (savedSearches) {
            setRecentSearches(JSON.parse(savedSearches));
        }
    }, []);

    useEffect(() => {
        const query = searchParams.get('q');
        if (query) {
            const decodedQuery = decodeURIComponent(query);
            setSearchQuery(decodedQuery);
            addRecentSearch(decodedQuery);
            performSearch(decodedQuery);
        }
    }, [searchParams, filters]);

    const addRecentSearch = (query: string) => {
        if (!query.trim()) return;

        const newSearch = {
            id: Date.now().toString(),
            query,
            timestamp: new Date(),
        };

        const updatedSearches = [
            newSearch,
            ...recentSearches.filter((s) => s.query !== query),
        ].slice(0, 5);

        setRecentSearches(updatedSearches);
        localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
    };

    const removeRecentSearch = (id: string) => {
        const updatedSearches = recentSearches.filter((s) => s.id !== id);
        setRecentSearches(updatedSearches);
        localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
    };

    const clearRecentSearches = () => {
        setRecentSearches([]);
        localStorage.removeItem('recentSearches');
    };

    const performSearch = async (query: string) => {
        if (!query.trim()) {
            setResults([]);
            return;
        }

        setIsLoading(true);
        try {
            const { results } = await searchContent({
                query,
                type: filters.type,
                year: filters.year,
                genre: filters.genre,
            });
            setResults(results);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    const handleFilterChange = (name: string, value: string) => {
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const clearFilters = () => {
        setFilters({ type: 'all', year: '', genre: '' });
    };

    return (
        <div className="flex flex-col justify-between min-h-screen bg-black text-white relative overflow-hidden">
            <ParticleBackground />
            <GlowEffects />
            <GlassNavbar search={false} />

            <div className="container mx-auto px-4 py-24 relative z-10">
                <div className="max-w-2xl w-full mx-auto">
                    <SearchForm
                        searchQuery={searchQuery}
                        onSearchChange={setSearchQuery}
                        onSubmit={handleSearch}
                        onToggleFilters={() => setShowFilters(!showFilters)}
                    />

                    {showFilters && (
                        <SearchFilters
                            filters={filters}
                            onFilterChange={handleFilterChange}
                            onClearFilters={clearFilters}
                        />
                    )}
                </div>

                {(!searchQuery || results.length === 0) && !isLoading && (
                    <RecentSearches
                        searches={recentSearches}
                        onSearchSelect={(query) => {
                            setSearchQuery(query);
                            router.push(`/search?q=${encodeURIComponent(query)}`);
                        }}
                        onSearchRemove={removeRecentSearch}
                        onClearAll={clearRecentSearches}
                    />
                )}

                {(searchQuery || results.length > 0) && (
                    <SearchResults
                        query={searchQuery}
                        results={results}
                        isLoading={isLoading}
                    />
                )}
            </div>

            <Footer />
        </div>
    );
}