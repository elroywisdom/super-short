'use client';

import React, { useState } from 'react';
import { useSachetPay, PaymentMethod } from '@/hooks/useSachetPay';

interface EpisodeLockProps {
    episodeNumber: number;
    onUnlock: () => void;
}

export const EpisodeLock = ({ episodeNumber, onUnlock }: EpisodeLockProps) => {
    const [showDrawer, setShowDrawer] = useState(false);
    const { paySachet, isPaying } = useSachetPay();

    const handlePayment = async (method: PaymentMethod) => {
        const result = await paySachet(method, 0.80);
        if (result.success) {
            onUnlock();
            setShowDrawer(false);
        }
    };

    return (
        <>
            <div className="absolute inset-0 bg-black/70 backdrop-blur-xl flex flex-col items-center justify-center p-8 text-center z-40">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 border border-primary/50">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
                <h2 className="text-3xl font-bold mb-2">Episode {episodeNumber} is Locked</h2>
                <p className="text-gray-400 mb-8 max-w-xs">Bridge the Netflix Gap. Unlock this episode for just $0.80 (₦600).</p>
                <button
                    onClick={() => setShowDrawer(true)}
                    className="w-full bg-primary text-black font-black py-4 px-8 rounded-2xl shadow-[0_0_30px_rgba(0,255,136,0.3)] hover:scale-105 transition-all text-lg"
                >
                    One-Tap Sachet Pay
                </button>
            </div>

            {showDrawer && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-end">
                    <div className="w-full bg-onyx border-t border-white/10 rounded-t-[32px] p-8 pb-12 animate-slide-up">
                        <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mb-8" />
                        <h3 className="text-2xl font-bold mb-2">Sachet Payment</h3>
                        <p className="text-gray-400 mb-8">Select your preferred local payment method</p>

                        <div className="grid grid-cols-1 gap-4">
                            {[
                                { name: 'MTN Airtime', id: 'MTN', color: '#FFCC00' },
                                { name: 'Airtel Airtime', id: 'AIRTEL', color: '#FF0000' },
                                { name: 'Opay Transfer', id: 'OPAY', color: '#00C853' },
                                { name: 'Kuda Bank', id: 'KUDA', color: '#40196D' }
                            ].map((method) => (
                                <button
                                    key={method.id}
                                    disabled={isPaying}
                                    onClick={() => handlePayment(method.id as PaymentMethod)}
                                    className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl flex items-center justify-between hover:bg-white/10 transition-all group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: method.color, color: method.id === 'MTN' ? 'black' : 'white' }}>
                                            {method.id[0]}
                                        </div>
                                        <span className="text-lg font-medium">{method.name}</span>
                                    </div>
                                    <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {isPaying && (
                            <div className="mt-8 text-center text-primary font-medium animate-pulse">
                                Processing payment...
                            </div>
                        )}

                        <button
                            onClick={() => setShowDrawer(false)}
                            className="w-full mt-6 py-4 text-gray-500 font-medium"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
