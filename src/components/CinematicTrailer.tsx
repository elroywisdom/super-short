'use client';

import React from 'react';
import Image from 'next/image';

interface CinematicTrailerProps {
    image: string;
    video?: string;
    isActive?: boolean;
}

export const CinematicTrailer = ({ image, video, isActive = true }: CinematicTrailerProps) => {
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = React.useState(false);

    React.useEffect(() => {
        if (videoRef.current) {
            if (isActive) {
                // Reset isPlaying when active changes
                setIsPlaying(false);

                // Force muted on mobile/initial attempt for better success rate
                videoRef.current.muted = true;

                const playPromise = videoRef.current.play();
                if (playPromise !== undefined) {
                    playPromise
                        .then(() => {
                            // Video started playing successfully
                            setIsPlaying(true);
                        })
                        .catch(error => {
                            console.log("Autoplay prevented:", error);
                            // Fallback to muted if unmuted fails (though we start muted now)
                            if (videoRef.current) {
                                videoRef.current.muted = true;
                                videoRef.current.play()
                                    .then(() => setIsPlaying(true))
                                    .catch(e => console.error("Muted autoplay failed", e));
                            }
                        });
                }
            } else {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
                setIsPlaying(false);
            }
        }
    }, [isActive]);

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
            {/* Video Layer (Priority) */}
            {video && (
                <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                    <video
                        ref={videoRef}
                        src={video}
                        loop
                        muted
                        playsInline
                        onPlay={() => setIsPlaying(true)}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            {/* The Cinematic Frame with Ken Burns Effect (Fallback / Background) */}
            {/* Only fade out if video is actually playing */}
            <div className={`relative w-full h-full transition-transform duration-[20000ms] ease-linear overflow-hidden ${isActive ? 'scale-110 translate-x-4' : 'scale-100'} ${video && isPlaying && isActive ? 'opacity-0' : 'opacity-100'}`}>
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

            {/* Vignette */}
            <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.9)] pointer-events-none" />
        </div>
    );
};
