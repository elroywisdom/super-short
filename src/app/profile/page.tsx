'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WATCH_HISTORY = [
    { id: 1, title: 'The Balogun Gambit', series: 'Lagos Hustle', progress: '85%', image: '/images/lagos-hustle.png' },
    { id: 2, title: 'Ep 5: The Gala', series: "Nkem's Story", progress: '10%', image: '/images/nkems-story.png' },
];

const REWARDS = [
    { title: 'Daily Check-in', reward: '+5 Credits', completed: true },
    { title: 'Watch 3 Trailers', reward: '+10 Credits', completed: false },
    { title: 'Invite a Hustler', reward: '+50 Credits', completed: false },
];

export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-background pb-32">
            <div className="container-pill mt-12 lg:mt-32">

                {/* Profile Header */}
                <div className="flex flex-col lg:flex-row items-center lg:items-end gap-8 mb-16 px-4 lg:px-0">
                    <div className="relative group">
                        <div className="w-32 h-32 lg:w-40 lg:h-40 bg-primary rounded-[40px] flex items-center justify-center text-5xl font-black text-black shadow-2xl shadow-primary/20 rotate-3 group-hover:rotate-0 transition-transform">
                            EW
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-white text-black text-[10px] font-black px-4 py-1.5 rounded-full shadow-xl">PRO</div>
                    </div>

                    <div className="text-center lg:text-left flex-1">
                        <h1 className="text-4xl lg:text-6xl font-black italic uppercase italic tracking-tighter text-white">EL-ROY <span className="text-primary italic">WISDOM</span></h1>
                        <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mt-2">Member since Feb 2024 • Lagos, Nigeria</p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
                            <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-2xl">
                                <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">BALANCE</p>
                                <p className="text-xl font-black text-white italic">450 Credits</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-2xl">
                                <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">SAVED DATA</p>
                                <p className="text-xl font-black text-white italic">1.2 GB</p>
                            </div>
                        </div>
                    </div>

                    <Link href="/recharge" className="bg-primary text-black font-black px-10 py-4.5 rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all text-xs uppercase tracking-widest">
                        TOP UP WALLET
                    </Link>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Weekly Missions */}
                        <div className="glass-morphism rounded-[40px] p-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 blur-3xl -translate-y-1/2 translate-x-1/2 rounded-full" />

                            <h2 className="text-2xl font-black italic text-white uppercase tracking-tighter mb-8 relative z-10">Sachet Quests</h2>
                            <div className="space-y-6 relative z-10">
                                {REWARDS.map((mission, i) => (
                                    <div key={i} className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/5 group hover:border-primary/40 transition-all">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${mission.completed ? 'bg-primary text-black' : 'bg-white/10 text-gray-500'}`}>
                                                {mission.completed ? (
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                                ) : (
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                )}
                                            </div>
                                            <div>
                                                <p className="font-bold text-white uppercase tracking-tight">{mission.title}</p>
                                                <p className="text-[10px] font-black text-primary uppercase tracking-widest mt-0.5">{mission.reward}</p>
                                            </div>
                                        </div>
                                        <button className={`px-5 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${mission.completed ? 'bg-white/5 text-gray-600 line-through' : 'bg-white text-black'}`}>
                                            {mission.completed ? 'CLAIMED' : 'DO IT'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <h2 className="text-2xl font-black italic text-white uppercase tracking-tighter">Continue Watching</h2>
                                <div className="h-px flex-1 bg-white/5" />
                                <Link href="#" className="text-[10px] font-black text-gray-500 uppercase tracking-widest hover:text-white transition-colors">Clear All</Link>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {WATCH_HISTORY.map((item) => (
                                    <div key={item.id} className="group relative bg-white/5 border border-white/5 rounded-[32px] overflow-hidden flex items-center p-4 hover:border-primary/40 transition-all cursor-pointer">
                                        <div className="relative w-28 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                                            <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                            <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20">
                                                <div className="h-full bg-primary" style={{ width: item.progress }} />
                                            </div>
                                        </div>
                                        <div className="ml-5">
                                            <span className="text-primary font-black text-[9px] uppercase tracking-widest">{item.series}</span>
                                            <h4 className="text-lg font-black text-white uppercase italic tracking-tighter leading-tight mt-1">{item.title}</h4>
                                            <p className="text-[10px] text-gray-500 mt-2 font-black uppercase tracking-widest">{item.progress} COMPLETED</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Stats */}
                    <div className="space-y-8">
                        <div className="glass-morphism p-10 rounded-[40px]">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-8">Account Settings</h3>
                            <div className="space-y-4">
                                <button className="w-full flex justify-between items-center py-4 px-6 bg-white/5 rounded-2xl text-left hover:bg-white/10 transition-all group">
                                    <span className="text-sm font-bold text-gray-200">Parental Control</span>
                                    <svg className="w-4 h-4 text-gray-600 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                                </button>
                                <button className="w-full flex justify-between items-center py-4 px-6 bg-white/5 rounded-2xl text-left hover:bg-white/10 transition-all group">
                                    <span className="text-sm font-bold text-gray-200">Data Saver Mode</span>
                                    <div className="w-10 h-5 bg-primary rounded-full relative">
                                        <div className="absolute right-1 top-1 w-3 h-3 bg-black rounded-full" />
                                    </div>
                                </button>
                                <button className="w-full py-4 text-sm font-black text-red-500 uppercase tracking-widest mt-4">LOGOUT ACCOUNT</button>
                            </div>
                        </div>

                        <div className="bg-primary text-black p-10 rounded-[40px] shadow-2xl shadow-primary/20">
                            <h3 className="font-black italic uppercase italic tracking-tighter text-xl leading-tight mb-4">REFER & EARN</h3>
                            <p className="text-xs font-bold leading-relaxed mb-8 opacity-80 uppercase tracking-tight">Get <span className="text-lg font-black italic">100 FREE CREDITS</span> for every friend who tops up their sachet.</p>
                            <button className="w-full bg-black text-white font-black py-4 rounded-2xl text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">COPY INVITE CODE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
