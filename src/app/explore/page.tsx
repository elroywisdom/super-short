'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const GENRES = [
    { name: 'Nollywood Crime', count: '124', icon: '🔫' },
    { name: 'Village Drama', count: '86', icon: '🛖' },
    { name: 'Afrobeats RomCom', count: '52', icon: '❤️' },
    { name: 'Supernatural', count: '31', icon: '🔮' },
];

const TRENDING_SEARCHES = ['Ghetto Dreamer', 'Chief Daddy', 'Mushin Market Days', 'Secret Billionaire'];

export default function ExplorePage() {
    return (
        <div className="min-h-screen bg-background pb-32">
            <div className="container-pill mt-12 lg:mt-32">

                {/* Search Bar Header */}
                <div className="mb-16 px-4 lg:px-0">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl lg:text-7xl font-black italic uppercase tracking-tighter text-white mb-8">
                            EXPLORE <span className="text-primary italic">STORIES</span>
                        </h1>
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Search genres, creators, or keywords..."
                                className="w-full bg-white/5 border border-white/10 rounded-[32px] py-6 px-16 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-bold text-xl text-white placeholder:text-gray-600 shadow-2xl"
                            />
                            <svg className="w-8 h-8 absolute left-6 top-1/2 -translate-y-1/2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </div>

                        <div className="flex flex-wrap gap-3 mt-6">
                            {TRENDING_SEARCHES.map((tag) => (
                                <button key={tag} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-primary hover:border-primary/40 transition-all">
                                    #{tag}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {GENRES.map((genre) => (
                        <div key={genre.name} className="glass-morphism p-8 rounded-[40px] hover:bg-white/5 transition-all group flex flex-col justify-between h-48 cursor-pointer relative overflow-hidden">
                            <span className="text-4xl relative z-10">{genre.icon}</span>
                            <div className="relative z-10">
                                <h3 className="text-lg font-black text-white uppercase italic tracking-tighter">{genre.name}</h3>
                                <p className="text-[10px] text-primary font-black uppercase tracking-widest mt-1">{genre.count} Series</p>
                            </div>
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all" />
                        </div>
                    ))}
                </div>

                {/* Featured Creators Section */}
                <div className="space-y-10">
                    <div className="flex justify-between items-center px-4 lg:px-0">
                        <h2 className="text-3xl font-black italic text-white uppercase tracking-tighter">Rising Creators</h2>
                        <button className="text-primary text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors">View All</button>
                    </div>

                    <div className="flex gap-8 overflow-x-auto no-scrollbar pb-10 pl-4 lg:pl-0">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex-shrink-0 w-40 text-center group cursor-pointer">
                                <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden mb-4 border-4 border-white/5 group-hover:border-primary transition-all p-1">
                                    <div className="w-full h-full rounded-full overflow-hidden relative">
                                        <Image src="/images/nkems-story.png" alt="Creator" fill className="object-cover" />
                                    </div>
                                </div>
                                <h4 className="text-base font-black text-white italic uppercase tracking-tighter group-hover:text-primary transition-colors">@creator_{i}</h4>
                                <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1">1.2M Likes</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
