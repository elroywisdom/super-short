'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    tag?: string;
    watchLink: string;
}

export const Hero = ({ title, subtitle, description, image, tag, watchLink }: HeroProps) => {
    return (
        <section className="relative w-full h-[60vh] lg:h-[55vh] lg:min-h-[450px] lg:max-h-[650px] rounded-5xl overflow-hidden group shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border border-white/5">
            <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 1024px) 100vw, (max-width: 1400px) 80vw, 1200px"
                className="object-cover lg:object-[center_20%] transition-transform duration-[2000ms] group-hover:scale-105"
                priority
            />

            {/* Gradients for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 lg:from-background/70 via-transparent to-transparent hidden lg:block z-10" />

            <div className="absolute inset-0 flex flex-col justify-end lg:justify-center p-8 lg:p-20 w-full lg:max-w-3xl z-20">
                <div className="mb-4">
                    {tag && (
                        <span className="bg-primary/20 text-primary border border-primary/40 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.25em] mb-4 inline-block backdrop-blur-md">
                            {tag}
                        </span>
                    )}

                    <h1 className="text-5xl lg:text-7xl font-black mb-4 tracking-tighter italic uppercase text-white drop-shadow-2xl leading-[0.9]">
                        {subtitle} <br className="hidden lg:block" /> <span className="text-primary">{title}</span>
                    </h1>

                    <p className="text-gray-300 text-sm lg:text-lg mb-8 max-w-sm lg:max-w-md leading-relaxed font-medium drop-shadow-lg line-clamp-2 lg:line-clamp-none">
                        {description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href={watchLink}
                            className="lg:flex-none lg:w-56 bg-primary text-black font-black py-4 px-8 rounded-2xl flex items-center justify-center gap-3 shadow-[0_15px_35px_rgba(0,255,136,0.3)] hover:scale-105 active:scale-95 transition-all text-xs uppercase tracking-[0.15em]"
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                            WATCH NOW
                        </Link>

                        <div className="flex gap-4">
                            <button className="h-14 w-15 lg:w-16 glass-morphism rounded-2xl flex items-center justify-center transition-all hover:bg-white/10 group">
                                <svg className="w-6 h-6 text-white transition-transform group-hover:scale-125" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                            </button>

                            <button className="h-14 w-15 lg:w-16 glass-morphism rounded-2xl flex items-center justify-center transition-all hover:bg-white/10 group">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
