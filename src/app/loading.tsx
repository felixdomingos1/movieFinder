import { Skeleton } from "@/components/components/ui/skeleton";
import { GlowEffects, ParticleBackground } from "@/components/effects/background";

export default function Loading() {
    return (
        <div className="min-h-screen bg-black relative overflow-hidden">
            <ParticleBackground />
            <GlowEffects />

            <div className="container mx-auto px-4 py-24 relative z-10">
                {/* Header Skeleton */}
                <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10 shadow-lg">
                    <div className="container mx-auto flex items-center justify-between h-16 px-4">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <Skeleton className="w-6 h-6 rounded-full bg-purple-500/30" />
                            <Skeleton className="h-6 w-28 rounded-full bg-white/20" />
                        </div>

                        {/* Desktop Nav Links */}
                        <div className="hidden md:flex items-center gap-6">
                            {[...Array(4)].map((_, i) => (
                                <Skeleton key={i} className="h-4 w-16 rounded-full bg-white/10" />
                            ))}
                        </div>

                        {/* Search Bar */}
                        <div className="hidden md:flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                            <Skeleton className="w-4 h-4 rounded-full bg-white/20" />
                            <Skeleton className="h-6 w-24 rounded-full bg-white/10" />
                        </div>

                        {/* Mobile Menu Icon */}
                        <div className="md:hidden">
                            <Skeleton className="w-6 h-6 rounded-full bg-white/20" />
                        </div>
                    </div>
                </div>


                {/* Main Content Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="space-y-2">
                            <Skeleton className="aspect-[2/3] w-full rounded-xl bg-white/10" />
                            <Skeleton className="h-4 w-3/4 rounded-full bg-white/10" />
                            <Skeleton className="h-4 w-1/2 rounded-full bg-white/10" />
                        </div>
                    ))}
                </div>

                {/* Section Title */}
                <div className="mt-16 mb-6">
                    <Skeleton className="h-8 w-64 rounded-full" />
                </div>

                {/* Horizontal Scroll Loading */}
                <div className="flex space-x-4 overflow-x-auto pb-4">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex-none w-64">
                            <Skeleton className="aspect-video w-full rounded-lg bg-white/10" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating Loading Indicator */}
            <div className="fixed bottom-8 right-8 z-50 flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <div className="h-2 w-2 rounded-full bg-purple-500 animate-bounce-delay-1" />
                <div className="h-2 w-2 rounded-full bg-pink-500 animate-bounce-delay-2" />
                <div className="h-2 w-2 rounded-full bg-blue-500 animate-bounce-delay-3" />
                <span className="text-sm text-white/80 ml-1">Carregando</span>
            </div>
        </div>
    );
}