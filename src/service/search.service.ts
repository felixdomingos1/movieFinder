import { Movie } from '@/lib/types/movie';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

interface SearchParams {
  query: string;
  type?: string;
  year?: string;
  genre?: string;
  page?: number;
}

export async function searchContent({
  query,
  type = 'all',
  year,
  genre,
  page = 1,
}: SearchParams): Promise<{ results: Movie[]; total_pages: number }> {
  try {
    let url = `https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(
      query
    )}&page=${page}&language=pt-BR`;

    if (type !== 'all') {
      url = `https://api.themoviedb.org/3/search/${type}?query=${encodeURIComponent(
        query
      )}&page=${page}&language=pt-BR`;
    }

    if (year) {
      url += `&year=${year}`;
    }

    if (genre && type === 'movie') {
      url += `&with_genres=${genre}`;
    }

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return {
      results: data.results,
      total_pages: data.total_pages,
    };
  } catch (error) {
    console.error('Search failed:', error);
    return { results: [], total_pages: 0 };
  }
}