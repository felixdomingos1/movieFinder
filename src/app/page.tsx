import CinematicHero from "@/components/hero/cinematic";
import MovieGrid from "@/components/movie/grid";
import GlassNavbar from "@/components/navbar/glass";
import { fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies } from "@/lib/api/tmdb";
import { ParticleBackground, GlowEffects } from "@/components/effects/background";
import MovieCarousel from "@/components/movie/movie-carousel";
import Link from "next/link";
import Footer from "@/components/footer/footer";

export default async function Home() {
  try {
    const data = await fetchPopularMovies();

    const [
      popularResponse,
      topRatedResponse,
      upcomingResponse
    ] = await Promise.all([
      fetchPopularMovies(),
      fetchTopRatedMovies(),
      fetchUpcomingMovies()
    ]);

    const popularMovies = popularResponse?.results || [];
    const topRatedMovies = topRatedResponse?.results || [];
    const upcomingMovies = upcomingResponse?.results || [];


    const genres = {
      action: popularMovies.filter(movie => movie.genre_ids.includes(28)),
      comedy: popularMovies.filter(movie => movie.genre_ids.includes(35)),
      thriller: popularMovies.filter(movie => movie.genre_ids.includes(53)),
    };

    if (!data || !data.results || data.results.length === 0) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
          <ParticleBackground />
          <GlowEffects />
          <GlassNavbar search={true} />
          <section className="py-16 relative z-10">
            <div className="container px-4 mx-auto">
              <MovieGrid error="Nenhum filme popular encontrado" />
            </div>
          </section>
          <Footer />
        </div>
      );
    }

    const featuredMovie = data.results[0];
    const movies = data.results.slice(1, 11);

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <ParticleBackground />
        <GlowEffects />
        <GlassNavbar search={true} />

        <div className="relative z-0">
          <CinematicHero movie={featuredMovie} />
        </div>

        <section className="relative z-10 py-12">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 px-4 sm:px-6">
              Novos Filmes no Cinema 
            </h2>
            <MovieGrid movies={movies} />
            <MovieCarousel
              title="Mais Populares"
              movies={popularMovies.slice(1, 11)}
              categoryId="popular"
            />
            <div className="text-center mt-6">
              <Link
                href="/movie"
                className="inline-flex items-center px-6 py-2 border border-gray-700 rounded-full text-white hover:bg-gray-800 transition-colors"
              >
                Ver Mais Filmes Popular
              </Link>
            </div>

            <MovieCarousel
              title="Top 10 Filmes Mais Bem Avaliados"
              movies={topRatedMovies.slice(0, 10)}
              categoryId="top-rated"
            />

            <MovieCarousel
              title="Brevemente nos Cinemas"
              movies={upcomingMovies.slice(0, 10)}
              categoryId="upcoming"
            />

            <MovieCarousel
              title="Filmes de Ação"
              movies={genres.action.slice(0, 10)}
              categoryId="action"
            />

            <MovieCarousel
              title="Filmes de Comédia"
              movies={genres.comedy.slice(0, 10)}
              categoryId="comedy"
            />

            <MovieCarousel
              title="Filmes de Suspense"
              movies={genres.thriller.slice(0, 10)}
              categoryId="thriller"
            />
          </div>
        </section>
        <Footer />
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <ParticleBackground />
        <GlowEffects />
        <GlassNavbar search={true} />
        <section className="py-16 relative z-10">
          <div className="container px-4 mx-auto">
            <MovieGrid error="Erro ao carregar filmes. Por favor, tente novamente mais tarde." />
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}