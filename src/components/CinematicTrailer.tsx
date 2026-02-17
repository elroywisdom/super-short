'use client';

import React from 'react';
import Image from 'next/image';

interface CinematicTrailerProps {
    image: string;
    isActive?: boolean;
}

export const CinematicTrailer = ({ image, isActive = true }: CinematicTrailerProps) => {
    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
            {/* The Cinematic Frame with Ken Burns Effect */}
            <div className={`relative w-full h-full transition-transform duration-[20000ms] ease-linear overflow-hidden ${isActive ? 'scale-110 translate-x-4' : 'scale-100'}`}>
                <Image
                    src={image}
                    alt="Cinematic Trailer"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
            </div>

            {/* Film Grain & Noise Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen bg-[url('https://res.cloudinary.com/did9un7eq/image/upload/v1641328087/grain_glf3nd.gif')]" />

            {/* Dynamic Light Leak / Glow */}
            <div className={`absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-purple-500/10 opacity-30 animate-pulse-slow pointer-events-none`} />

            {/* Letterboxing (Cinematic Bars) */}
            <div className="absolute top-0 left-0 right-0 h-[8%] bg-black z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-[8%] bg-black z-10" />

            {/* Vignette */}
            <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.9)] pointer-events-none" />
        </div>
    );
};
