'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const SERIES_DATA: Record<string, any> = {
    'lagos-hustle': {
        title: 'LAGOS HUSTLE',
        tags: ['Drama', 'Crime', 'Trending'],
        rating: '4.8',
        views: '1.2M',
        description: 'In the heart of Eko, Bisi’s struggle for the ultimate comeback begins. From the streets of Mushin to the penthouses of Victoria Island, witness the grit and glamour of West Africa’s biggest city.',
        episodes: [
            { id: 1, title: 'The Balogun Gambit', duration: '1:45', isLocked: false, thumbnail: '/images/lagos-hustle.png' },
            { id: 2, title: 'Mushin Midnight', duration: '2:10', isLocked: false, thumbnail: '/images/lagos-hustle.png' },
            { id: 3, title: 'Third Mainland Chase', duration: '1:55', isLocked: true, thumbnail: '/images/lagos-hustle.png' },
            { id: 4, title: 'The P&P Deal', duration: '2:30', isLocked: true, thumbnail: '/images/lagos-hustle.png' },
            { id: 5, title: 'Lekki Lockdown', duration: '1:40', isLocked: true, thumbnail: '/images/lagos-hustle.png' },
            { id: 6, title: 'Final Hustle', duration: '3:00', isLocked: true, thumbnail: '/images/lagos-hustle.png' },
        ]
    }
};

export default function SeriesPage() {
    const params = useParams();
    const id = params.id as string;
    const series = SERIES_DATA[id] || SERIES_DATA['lagos-hustle'];

    return (
        <div className="min-h-screen bg-background pb-32">
            {/* Cinematic Background Header */}
            <div className="relative w-full h-[50vh] lg:h-[60vh] overflow-hidden">
                <Image
                    src={series.thumbnail || '/images/lagos-hustle.png'}
                    alt={series.title}
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-8 lg:p-16 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="flex items-center gap-2 mb-4">
                        {series.tags.map((tag: string) => (
                            <span key={tag} className="text-[10px] font-black uppercase tracking-widest bg-primary/20 text-primary px-3 py-1 rounded-full border border-primary/30">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-5xl lg:text-8xl font-black italic uppercase italic tracking-tighter mb-4 text-white">
                        {series.title}
                    </h1>
                    <div className="flex items-center gap-6 text-gray-400 font-bold text-sm mb-8">
                        <span className="flex items-center gap-1.5"><span className="text-primary">★</span> {series.rating}</span>
                        <span>{series.views} Views</span>
                        <span>2024</span>
                    </div>

                    <div className="flex gap-4 w-full lg:w-auto">
                        <Link href="/feed?mode=binge" className="flex-1 lg:flex-none bg-primary text-black font-black px-12 py-4.5 rounded-2xl flex items-center justify-center gap-3 shadow-[0_15px_30px_rgba(0,255,136,0.3)] hover:scale-105 active:scale-95 transition-all uppercase tracking-widest text-xs">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                            START BINGING
                        </Link>
                        <button className="h-14 lg:w-16 glass-morphism rounded-2xl flex items-center justify-center text-white hover:bg-white/10 transition-all">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Description & Episodes */}
            <div className="container-pill mt-12 grid lg:grid-cols-3 gap-16">
                <div className="lg:col-span-1">
                    <h2 className="text-2xl font-black italic tracking-tighter mb-6 text-white uppercase">Storyline</h2>
                    <p className="text-gray-400 leading-relaxed text-lg lg:text-base font-medium">
                        {series.description}
                    </p>

                    <div className="mt-12 bg-white/5 border border-white/10 rounded-[32px] p-8">
                        <h4 className="font-black italic uppercase text-primary mb-4 text-sm tracking-widest">PRODUCER NOTE</h4>
                        <p className="text-sm text-gray-300 italic leading-relaxed">
                            "Lagos Hustle is strictly shot on 12K cameras to bring the most immersive experience to your phone. Unlock all episodes for just ₦200."
                        </p>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-2xl font-black italic tracking-tighter text-white uppercase">Sachet Episodes</h2>
                        <span className="text-xs font-black text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                            SACHET PRICE: ₦50/EP
                        </span>
                    </div>

                    <div className="grid gap-6">
                        {series.episodes.map((ep: any) => (
                            <div key={ep.id} className="group relative bg-white/5 border border-white/5 hover:border-primary/40 p-4 rounded-[28px] flex items-center gap-6 transition-all cursor-pointer">
                                <div className="relative w-32 h-20 lg:w-48 lg:h-28 flex-shrink-0 rounded-2xl overflow-hidden shadow-xl">
                                    <Image src={ep.thumbnail} alt={ep.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                    {ep.isLocked ? (
                                        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center z-10">
                                            <svg className="w-6 h-6 text-primary drop-shadow-[0_0_10px_#00FF88]" fill="currentColor" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" /></svg>
                                        </div>
                                    ) : (
                                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors" />
                                    )}
                                    <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded-md text-[9px] font-black text-white">{ep.duration}</div>
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-primary font-black text-xs uppercase italic tracking-tighter">Episode {ep.id}</span>
                                        {!ep.isLocked && <span className="bg-green-500/20 text-green-500 text-[8px] font-black px-1.5 py-0.5 rounded uppercase">Unlocked</span>}
                                    </div>
                                    <h3 className="text-lg lg:text-xl font-black text-white uppercase tracking-tight line-clamp-1">{ep.title}</h3>
                                    <p className="text-xs text-gray-500 font-medium mt-1">Released Feb 12, 2024</p>
                                </div>

                                <div className="pr-4">
                                    {ep.isLocked ? (
                                        <button className="bg-primary text-black font-black w-10 h-10 rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-all hover:scale-110">
                                            ₦50
                                        </button>
                                    ) : (
                                        <button className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
