'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const VIBES = [
    { id: 'mushin', title: 'MUSHIN GRIT', tags: ['STREET', 'HARDCORE', 'CRIME'], color: 'from-orange-600', icon: '🔫' },
    { id: 'lekki', title: 'LEKKI LUXURY', tags: ['HIGH SOCIETY', 'GLAMOUR', 'DRAMA'], color: 'from-purple-600', icon: '💎' },
    { id: 'village', title: 'VILLAGE LEGENDS', tags: ['TRADITIONAL', 'MYTH', 'EPIC'], color: 'from-green-700', icon: '🛖' },
    { id: 'cruise', title: 'NAIJA CRUISE', tags: ['COMEDY', 'VIBES', 'DAILY LIFE'], color: 'from-yellow-500', icon: '😂' },
    { id: 'ghetto', title: 'GHETTO DREAMER', tags: ['MOTIVATIONAL', 'UNDERDOG'], color: 'from-blue-600', icon: '🚀' },
    { id: 'power', title: 'POLITICS & POWER', tags: ['THRILLER', 'SCANDAL', 'ELITES'], color: 'from-red-700', icon: '🏛️' },
];

export default function OnboardingPage() {
    const [selected, setSelected] = useState<string[]>([]);
    const router = useRouter();

    const toggle = (id: string) => {
        setSelected(prev =>
            prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
        );
    };

    return (
        <div className="fixed inset-0 bg-background z-[100] flex flex-col p-8 overflow-y-auto no-scrollbar">
            {/* Background Decor */}
            <div className="fixed top-0 right-0 w-64 h-64 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 pt-12 text-center mb-12">
                <div className="flex justify-center mb-6">
                    <Image src="/images/logo.png" alt="Logo" width={48} height={48} className="rounded-xl shadow-2xl" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-black italic uppercase italic tracking-tighter text-white mb-4">
                    CHOOSE YOUR <span className="text-primary italic">VIBE</span>
                </h1>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Customize your feed for the ultimate binge</p>
            </div>

            <div className="grid grid-cols-1 gap-6 relative z-10 max-w-md mx-auto w-full pb-32">
                {VIBES.map((vibe) => (
                    <div
                        key={vibe.id}
                        onClick={() => toggle(vibe.id)}
                        className={`relative h-32 rounded-[32px] overflow-hidden cursor-pointer transition-all duration-500 border-2 ${selected.includes(vibe.id) ? 'border-primary ring-4 ring-primary/20 scale-[1.02]' : 'border-white/5'
                            }`}
                    >
                        {/* Background Gradient & Icon */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${vibe.color} to-black opacity-30`} />
                        <div className="absolute top-1/2 -translate-y-1/2 right-8 text-5xl opacity-40 group-hover:opacity-100 transition-opacity">
                            {vibe.icon}
                        </div>

                        <div className="absolute inset-0 p-8 flex flex-col justify-center">
                            <h3 className="text-2xl font-black italic text-white uppercase tracking-tighter mb-2">{vibe.title}</h3>
                            <div className="flex gap-2 flex-wrap">
                                {vibe.tags.map(tag => (
                                    <span key={tag} className="text-[8px] font-black text-white/60 bg-white/5 border border-white/10 px-2 py-0.5 rounded uppercase tracking-widest">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {selected.includes(vibe.id) && (
                            <div className="absolute top-6 right-6 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg animate-scale-in">
                                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Bottom Action Bar */}
            <div className="fixed bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background via-background to-transparent z-50 flex flex-col items-center">
                <button
                    onClick={() => router.push('/feed')}
                    disabled={selected.length === 0}
                    className={`w-full max-w-md py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all shadow-2xl ${selected.length > 0
                        ? 'bg-primary text-black hover:scale-[1.03] active:scale-95'
                        : 'bg-white/5 text-gray-500 cursor-not-allowed border border-white/5'
                        }`}
                >
                    {selected.length > 0 ? `START WATCHING (${selected.length})` : 'SELECT AT LEAST 1'}
                </button>
                <button
                    onClick={() => router.push('/feed')}
                    className="mt-6 text-[10px] font-black text-gray-500 uppercase tracking-widest hover:text-white transition-colors"
                >
                    SKIP FOR NOW
                </button>
            </div>
        </div>
    );
}
