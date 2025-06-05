'use client';

import { Search, Filter } from 'lucide-react';
import { Button } from '@/components/components/ui/button';
import { Input } from '@/components/components/ui/input';

interface SearchFormProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onToggleFilters: () => void;
}

export function SearchForm({
  searchQuery,
  onSearchChange,
  onSubmit,
  onToggleFilters,
}: SearchFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-wrap items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20"
    >
      <Search className="w-4 h-4 text-white/60" />
      <Input
        type="text"
        placeholder="Buscar filmes, séries..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="flex-1 bg-transparent text-white placeholder-white/60 border-none focus:outline-none focus:ring-0 text-sm"
      />
      <div className="flex gap-1">
        <Button
          type="submit"
          variant="ghost"
          size="sm"
          className="text-white/60 hover:text-white hover:bg-white/10 rounded-full"
        >
          Buscar
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="text-white/60 hover:text-white hover:bg-white/10 rounded-full"
          onClick={onToggleFilters}
        >
          <Filter className="w-5 h-5" />
        </Button>
      </div>
    </form>
  );
}