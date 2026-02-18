'use client';

import React, { useState, useRef, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { EpisodeLock } from '@/components/EpisodeLock';
import { CinematicTrailer } from '@/components/CinematicTrailer';

const FEED_ITEMS = [
  {
    id: 1,
    series: 'Lagos Hustle',
    episode: 1,
    type: 'trailer',
    description: 'Bisi makes a risky deal in Balogun Market. The city of Lagos is about to change forever.',
    user: '@bisifiles',
    likes: '12.4K',
    comments: '432',
    image: '/images/lagos-hustle-trailer.png',
    video: '/videos/lagos-hustle.mp4',
    isLocked: false,
  },
  {
    id: 2,
    series: 'Nkem’s Story',
    episode: 5,
    type: 'episode',
    description: 'The secret revealed at the gala brunch makes everyone question their loyalty.',
    user: '@nkemdrama',
    likes: '24.1K',
    comments: '1.2K',
    image: '/images/nkems-story.png',
    video: '/videos/nkems-story.mp4',
    isLocked: true,
  },
  {
    id: 3,
    series: 'The Village CEO',
    episode: 10,
    type: 'episode',
    description: 'Chief Kalu meets his match in the city, but the jungle rules still apply.',
    user: '@villageceo',
    likes: '8.9K',
    comments: '156',
    image: '/images/village-ceo.png',
    video: '/videos/village-ceo.mp4',
    isLocked: false,
  },
];

function FeedContent() {
  const [activeItem, setActiveItem] = useState(0);
  const [unlockedItems, setUnlockedItems] = useState<number[]>([]);
  const [showEpisodes, setShowEpisodes] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState('1-50');
  const scrollRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const mode = searchParams.get('mode');

  useEffect(() => {
    if (mode === 'binge' && scrollRef.current) {
      const firstEpIdx = FEED_ITEMS.findIndex(item => item.type === 'episode');
      if (firstEpIdx !== -1) {
        setTimeout(() => {
          if (scrollRef.current) {
            scrollRef.current.scrollTop = firstEpIdx * window.innerHeight;
            setActiveItem(firstEpIdx);
            setControlsVisible(false);
          }
        }, 100);
      }
    }
  }, [mode]);

  const handleUnlock = (id: number) => {
    setUnlockedItems((prev) => [...prev, id]);
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const index = Math.round(scrollRef.current.scrollTop / window.innerHeight);
      setActiveItem(index);
      setControlsVisible(false); // Hide controls on scroll
    }
  };

  const toggleControls = (e: React.MouseEvent) => {
    // Only toggle if we didn't click a button/interactive element
    if ((e.target as HTMLElement).closest('button, a, .group')) return;
    setControlsVisible(!controlsVisible);
  };

  return (
    <main
      ref={scrollRef}
      onScroll={handleScroll}
      className="h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-background no-scrollbar flex justify-center relative touch-pan-y"
    >
      {/* Episodes Bottom Sheet Overlay */}
      {showEpisodes && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowEpisodes(false)} />
          <div className="relative w-full lg:max-w-md bg-zinc-900 rounded-t-[40px] p-8 animate-slide-up shadow-2xl border-t border-white/10">
            <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mb-8" onClick={() => setShowEpisodes(false)} />

            <div className="flex gap-8 mb-8 border-b border-white/5 pb-4">
              <button className="text-sm font-black text-white italic transition-all border-b-2 border-primary pb-2 uppercase tracking-tighter">Synopsis</button>
              <button className="text-sm font-black text-primary italic transition-all border-b-2 border-primary pb-2 uppercase tracking-tighter">Episodes</button>
            </div>

            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setSelectedSeason('1-50')}
                className={`text-xs font-black px-4 py-2 rounded-lg uppercase tracking-widest transition-all ${selectedSeason === '1-50' ? 'text-primary bg-primary/10' : 'text-gray-500'}`}
              >
                1-50
              </button>
              <button
                onClick={() => setSelectedSeason('51-72')}
                className={`text-xs font-black px-4 py-2 rounded-lg uppercase tracking-widest transition-all ${selectedSeason === '51-72' ? 'text-primary bg-primary/10' : 'text-gray-500'}`}
              >
                51-72
              </button>
            </div>

            <div className="grid grid-cols-5 gap-3 max-h-[40vh] overflow-y-auto no-scrollbar pb-10">
              {Array.from({ length: 40 }).map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-xl flex items-center justify-center font-black text-sm relative border transition-all active:scale-95 ${i === 0 ? 'bg-primary/20 border-primary text-primary' : 'bg-white/5 border-white/5 text-gray-400'}`}
                >
                  {i === 0 ? (
                    <div className="flex gap-0.5 items-end h-3">
                      <div className="w-0.5 h-full bg-primary animate-pulse" />
                      <div className="w-0.5 h-2/3 bg-primary animate-pulse delay-75" />
                      <div className="w-0.5 h-full bg-primary animate-pulse delay-150" />
                    </div>
                  ) : (
                    i + 1
                  )}
                  {i > 10 && (
                    <div className="absolute -top-1 -right-1 bg-red-500 text-[8px] p-1 rounded-md shadow-lg border border-red-400">
                      <svg className="w-2 h-2 text-white fill-current" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z" /></svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="w-full lg:max-w-[450px] lg:my-4">
        {FEED_ITEMS.map((item, idx) => {
          const isLocked = item.isLocked && !unlockedItems.includes(item.id);
          const isTrailer = item.type === 'trailer';

          return (
            <div
              key={item.id}
              onClick={toggleControls}
              className="relative h-screen lg:h-[calc(100vh-32px)] w-full snap-start overflow-hidden bg-onyx lg:rounded-[24px] shadow-2xl cursor-pointer"
            >
              {/* Cinematic Trailer (Simulated Video) */}
              <CinematicTrailer
                image={item.image}
                video={(item as any).video}
                isActive={activeItem === idx}
              />

              {/* Dark Overlay Shadow - Trailers have more visible shadow, episodes hide it */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent via-40% to-black/60 transition-opacity duration-500 ${(controlsVisible || isTrailer) ? 'opacity-100' : 'opacity-40'}`} />

              {/* Paywall Overlay */}
              {isLocked && (
                <EpisodeLock
                  episodeNumber={item.episode}
                  onUnlock={() => handleUnlock(item.id)}
                />
              )}

              {/* Feed Header */}
              <div className={`absolute top-0 w-full flex justify-between items-center p-6 z-30 lg:hidden transition-all duration-500 ${(controlsVisible || isTrailer) ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}>
                <Link href="/" onClick={(e) => e.stopPropagation()} className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </Link>
                <div className="flex bg-black/40 backdrop-blur-md rounded-full p-1 border border-white/10">
                  <button className="px-6 py-2 text-sm font-black text-primary italic uppercase tracking-tighter">For You</button>
                  <button className="px-6 py-2 text-sm font-black text-gray-400 italic uppercase tracking-tighter">Following</button>
                </div>
                <div className="w-10" />
              </div>

              {/* Action Buttons Sidebar */}
              <div className={`absolute right-4 bottom-36 lg:right-[-70px] lg:bottom-12 flex flex-col gap-6 items-center z-30 transition-all duration-500 ${(controlsVisible || isTrailer) ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0 pointer-events-none'}`}>
                <EngagementButton
                  icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>}
                  label="My List"
                />
                <EngagementButton
                  icon={<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>}
                  label={item.likes}
                />
                <EngagementButton
                  icon={<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>}
                  label={item.comments}
                />
                <div onClick={(e) => { e.stopPropagation(); setShowEpisodes(true); }} className="flex flex-col items-center gap-1 group cursor-pointer">
                  <div className="p-2 hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" /></svg>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-tighter">Episodes</span>
                </div>
                {!isTrailer && (
                  <Link href="/library" onClick={(e) => e.stopPropagation()} className="flex flex-col items-center gap-1 group cursor-pointer relative">
                    <div className="p-2 hover:scale-110 transition-transform">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-tighter">Download</span>
                    <div className="absolute -top-1 -right-2 bg-primary text-black text-[7px] font-black px-1 rounded-md shadow-lg border border-black/20">SACHET</div>
                  </Link>
                )}
                <EngagementButton
                  onClick={(e) => e.stopPropagation()}
                  icon={<svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.814 9.814 0 0012.04 2zM6.58 4.62c1.51-1.2 3.41-1.87 5.46-1.87 4.5 0 8.16 3.66 8.16 8.16 0 1.96-.7 3.82-1.96 5.23L16.43 14.5c.38-.85.57-1.78.57-2.74 0-3.15-2.55-5.71-5.71-5.71-2.13 0-4.08 1.18-5.07 3.07L6.58 4.62zm5.46 13.1c-1.37 0-2.68-.44-3.77-1.26l-.27-.16-3.11.81.83-3.03-.18-.29A8.106 8.106 0 014.28 11.9c0-4.5 3.66-8.16 8.16-8.16 4.5 0 8.16 3.66 8.16 8.16S17 20.06 12.04 20.06c-.16 0-.32 0-.48-.02l-.52-.04v-2.28z" /></svg>}
                  label="Share"
                />
              </div>

              {/* Bottom Info Overlay */}
              <div className={`absolute bottom-0 w-full p-6 pb-32 z-20 transition-all duration-500 ${(controlsVisible || isTrailer) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>

                {/* Watch Full Drama Button - ONLY FOR TRAILERS */}
                {isTrailer && (
                  <div className="absolute bottom-20 left-0 w-full flex justify-start z-50 px-6 pointer-events-auto">
                    <Link
                      href={`/series/${item.id}`}
                      onClick={(e) => e.stopPropagation()}
                      className="group flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full hover:bg-black/80 transition-all active:scale-95"
                    >
                      <span className="text-xs font-bold text-white uppercase tracking-wider">Watch Full Drama</span>
                      <svg className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </Link>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 bg-primary/20 border border-primary/50 rounded-full flex items-center justify-center font-black text-primary text-sm shadow-[0_0_15px_rgba(0,255,136,0.2)]">
                    {item.user[1].toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-black text-base italic uppercase italic tracking-tighter text-white">{item.user}</h4>
                    <p className="text-primary text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                      <span>{item.series}</span>
                      <span className="w-1 h-1 bg-white/20 rounded-full" />
                      <span>{isTrailer ? 'Suggestions' : `Episode ${item.episode}`}</span>
                    </p>
                  </div>
                </div>

                <div className="relative group">
                  <p className="text-gray-200 text-sm leading-snug max-w-[85%] line-clamp-2 transition-all">
                    <span className="font-black text-white italic uppercase mr-2 tracking-tighter">Synopsis:</span>
                    {item.description}
                  </p>
                  <button onClick={(e) => { e.stopPropagation(); setShowEpisodes(true); }} className="text-[9px] font-black text-primary uppercase mt-1 tracking-widest">Tap for full story</button>
                </div>

                {/* Progress Bar - Only for episodes */}
                {!isTrailer && (
                  <div className={`mt-6 w-full h-[3px] bg-white/10 rounded-full overflow-hidden transition-opacity duration-500 ${controlsVisible ? 'opacity-100' : 'opacity-40'}`}>
                    <div
                      className="h-full bg-primary shadow-[0_0_10px_#00FF88]"
                      style={{ width: activeItem === idx ? '65%' : '0%', transition: 'width 2s linear' }}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default function FeedPage() {
  return (
    <Suspense fallback={
      <div className="h-screen w-full bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <FeedContent />
    </Suspense>
  );
}

function EngagementButton({ icon, label, highlight = false, onClick }: { icon: React.ReactNode, label: string, highlight?: boolean, onClick?: (e: React.MouseEvent) => void }) {
  return (
    <div
      onClick={(e) => { e.stopPropagation(); onClick?.(e); }}
      className="flex flex-col items-center gap-1 group cursor-pointer"
    >
      <div className={`p-2 transition-transform active:scale-90 ${highlight ? 'hover:text-primary' : 'hover:scale-110'}`}>
        {icon}
      </div>
      <span className="text-[10px] font-black uppercase tracking-tighter">{label}</span>
    </div>
  );
}
