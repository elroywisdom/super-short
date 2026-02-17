'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const BottomNav = () => {
    const pathname = usePathname();

    return (
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 px-8 pb-8 pt-4 bg-gradient-to-t from-black via-black/95 to-transparent flex justify-between items-center z-50">
            <NavItem icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>} label="Home" active={pathname === '/'} path="/" />
            <NavItem icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>} label="Explore" active={pathname === '/explore'} path="/explore" />

            <NavItem
                icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>}
                label="For You"
                active={pathname === '/feed'}
                path="/feed"
            />

            <NavItem icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>} label="Vault" active={pathname === '/library'} path="/library" />
            <NavItem icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>} label="Profile" active={pathname === '/profile'} path="/profile" />
        </nav>
    );
};

function NavItem({ icon, label, active = false, path }: { icon: React.ReactNode, label: string, active?: boolean, path: string }) {
    return (
        <Link href={path} className={`flex flex-col items-center gap-1 group transition-all active:scale-90 ${active ? 'text-primary' : 'text-gray-500 hover:text-white'}`}>
            {icon}
            <span className="text-[10px] font-bold tracking-tight uppercase">{label}</span>
        </Link>
    );
}
