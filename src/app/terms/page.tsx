'use client';

import { Button } from '@/components/components/ui/button';
import { FileText, Gavel, AlertCircle, Clipboard, Scale } from 'lucide-react';
import Link from 'next/link';
import GlassNavbar from '@/components/navbar/glass';
import Footer from '@/components/footer/footer';
import { GlowEffects, ParticleBackground } from '@/components/effects/background';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <ParticleBackground />
      <GlowEffects />
      <GlassNavbar search={true} />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center bg-purple-500/20 p-4 rounded-full mb-6">
              <Gavel className="h-12 w-12 text-purple-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              Termos de Serviço
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ao usar nosso serviço, você concorda com estes termos. Leia com atenção.
            </p>
          </div>

          <div className=" p-8 ">
            <div className="space-y-10">
              <section>
                <div className="flex items-center gap-4 mb-6">
                  <FileText className="h-8 w-8 text-purple-400" />
                  <h2 className="text-2xl font-bold">1. Aceitação dos Termos</h2>
                </div>
                <p className="text-gray-300">
                  Ao acessar ou usar o serviço, você concorda em ficar vinculado por estes Termos. Se você não concordar com qualquer parte dos termos, não deve usar nosso serviço.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-6">
                  <Clipboard className="h-8 w-8 text-purple-400" />
                  <h2 className="text-2xl font-bold">2. Uso do Serviço</h2>
                </div>
                <p className="text-gray-300 mb-4">
                  Você concorda em usar o serviço apenas para fins legais e de acordo com estes Termos:
                </p>
                <ul className="space-y-3 text-gray-300 pl-5 list-disc">
                  <li>Não usar para atividades ilegais</li>
                  <li>Não violar direitos de propriedade intelectual</li>
                  <li>Não interferir na segurança do serviço</li>
                  <li>Não criar contas falsas</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-6">
                  <AlertCircle className="h-8 w-8 text-purple-400" />
                  <h2 className="text-2xl font-bold">3. Limitações de Responsabilidade</h2>
                </div>
                <p className="text-gray-300">
                  Não nos responsabilizamos por quaisquer danos indiretos, incidentais, especiais ou consequenciais decorrentes do uso ou incapacidade de usar o serviço.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-6">
                  <Scale className="h-8 w-8 text-purple-400" />
                  <h2 className="text-2xl font-bold">4. Modificações</h2>
                </div>
                <p className="text-gray-300">
                  Reservamos o direito de modificar estes Termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação. Seu uso contínuo do serviço constitui aceitação das alterações.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-6">5. Lei Aplicável</h2>
                <p className="text-gray-300">
                  Estes Termos serão regidos e interpretados de acordo com as leis do país onde nossa empresa está estabelecida, sem considerar seus conflitos de disposições legais.
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-700 text-center">
              <p className="text-gray-400 mb-6">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p> 
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}