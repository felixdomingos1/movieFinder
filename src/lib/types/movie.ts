export interface Movie {
    id: number;
    title: string;
    original_title: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
    popularity: number;
    genre_ids: number[];
    adult: boolean;
    video: boolean;
    runtime?: number; 
    genres?: { id: number; name: string }[];
    budget?: number;
    revenue?: number;
    status?: string;
    production_companies?: { id: number; name: string }[];
}

export interface MovieListResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}