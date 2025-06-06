'use client';

import { Button } from '@/components/components/ui/button';
import { Film, Popcorn, Star, Users, Heart, Globe } from 'lucide-react';
import Link from 'next/link';
import GlassNavbar from '@/components/navbar/glass';
import Footer from '@/components/footer/footer';
import { GlowEffects, ParticleBackground } from '@/components/effects/background';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <ParticleBackground />
      <GlowEffects />
      <GlassNavbar search={true} />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Sobre Nós
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubra a paixão por filmes que nos move e a plataforma que construímos para você.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className=" p-8 ">
              <div className="flex items-center gap-4 mb-6">
                <Film className="h-10 w-10 text-blue-400" />
                <h2 className="text-2xl font-bold">Nossa Missão</h2>
              </div>
              <p className="text-gray-300 mb-6">
                Criar a melhor experiência para os amantes de cinema, oferecendo informações detalhadas, recomendações personalizadas e uma comunidade engajada.
              </p>
              <div className="flex items-center gap-3 text-blue-400">
                <Heart className="h-5 w-5" />
                <span>Feito por fãs, para fãs</span>
              </div>
            </div>

            <div className=" p-8 ">
              <div className="flex items-center gap-4 mb-6">
                <Popcorn className="h-10 w-10 text-purple-400" />
                <h2 className="text-2xl font-bold">O Que Oferecemos</h2>
              </div>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 mt-1 text-yellow-400 flex-shrink-0" />
                  <span>Catálogo com milhares de filmes e séries</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 mt-1 text-yellow-400 flex-shrink-0" />
                  <span>Detalhes completos e avaliações</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 mt-1 text-yellow-400 flex-shrink-0" />
                  <span>Recomendações personalizadas</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 p-8 ">
            <div className="flex items-center gap-4 mb-8 justify-center">
              <Users className="h-10 w-10 text-green-400" />
              <h2 className="text-3xl font-bold">Nossa Equipe</h2>
            </div>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-8">
              Somos um grupo apaixonado por cinema, tecnologia e experiência do usuário. Combinamos nossas habilidades para criar algo especial para você.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {['Felix Domingos', 'Angelo Sanjala', 'Felisberto Alberto', 'Sofia de Melo'].map((name) => (
                <div key={name} className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xl font-bold mb-3">
                    {name.charAt(0)}
                  </div>
                  <h3 className="font-medium">{name}</h3>
                  <p className="text-sm text-gray-400">Especialista</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-6 flex items-center justify-center gap-3">
              <Globe className="h-8 w-8 text-blue-400" />
              Junte-se a Nós
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Estamos sempre buscando melhorar. Sua opinião é importante para nós!
            </p> 
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}