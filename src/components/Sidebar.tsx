'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Sidebar = () => {
    const pathname = usePathname();

    const menuItems = [
        { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>, label: 'Home', path: '/' },
        { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>, label: 'Explore', path: '/explore' },
        { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, label: 'For You', path: '/feed' },
        { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, label: 'Recharge', path: '/recharge' },
        { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>, label: 'My Vault', path: '/library' },
        { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>, label: 'Creator Hub', path: '/creator/dashboard' },
    ];

    return (
        <aside className="hidden lg:flex flex-col w-[350px] fixed left-0 top-0 h-screen border-r border-white/5 bg-background p-6 z-50 overflow-y-auto">
            <Link href="/" className="mb-8 block">
                <div className="flex items-center gap-3">
                    <Image
                        src="/images/logo.png"
                        alt="Super Shorts"
                        width={44}
                        height={44}
                        className="rounded-xl shadow-[0_0_15px_rgba(0,255,136,0.2)]"
                        priority
                        loading="eager"
                    />
                    <span className="text-2xl font-black italic tracking-tighter uppercase">Super <span className="text-primary">Shorts</span></span>
                </div>
            </Link>

            <div className="space-y-2 mb-8">
                {menuItems.map((item) => (
                    <Link
                        key={item.label}
                        href={item.path}
                        className={`flex items-center gap-4 p-3 rounded-xl transition-all font-bold text-lg ${pathname === item.path ? 'text-primary' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                    >
                        {item.icon}
                        {item.label}
                    </Link>
                ))}
            </div>

            <div className="border-t border-white/5 pt-8 mb-8">
                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-4 px-3">Suggested Accounts</p>
                <div className="space-y-4">
                    {['@bisifiles', '@nkemdrama', '@villageceo'].map((user) => (
                        <div key={user} className="flex items-center gap-3 px-3 cursor-pointer hover:bg-white/5 p-2 rounded-xl transition-all">
                            <div className="w-10 h-10 bg-primary/20 rounded-full border border-primary/40 flex items-center justify-center font-bold text-primary">
                                {user[1].toUpperCase()}
                            </div>
                            <div>
                                <p className="font-bold text-sm">{user}</p>
                                <p className="text-xs text-gray-500 italic">Popular Series</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-auto border-t border-white/5 pt-6">
                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 mb-6">
                    <p className="text-primary font-bold text-sm mb-2 uppercase tracking-wide">Sachet Reward</p>
                    <p className="text-white text-xs leading-relaxed mb-4">Complete your daily missions to earn free episode tokens!</p>
                    <button className="w-full bg-primary text-black font-black py-2 rounded-xl text-xs uppercase tracking-tight shadow-[0_4px_10px_rgba(0,255,136,0.3)]">
                        Claim Now
                    </button>
                </div>

                <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-600 font-medium px-3">
                    <span>About</span>
                    <span>Newsroom</span>
                    <span>Contact</span>
                    <span>Careers</span>
                    <span>Copyright</span>
                </div>
                <p className="text-xs text-gray-700 mt-4 px-3">© 2026 Super Shorts Africa</p>
            </div>
        </aside>
    );
};
