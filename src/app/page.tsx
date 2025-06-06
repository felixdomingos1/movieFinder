import CinematicHero from "@/components/hero/cinematic";
import MovieGrid from "@/components/movie/grid";
import GlassNavbar from "@/components/navbar/glass";
import { fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies } from "@/lib/api/tmdb";
import { ParticleBackground, GlowEffects } from "@/components/effects/background";
import MovieCarousel from "@/components/movie/movie-carousel";
import Link from "next/link";
import Footer from "@/components/footer/footer";
import CategorySection from "@/components/category/category";

export default async function Home() {
  try {
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
      action: popularMovies.filter(movie => movie.genre_ids.includes(28)).slice(0, 10),
      comedy: popularMovies.filter(movie => movie.genre_ids.includes(35)).slice(0, 10),
      thriller: popularMovies.filter(movie => movie.genre_ids.includes(53)).slice(0, 10),
      adventure: popularMovies.filter(movie => movie.genre_ids.includes(12)).slice(0, 10),
      drama: popularMovies.filter(movie => movie.genre_ids.includes(18)).slice(0, 10),
      scifi: popularMovies.filter(movie => movie.genre_ids.includes(878)).slice(0, 10),
    };

    const categories = [
      { id: 28, name: "Ação", count: genres.action.length },
      { id: 35, name: "Comédia", count: genres.comedy.length },
      { id: 12, name: "Aventura", count: genres.adventure.length },
      { id: 18, name: "Drama", count: genres.drama.length },
      { id: 878, name: "Ficção Científica", count: genres.scifi.length },
      { id: 53, name: "Suspense", count: genres.thriller.length },
      { id: 14, name: "Fantasia" },
      { id: 27, name: "Terror" },
      { id: 10749, name: "Romance" },
      { id: 16, name: "Animação" },
      { id: 80, name: "Crime" },
      { id: 10751, name: "Família" },
    ].filter(cat => cat.count ? cat.count > 5 : true);

    if (!popularMovies.length) {
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

    const featuredMovie = popularMovies[0];
    const movies = popularMovies.slice(1, 11);

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <ParticleBackground />
        <GlowEffects />
        <GlassNavbar search={true} />
        
        <div className="relative z-0">
          <CinematicHero movie={featuredMovie} />
        </div>

        <CategorySection categories={categories} />

        <section className="relative z-10 py-12">
          <div className="container px-4 mx-auto space-y-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 px-4 sm:px-6">
                Novos Filmes no Cinema
              </h2>
              <MovieGrid movies={movies} />
            </div>

            <MovieCarousel
              title="Mais Populares"
              movies={popularMovies.slice(0, 10)}
              categoryId="popular"
            />

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

            {genres.action.length > 0 && (
              <MovieCarousel
                title="Filmes de Ação"
                movies={genres.action}
                categoryId="action"
              />
            )}

            {genres.comedy.length > 0 && (
              <MovieCarousel
                title="Filmes de Comédia"
                movies={genres.comedy}
                categoryId="comedy"
              />
            )}

            {genres.thriller.length > 0 && (
              <MovieCarousel
                title="Filmes de Suspense"
                movies={genres.thriller}
                categoryId="thriller"
              />
            )}

            <div className="text-center mt-6">
              <Link
                href="/movie"
                className="inline-flex items-center px-6 py-3 border border-gray-700 rounded-full text-white hover:bg-gray-800 transition-colors text-lg font-medium"
              >
                Explorar Todos os Filmes
              </Link>
            </div>
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