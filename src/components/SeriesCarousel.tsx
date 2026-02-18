'use client';

import React from 'react';
import { SeriesCard } from './SeriesCard';

interface SeriesCarouselProps {
    title: string;
    items: any[];
}

export const SeriesCarousel = ({ title, items }: SeriesCarouselProps) => {
    return (
        <section className="w-full">
            <div className="flex justify-between items-center mb-8 pr-4">
                <h3 className="text-2xl lg:text-3xl font-black tracking-tight text-white italic uppercase">{title}</h3>
                <button className="text-primary text-[10px] font-black uppercase tracking-[0.2em] hover:text-white transition-colors flex items-center gap-2 group">
                    View All
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <div className="flex gap-6 lg:gap-10 overflow-x-auto pr-8 no-scrollbar pb-6 pl-2 -ml-2">
                {items.map((item, idx) => (
                    <SeriesCard
                        key={idx}
                        id={item.id}
                        title={item.title}
                        tag={item.tag}
                        image={item.image}
                        video={item.video}
                    />
                ))}
            </div>
        </section>
    );
};
