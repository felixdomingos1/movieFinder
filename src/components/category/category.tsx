// components/category/category.tsx
import Link from "next/link";

interface Category {
  id: number;
  name: string;
  count?: number;
}

interface CategorySectionProps {
  categories: Category[];
}

export default function CategorySection({ categories }: CategorySectionProps) {
  return (
    <section className="relative z-10 py-6 md:py-12 bg-gradient-to-b from-gray-900/50 to-transparent">
      <div className="container px-4 mx-auto">
        <div className="mb-6 px-2 md:px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Explorar por Categorias
          </h2>
          <p className="text-gray-400 mt-1 md:mt-2 text-sm md:text-base">
            Descubra filmes por seus gêneros favoritos
          </p>
        </div>
        
        {/* Container principal - muda o comportamento em mobile */}
        <div className="relative">
          {/* Versão desktop - grid normal */}
          <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 px-2">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
          
          {/* Versão mobile - scroll horizontal */}
          <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex space-x-3 w-max">
              {categories.map((category) => (
                <div key={category.id} className="w-36 flex-shrink-0">
                  <CategoryCard category={category} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Componente separado para o card de categoria
const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <Link
      href={`/movie/category/${category.id}-${category.name.toLowerCase().replace(/\s+/g, '-')}`}
      className="group transition-all duration-300 block"
    >
      <div className="relative overflow-hidden rounded-lg hover:bg-gray-700/70 border border-gray-700 hover:border-primary-500 transition-all duration-300 h-full min-h-[100px] md:min-h-[120px] flex items-center justify-center p-3 md:p-4 text-center">
        <h3 className="text-sm md:text-base font-semibold text-white group-hover:text-primary-300 transition-colors z-10">
          {category.name}
          {category.count && (
            <span className="block text-xs text-gray-400 mt-1">
              +{category.count} filmes
            </span>
          )}
        </h3>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/60 opacity-70 group-hover:opacity-30 transition-opacity" />
      </div>
    </Link>
  );
};