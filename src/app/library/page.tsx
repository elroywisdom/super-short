'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DOWNLOADED_EPISODES = [
    { id: 1, title: 'The Balogun Gambit', series: 'Lagos Hustle', size: '24 MB', expiry: '22h left', image: '/images/lagos-hustle.png' },
    { id: 2, title: 'Village CEO: Part 1', series: 'The Village CEO', size: '18 MB', expiry: '18h left', image: '/images/village-ceo.png' },
];

export default function LibraryPage() {
    return (
        <div className="min-h-screen bg-background pb-32">
            <div className="container-pill mt-12 lg:mt-32">

                {/* Header */}
                <div className="flex justify-between items-end mb-16 px-4 lg:px-0">
                    <div>
                        <h1 className="text-5xl lg:text-7xl font-black italic uppercase italic tracking-tighter text-white">
                            MY <span className="text-primary italic">VAULT</span>
                        </h1>
                        <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mt-3">Downloaded & Saved for Offline Binging</p>
                    </div>
                    <div className="hidden lg:flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl">
                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center border border-primary/40">
                            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.45 12.15l-2.42 2.42c-.41.41-1.09.41-1.5 0l-2.42-2.42c-.41-.41-.41-1.09 0-1.5s1.09-.41 1.5 0l.67.67V9c0-.55.45-1 1-1s1 .45 1 1v4.32l.67-.67c.41-.41 1.09-.41 1.5 0s.41 1.09 0 1.5z" /></svg>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Vault Storage</p>
                            <p className="text-sm font-black text-white">1.2 GB / 5.0 GB</p>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Downloads Section */}
                    <div className="lg:col-span-3 space-y-10">
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <h2 className="text-2xl font-black italic text-white uppercase tracking-tighter">Downloaded Episodes</h2>
                                <div className="h-px flex-1 bg-white/5" />
                                <span className="text-[10px] font-black text-primary bg-primary/10 px-3 py-1 rounded-full uppercase">Offline Enabled</span>
                            </div>

                            <div className="grid gap-6">
                                {DOWNLOADED_EPISODES.map((ep) => (
                                    <div key={ep.id} className="glass-morphism group rounded-[32px] p-5 flex items-center gap-6 hover:border-primary/40 transition-all cursor-pointer">
                                        <div className="relative w-32 h-20 lg:w-48 lg:h-32 rounded-2xl overflow-hidden shadow-2xl">
                                            <Image src={ep.image} alt={ep.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                            </div>
                                        </div>

                                        <div className="flex-1">
                                            <span className="text-primary font-black text-[10px] uppercase italic tracking-widest">{ep.series}</span>
                                            <h3 className="text-xl lg:text-2xl font-black text-white uppercase italic tracking-tighter my-2">{ep.title}</h3>
                                            <div className="flex items-center gap-4 text-xs font-bold text-gray-500 uppercase tracking-tight">
                                                <span>{ep.size}</span>
                                                <span className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                                                <span className="text-orange-500">{ep.expiry}</span>
                                            </div>
                                        </div>

                                        <button className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all mr-2">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <h2 className="text-2xl font-black italic text-white uppercase tracking-tighter">Recommended for you</h2>
                                <div className="h-px flex-1 bg-white/5" />
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="group cursor-pointer">
                                        <div className="relative aspect-[9/12] rounded-[28px] overflow-hidden mb-4 border border-white/5 grayscale group-hover:grayscale-0 transition-all shadow-xl">
                                            <Image src="/images/nkems-story.png" alt="Recom" fill className="object-cover" />
                                            <div className="absolute top-3 right-3 bg-primary text-black text-[8px] font-black px-2 py-1 rounded-md">FREE NIGHT DATA</div>
                                        </div>
                                        <h4 className="text-sm font-black text-white uppercase italic tracking-tighter truncate">Nkem's Secret: Ep 2</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Stats & Settings */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-primary text-black p-8 rounded-[40px] shadow-2xl shadow-primary/20">
                            <h3 className="font-black italic uppercase italic tracking-tighter text-lg leading-tight mb-6">DATA CONSERVATION MODE</h3>
                            <p className="text-xs font-bold leading-relaxed mb-8 opacity-80 uppercase tracking-tighter">
                                You have saved <span className="text-sm font-black">450 MB</span> of data this month by downloading via night-time credits.
                            </p>
                            <button className="w-full bg-black text-white font-black py-4 rounded-2xl text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">ENABLE AUTO-DOWNLOAD</button>
                        </div>

                        <div className="glass-morphism p-8 rounded-[40px] shadow-xl">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-8">Collection Stats</h3>
                            <div className="space-y-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-bold text-gray-300">Total Watched</span>
                                    <span className="text-lg font-black text-white">42 Ep</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-bold text-gray-300">Unlocked Series</span>
                                    <span className="text-lg font-black text-white">8 Full</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-bold text-gray-300">Watch Time</span>
                                    <span className="text-lg font-black text-white">12h 45m</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
