'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SeriesCardProps {
    id: string;
    title: string;
    tag?: string;
    image: string;
    video?: string;
    episodes?: string;
    isFeatured?: boolean;
}

export const SeriesCard = ({ id, title, tag, image, video, episodes, isFeatured }: SeriesCardProps) => {
    const videoRef = React.useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Video play failed:", error);
            });
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <Link
            href={`/series/${id}`}
            className={`flex-shrink-0 group cursor-pointer ${isFeatured ? 'w-56 lg:w-72' : 'w-44 lg:w-60'}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="relative aspect-[9/14] rounded-4xl overflow-hidden mb-4 border border-white/5 transition-all duration-500 group-hover:scale-[1.04] group-hover:border-primary/40 shadow-2xl bg-black">

                {/* Video Layer */}
                {video && (
                    <video
                        ref={videoRef}
                        src={video}
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                    />
                )}

                {/* Image Poster (Fallback & Default) */}
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 176px, 240px"
                    className={`object-cover transition-opacity duration-500 ${video ? 'group-hover:opacity-0' : ''}`}
                />

                {tag && (
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-xl px-3 py-1 rounded-full text-[8px] lg:text-[10px] font-black border border-white/10 uppercase text-primary tracking-widest shadow-xl z-20">
                        {tag}
                    </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-5 z-20">
                    <button className="w-full bg-white text-black font-black py-3 rounded-2xl text-[10px] lg:text-xs uppercase tracking-widest translate-y-2 group-hover:translate-y-0 transition-transform shadow-xl">
                        Play Now
                    </button>
                </div>
            </div>

            <div className="px-1">
                <h4 className="text-base lg:text-lg font-black text-white italic line-clamp-1 group-hover:text-primary transition-colors uppercase tracking-tighter">
                    {title}
                </h4>
                <div className="flex items-center gap-2 mt-2 opacity-60">
                    <span className="text-[9px] lg:text-[10px] font-black text-primary border border-primary/20 px-1.5 py-0.5 rounded bg-primary/5 uppercase">HD</span>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">
                        {episodes || 'New Episodes'}
                    </p>
                </div>
            </div>
        </Link>
    );
};
