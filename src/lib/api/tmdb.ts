
import { MovieListResponse, Movie } from '@/lib/types/movie';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export async function fetchPopularMovies() : Promise<MovieListResponse> {
    try {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`
            }
        };

        const response = await fetch(
            'https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1',
            options
        );

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Erro ao buscar filmes populares:', error);
        throw error;
    }
}


export async function fetchTopMoviesPage(page = 1): Promise<{ results: Movie[]; total_pages: number }> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        }
      }
    );
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch popular movies:', error);
    return { results: [], total_pages: 0 };
  }
}
export async function fetchPopularMoviesPage(page = 1): Promise<{ results: Movie[]; total_pages: number }> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        }
      }
    );
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch popular movies:', error);
    return { results: [], total_pages: 0 };
  }
}

export async function fetchMovieDetails(id: string): Promise<Movie> {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`
            }
        }
    );

    if (!res.ok) throw new Error('Failed to fetch movie details');
    return res.json();
}

export async function fetchTopRatedMovies(page = 1) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`
      }
    }
  );
  return response.json();
}

export async function fetchUpcomingMovies(page = 1) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`
      }
    }
  );
  return response.json();
}

export async function fetchMoviesByGenre(genreId: string, page = 1) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&language=pt-BR&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        }
      }
    );
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch movies by genre:', error);
    return { results: [], total_pages: 0 };
  }
}