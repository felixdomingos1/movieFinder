'use client';

import { Button } from '@/components/components/ui/button';
import { Shield, Lock, EyeOff, Key, Database, Mail } from 'lucide-react';
import Link from 'next/link';
import GlassNavbar from '@/components/navbar/glass';
import Footer from '@/components/footer/footer';
import { GlowEffects, ParticleBackground } from '@/components/effects/background';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
            <ParticleBackground />
            <GlowEffects />
            <GlassNavbar search={true} />

            <div className="container mx-auto px-4 py-16 md:py-24 relative z-30">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center bg-blue-500/20 p-4 rounded-full mb-6">
                            <Shield className="h-12 w-12 text-blue-400" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                            Política de Privacidade
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Sua privacidade é importante para nós. Saiba como protegemos seus dados.
                        </p>
                    </div>

                    <div className="rounded-xl p-8">
                        <div className="space-y-8">
                            <section>
                                <div className="flex items-center gap-4 mb-6">
                                    <Lock className="h-8 w-8 text-blue-400" />
                                    <h2 className="text-2xl font-bold">Informações que Coletamos</h2>
                                </div>
                                <p className="text-gray-300 mb-4">
                                    Coletamos informações para fornecer melhores serviços a todos os nossos usuários.
                                </p>
                                <ul className="space-y-3 text-gray-300 pl-5 list-disc">
                                    <li>Informações que você nos fornece diretamente</li>
                                    <li>Dados de uso de nossos serviços</li>
                                    <li>Informações de dispositivos</li>
                                    <li>Cookies e tecnologias similares</li>
                                </ul>
                            </section>

                            <section>
                                <div className="flex items-center gap-4 mb-6">
                                    <EyeOff className="h-8 w-8 text-blue-400" />
                                    <h2 className="text-2xl font-bold">Como Usamos Suas Informações</h2>
                                </div>
                                <p className="text-gray-300">
                                    Utilizamos as informações que coletamos para fornecer, manter, proteger e melhorar nossos serviços.
                                </p>
                            </section>

                            <section>
                                <div className="flex items-center gap-4 mb-6">
                                    <Key className="h-8 w-8 text-blue-400" />
                                    <h2 className="text-2xl font-bold">Proteção de Dados</h2>
                                </div>
                                <p className="text-gray-300 mb-4">
                                    Implementamos medidas de segurança para proteger suas informações:
                                </p>
                                <ul className="space-y-3 text-gray-300 pl-5 list-disc">
                                    <li>Criptografia de dados</li>
                                    <li>Controles de segurança físicos e digitais</li>
                                    <li>Revisões regulares de nossas práticas</li>
                                </ul>
                            </section>

                            <section>
                                <div className="flex items-center gap-4 mb-6">
                                    <Database className="h-8 w-8 text-blue-400" />
                                    <h2 className="text-2xl font-bold">Armazenamento de Dados</h2>
                                </div>
                                <p className="text-gray-300">
                                    Seus dados são armazenados em servidores seguros e só são mantidos pelo tempo necessário para fornecer nossos serviços.
                                </p>
                            </section>

                            <section>
                                <div className="flex items-center gap-4 mb-6">
                                    <Mail className="h-8 w-8 text-blue-400" />
                                    <h2 className="text-2xl font-bold">Contato</h2>
                                </div>
                                <p className="text-gray-300">
                                    Para dúvidas sobre nossa política de privacidade, entre em contato através do email: privacy@filmes.com
                                </p>
                            </section>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
                            <p className="text-gray-400 mb-6">
                                Última atualização: {new Date().toLocaleDateString('pt-BR')}
                            </p>
                            <Button asChild variant="outline" className="gap-2 bg-transparent hover:bg-white/10">
                                <Link href="/">
                                    Voltar à Página Inicial
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}