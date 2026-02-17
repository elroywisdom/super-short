'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CREATOR_STATS = [
    { label: 'Total Revenue', value: '₦428,500', trend: '+12% this week', color: 'text-primary' },
    { label: 'Sachet Unlocks', value: '8.5K', trend: 'Trending in Lagos', color: 'text-white' },
    { label: 'Engagement', value: '94%', trend: 'Ultra High', color: 'text-white' },
];

const MY_SERIES = [
    { id: 1, title: 'Lagos Hustle', revenue: '₦280k', unlocks: '5k', status: 'Active' },
    { id: 2, title: 'Eko Nights', revenue: '₦148k', unlocks: '3.5k', status: 'Post-Prod' },
];

export default function CreatorDashboard() {
    return (
        <div className="min-h-screen bg-background pb-32">
            <div className="container-pill mt-12 lg:mt-32">

                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 px-4 lg:px-0 gap-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-primary/20 text-primary text-[10px] font-black px-3 py-1 rounded-full border border-primary/30 uppercase tracking-widest">CREATOR PRO</span>
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black italic uppercase tracking-tighter text-white">
                            REVENUE <span className="text-primary italic">HUB</span>
                        </h1>
                        <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mt-3">Monetizing African stories, one sachet at a time.</p>
                    </div>

                    <button className="bg-primary text-black font-black px-10 py-4.5 rounded-2xl shadow-[0_15px_30px_rgba(0,255,136,0.3)] hover:scale-105 active:scale-95 transition-all uppercase tracking-widest text-xs flex items-center gap-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" /></svg>
                        UPLOAD NEW EPISODE
                    </button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {CREATOR_STATS.map((stat, i) => (
                        <div key={i} className="glass-morphism p-10 rounded-[40px] shadow-2xl relative overflow-hidden group hover:border-primary/40 transition-all">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full translate-x-12 -translate-y-12" />
                            <p className="text-gray-500 font-black uppercase tracking-[0.2em] text-[10px] mb-4">{stat.label}</p>
                            <h2 className={`text-4xl lg:text-5xl font-black italic tracking-tighter mb-4 uppercase ${stat.color}`}>{stat.value}</h2>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.trend}</p>
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content: Series Performance */}
                    <div className="lg:col-span-2 space-y-10">
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-2xl font-black italic text-white uppercase tracking-tighter">My Productions</h2>
                            <div className="h-px flex-1 bg-white/5" />
                        </div>

                        <div className="grid gap-6">
                            {MY_SERIES.map((serie) => (
                                <div key={serie.id} className="glass-morphism rounded-[32px] p-8 flex items-center justify-between group hover:bg-white/5 transition-all">
                                    <div className="flex items-center gap-8">
                                        <div className="relative w-24 h-24 rounded-2xl overflow-hidden border border-white/10">
                                            <Image src="/images/lagos-hustle.png" alt={serie.title} fill className="object-cover" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">{serie.title}</h3>
                                            <div className="flex items-center gap-4 mt-2">
                                                <span className="text-[10px] font-black text-primary bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20 uppercase">EPISODES: 12</span>
                                                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{serie.status}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-right">
                                        <p className="text-2xl font-black text-white italic">{serie.revenue}</p>
                                        <p className="text-[10px] text-primary font-black uppercase tracking-widest">+{serie.unlocks} Unlocks</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar: Payout Detail */}
                    <div className="space-y-8">
                        <div className="bg-white text-black p-10 rounded-[40px] shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-black/5 rounded-full translate-x-8 -translate-y-8" />
                            <h3 className="font-black italic uppercase text-xl mb-8 leading-tight">NEXT <br /> PAYOUT</h3>
                            <div className="mb-10">
                                <p className="text-5xl font-black italic tracking-tighter">₦85,200</p>
                                <p className="text-[10px] font-black uppercase tracking-widest mt-2 opacity-60">Scheduled for Feb 25, 2024</p>
                            </div>
                            <button className="w-full bg-black text-white font-black py-4 rounded-2xl text-[10px] uppercase tracking-widest shadow-xl active:scale-95 transition-all">WITHDRAW TO OPAY</button>
                        </div>

                        <div className="glass-morphism p-8 rounded-[40px]">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-8">Viewer Insights</h3>
                            <div className="space-y-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-bold text-gray-300">Peak Time</span>
                                    <span className="text-sm font-black text-white uppercase italic">7PM - 10PM</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-bold text-gray-300">Top Region</span>
                                    <span className="text-sm font-black text-white uppercase italic">Lagos, NG</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-bold text-gray-300">Avg. Completion</span>
                                    <span className="text-sm font-black text-white uppercase italic">88%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
