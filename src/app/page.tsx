'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { SeriesCarousel } from '@/components/SeriesCarousel';

const series = [
  { id: 'lagos-hustle', title: 'Lagos Hustle', subtitle: 'LAGOS', tag: 'Trending', image: '/images/lagos-hustle.png', description: "One man's struggle for the ultimate comeback in West Africa's biggest city." },
  { id: 'nkems-story', title: 'Nkem’s Story', subtitle: 'NKEM’S', tag: 'New Episode', image: '/images/nkems-story.png' },
  { id: 'village-ceo', title: 'The Village CEO', subtitle: 'VILLAGE', tag: 'Original', image: '/images/village-ceo.png' },
];

export default function Home() {
  const featured = series[0];

  return (
    <div className="min-h-screen transition-all duration-500 flex flex-col items-center">

      {/* Mobile Floating Header */}
      <header className="fixed top-6 left-6 right-6 lg:hidden z-50 glass-morphism p-5 rounded-3xl flex justify-between items-center shadow-2xl">
        <div className="flex items-center gap-3 pl-1">
          <Image src="/images/logo.png" alt="Super Shorts" width={28} height={28} className="rounded-lg shadow-[0_0_15px_rgba(0,255,136,0.3)]" />
          <span className="text-xl font-black italic tracking-tighter uppercase text-white">SUPER</span>
        </div>
        <div className="flex gap-3">
          <button className="w-11 h-11 bg-white/5 rounded-full flex items-center justify-center border border-white/10 text-white active:scale-95 transition-all">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          <div className="w-11 h-11 bg-primary rounded-full flex items-center justify-center text-black font-black text-xs shadow-lg shadow-primary/20">JD</div>
        </div>
      </header>

      {/* Desktop Floating Header */}
      <div className="hidden lg:flex fixed top-8 right-12 left-[400px] z-40 justify-between items-center glass-morphism p-5 px-10 rounded-[32px] shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all hover:bg-black/50">
        <div className="relative w-[450px]">
          <input
            type="text"
            placeholder="Search for series or original creators..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 px-12 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-medium text-sm text-white"
          />
          <svg className="w-5 h-5 absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>

        <div className="flex items-center gap-8">
          <button className="bg-primary text-black font-black px-10 py-3.5 rounded-2xl shadow-[0_8px_20px_rgba(0,255,136,0.3)] hover:scale-105 active:scale-95 transition-all text-[11px] uppercase tracking-[0.2em]">UPLOAD</button>

          <div className="flex items-center gap-5 border-l border-white/10 pl-8 h-12">
            <div className="text-right">
              <p className="font-bold text-sm text-white leading-none mb-1.5 uppercase tracking-tight">John Doe</p>
              <div className="flex items-center gap-1 justify-end">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                <p className="text-[9px] text-primary font-black uppercase tracking-widest">Premium</p>
              </div>
            </div>
            <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center text-black font-black text-sm shadow-lg shadow-primary/20 cursor-pointer hover:rotate-3 transition-transform">JD</div>
          </div>
        </div>
      </div>

      {/* Content Wrapper */}
      <div className="container-pill lg:mt-32 pt-32 lg:pt-0 section-spacing">

        <Hero
          title="HUSTLE"
          subtitle="LAGOS"
          tag="Featured Series"
          description={featured.description!}
          image={featured.image}
          watchLink="/feed?mode=binge"
        />

        <div className="space-y-20 lg:space-y-32 pb-24 lg:pb-12">
          <SeriesCarousel title="Top Trending" items={series} />

          {/* Trending Trailers Section */}
          <section className="space-y-8">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-3xl lg:text-4xl font-black italic text-white uppercase tracking-tighter">Exclusive <span className="text-primary italic">Previews</span></h2>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Discover new legends coming to Super Shorts</p>
              </div>
              <button className="bg-white/5 border border-white/10 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Explore all trailers</button>
            </div>

            <div className="relative w-full aspect-[21/9] rounded-[40px] overflow-hidden group shadow-2xl border border-white/5 bg-onyx">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover opacity-60 transition-transform duration-[10000ms] group-hover:scale-110"
                >
                  <source src="/videos/lagos-trailer-bg.mp4" type="video/mp4" />
                  {/* Fallback to our cinematic mockup if video fails */}
                  <img src="/images/lagos-hustle-trailer.png" className="w-full h-full object-cover" />
                </video>
              </div>

              <div className="absolute inset-0 z-10 p-8 lg:p-12 flex flex-col justify-end">
                <div className="flex items-end justify-between items-center">
                  <div className="max-w-xl">
                    <span className="bg-primary text-black text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-3">Trending Trailer</span>
                    <h3 className="text-4xl lg:text-6xl font-black italic text-white uppercase italic tracking-tighter leading-none mb-4">THE BALOGUN <span className="text-primary">GAMBIT</span></h3>
                    <p className="text-sm text-gray-300 font-medium line-clamp-2 lg:line-clamp-none">When a high-stakes deal goes south in the heart of Balogun Market, a local fixer must outwit the city's most dangerous cartels to save his family.</p>
                  </div>
                  <Link href="/feed?mode=binge" className="bg-white text-black font-black w-16 h-16 rounded-full flex items-center justify-center shadow-xl active:scale-90 transition-all hover:scale-110 mb-2">
                    <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <SeriesCarousel title="Exclusive Originals" items={[...series].reverse()} />
          <SeriesCarousel title="Most Watched" items={series} />
        </div>
      </div>
    </div>
  );
}
