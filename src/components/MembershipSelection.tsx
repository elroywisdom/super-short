'use client';

import React, { useState } from 'react';

export type PlanType = 'DAILY' | 'MONTHLY' | 'DIASPORA' | 'SINGLE';

interface MembershipSelectionProps {
    isOpen: boolean;
    onClose: () => void;
    onSelectPlan: (plan: PlanType) => void;
}

export const MembershipSelection = ({ isOpen, onClose, onSelectPlan }: MembershipSelectionProps) => {
    const [selectedPlan, setSelectedPlan] = useState<PlanType>('MONTHLY'); // Default to Monthly

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-end lg:items-center justify-center sm:p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-[#050505]/95 backdrop-blur-xl"
                onClick={onClose}
            />

            {/* Content Container */}
            <div className="relative w-full max-w-lg bg-[#050505] border-t lg:border border-white/10 rounded-t-[40px] lg:rounded-[40px] overflow-hidden flex flex-col max-h-[90vh] shadow-2xl animate-slide-up">

                {/* Header */}
                <div className="flex items-center justify-between p-6 pb-2 shrink-0">
                    <h2 className="text-2xl font-black italic uppercase tracking-tighter text-white">
                        Choose Your <span className="text-primary">Access</span>
                    </h2>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-all active:scale-95"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">

                    {/* Card 0: Single Episode */}
                    <div
                        onClick={() => setSelectedPlan('SINGLE')}
                        className={`group relative p-4 rounded-[24px] border transition-all cursor-pointer flex items-center justify-between ${selectedPlan === 'SINGLE' ? 'bg-white/10 border-primary shadow-[0_0_20px_rgba(0,255,136,0.1)]' : 'bg-white/5 border-white/5 hover:border-white/20'}`}
                    >
                        <div>
                            <h3 className="text-lg font-black uppercase italic text-white">Single Episode</h3>
                            <p className="text-xs text-gray-400 font-medium">Just this one</p>
                        </div>
                        <div className="text-right">
                            <span className="block text-lg font-black text-white">₦600</span>
                        </div>
                    </div>

                    {/* Card 1: The Sachet (Daily) */}
                    <div
                        onClick={() => setSelectedPlan('DAILY')}
                        className={`group relative p-5 rounded-[32px] border transition-all cursor-pointer ${selectedPlan === 'DAILY' ? 'bg-white/10 border-primary shadow-[0_0_30px_rgba(0,255,136,0.1)]' : 'bg-white/5 border-white/5 hover:border-white/20'}`}
                    >
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h3 className="text-xl font-black uppercase italic text-white mb-1">Daily Pass</h3>
                                <p className="text-sm text-gray-400 font-medium">The Sachet</p>
                            </div>
                            <div className="text-right">
                                <span className="block text-xl font-black text-primary">₦1,000</span>
                                <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">/ Day</span>
                            </div>
                        </div>
                        <div className="space-y-2 mt-4">
                            <div className="flex items-center gap-2 text-sm text-gray-300">
                                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                All Episodes Unlocked
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-300">
                                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Ad-supported
                            </div>
                        </div>

                        {/* Popular Badge */}
                        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                            <span className="bg-primary text-black text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-lg tracking-wider border border-white/20">
                                Popular
                            </span>
                        </div>
                    </div>

                    {/* Card 2: The Value (Monthly) */}
                    <div
                        onClick={() => setSelectedPlan('MONTHLY')}
                        className={`relative p-1 rounded-[32px] transition-all cursor-pointer ${selectedPlan === 'MONTHLY' ? 'bg-gradient-to-b from-primary/50 to-primary/5 shadow-[0_0_40px_rgba(0,255,136,0.15)]' : 'bg-transparent border border-transparent'}`}
                    >
                        <div className={`h-full p-5 rounded-[30px] border transition-all ${selectedPlan === 'MONTHLY' ? 'bg-[#0A0A0A] border-transparent' : 'bg-white/5 border-white/5 hover:border-white/20'}`}>
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-xl font-black uppercase italic text-white mb-1">Monthly VIP</h3>
                                    <p className="text-sm text-gray-400 font-medium">The Value</p>
                                </div>
                                <div className="text-right">
                                    <span className="block text-xl font-black text-primary">₦2,500</span>
                                    <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">/ Month</span>
                                </div>
                            </div>
                            <div className="space-y-2 mt-4">
                                <div className="flex items-center gap-2 text-sm text-gray-300">
                                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    Ad-Free Streaming
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-300">
                                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    Unlimited Offline Downloads
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-300">
                                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    HD 1080p Quality
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: The Global (Diaspora) */}
                    <div
                        onClick={() => setSelectedPlan('DIASPORA')}
                        className={`group relative p-5 rounded-[32px] border transition-all cursor-pointer ${selectedPlan === 'DIASPORA' ? 'bg-white/10 border-primary shadow-[0_0_30px_rgba(0,255,136,0.1)]' : 'bg-white/5 border-white/5 hover:border-white/20'}`}
                    >
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h3 className="text-xl font-black uppercase italic text-white mb-1">Diaspora Premium</h3>
                                <p className="text-sm text-gray-400 font-medium">The Global</p>
                            </div>
                            <div className="text-right">
                                <span className="block text-xl font-black text-white">$5.00</span>
                                <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">/ Month</span>
                            </div>
                        </div>
                        <div className="space-y-2 mt-4">
                            <div className="flex items-center gap-2 text-sm text-gray-300">
                                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Family Sharing (3 Devices)
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-300">
                                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Exclusive Originals
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-300">
                                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Early Access
                            </div>
                        </div>
                    </div>


                </div>

                {/* Footer & CTA */}
                <div className="p-6 pt-4 bg-[#050505] border-t border-white/5 shrink-0 safe-area-bottom">
                    <p className="text-center text-[10px] text-gray-500 mb-4">
                        Recharge via Airtime, Opay, or Coins. <span className="text-primary cursor-pointer hover:underline">Need help?</span>
                    </p>
                    <button
                        onClick={() => onSelectPlan(selectedPlan)}
                        className="w-full bg-primary text-black font-black py-4 rounded-xl shadow-[0_0_30px_rgba(0,255,136,0.3)] hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-widest text-sm flex items-center justify-center gap-2"
                    >
                        Unlock Access Now
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                </div>

            </div>
        </div>
    );
};
