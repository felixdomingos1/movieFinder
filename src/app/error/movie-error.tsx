// app/error/movie-error.tsx
'use client';

import { Button } from '@/components/components/ui/button';
import { AlertTriangle, ArrowLeft, Home } from 'lucide-react';
import Link from 'next/link';
import GlassNavbar from '@/components/navbar/glass';
import Footer from '@/components/footer/footer';
import { GlowEffects, ParticleBackground } from '@/components/effects/background';

interface MovieErrorProps {
  error?: string;
}

export default function MovieError({ error }: MovieErrorProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <ParticleBackground />
      <GlowEffects />
      <GlassNavbar search={true} />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-30">
        <div className="max-w-3xl mx-auto text-center  rounded-xl p-8 sm:p-12   ">
          <div className="inline-flex items-center justify-center bg-red-500/20 p-4 rounded-full mb-6">
            <AlertTriangle className="h-12 w-12 text-red-400" />
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
            {error ? 'Ocorreu um erro' : 'Filme não encontrado'}
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {error || 'O filme que você está procurando não foi encontrado em nosso banco de dados.'}
          </p>
          
          <p className="text-gray-400 mb-8">
            Por favor, tente novamente mais tarde ou verifique se o ID do filme está correto.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <Button asChild variant="outline" className="gap-2 py-6 text-base bg-transparent hover:bg-white/10">
              <Link href="/">
                <Home className="h-5 w-5" />
                Página Inicial
              </Link>
            </Button>
            
            <Button asChild className="gap-2 py-6 text-base bg-red-600 hover:bg-red-700">
              <Link href="/movie">
                <ArrowLeft className="h-5 w-5" />
                Explorar Filmes
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}