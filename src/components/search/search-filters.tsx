'use client';

import { Button } from '@/components/components/ui/button';
import { Input } from '@/components/components/ui/input';

interface SearchFiltersProps {
  filters: {
    type: string;
    year: string;
    genre: string;
  };
  onFilterChange: (name: string, value: string) => void;
  onClearFilters: () => void;
}

export function SearchFilters({
  filters,
  onFilterChange,
  onClearFilters,
}: SearchFiltersProps) {
  return (
    <div className="mt-4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-white/80 text-sm mb-1">Tipo</label>
          <select
            value={filters.type}
            onChange={(e) => onFilterChange('type', e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-white/50 appearance-none"
          >
            <option value="all" className="bg-gray-800 text-white">Todos</option>
            <option value="movie" className="bg-gray-800 text-white">Filmes</option>
            <option value="tv" className="bg-gray-800 text-white">Séries</option>
          </select>
        </div>
        <div>
          <label className="block text-white/80 text-sm mb-1">Ano</label>
          <Input
            type="number"
            placeholder="Ex: 2023"
            value={filters.year}
            onChange={(e) => onFilterChange('year', e.target.value)}
            className="bg-white/10 border border-white/20 text-white"
          />
        </div>
        <div>
          <label className="block text-white/80 text-sm mb-1">Gênero</label>
          <select
            value={filters.genre}
            onChange={(e) => onFilterChange('genre', e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-white/50 appearance-none"
          >
            <option value="" className="bg-gray-800 text-white">Todos</option>
            <option value="28" className="bg-gray-800 text-white">Ação</option>
            <option value="12" className="bg-gray-800 text-white">Aventura</option>
            <option value="16" className="bg-gray-800 text-white">Animação</option>
          </select>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <Button
          variant="outline"
          className="bg-transparent text-white border-white/20 hover:bg-white/10"
          onClick={onClearFilters}
        >
          Limpar Filtros
        </Button>
      </div>
    </div>
  );
}