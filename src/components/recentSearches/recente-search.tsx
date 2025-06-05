'use client';

import { X, Trash2 } from 'lucide-react';
import { Button } from '@/components/components/ui/button';

interface RecentSearch {
  id: string;
  query: string;
  timestamp: Date;
}

interface RecentSearchesProps {
  searches: RecentSearch[];
  onSearchSelect: (query: string) => void;
  onSearchRemove: (id: string) => void;
  onClearAll: () => void;
}

export function RecentSearches({
  searches,
  onSearchSelect,
  onSearchRemove,
  onClearAll,
}: RecentSearchesProps) {
  if (searches.length === 0) return null;

  return (
    <div className="max-w-2xl w-full mx-auto mt-8 px-2">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white/80 text-lg">Pesquisas recentes</h3>
        <Button variant="destructive" size="sm" onClick={onClearAll}>
          <Trash2 className="w-4 h-4 mr-1" /> Limpar tudo
        </Button>
      </div>
      <div className="space-y-2">
        {searches.map((search) => (
          <div
            key={search.id}
            className="flex justify-between items-center hover:bg-white/10 rounded-lg px-4 py-3 transition-colors"
          >
            <button
              className="text-white/80 hover:text-white text-left flex-1"
              onClick={() => onSearchSelect(search.query)}
            >
              {search.query}
            </button>
            <button
              className="text-white/40 hover:text-white/80"
              onClick={() => onSearchRemove(search.id)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}