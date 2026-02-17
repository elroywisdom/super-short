'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RECHARGE_OPTIONS = [
    { id: 'daily', name: 'DAILY GRIND', credits: 50, price: '₦100', popular: true, tag: 'FOR FAST BINGE' },
    { id: 'weekly', name: 'WEEKLY HUSTLER', credits: 400, price: '₦500', popular: false, tag: 'BEST VALUE' },
    { id: 'pro', name: 'SERIES MOGUL', credits: 1000, price: '₦1,200', popular: false, tag: 'VIP ACCESS' },
];

const PAYMENT_METHODS = [
    { id: 'mtn', name: 'MTN Airtime', icon: 'https://cdn.iconscout.com/icon/free/png-256/free-mtn-logo-icon-download-in-svg-png-gif-file-formats--telecommunication-brand-pack-logos-icons-27083.png' },
    { id: 'opay', name: 'OPay Wallet', icon: 'https://media.licdn.com/dms/image/v2/C4D0BAQF_X0vYmS5R_A/company-logo_200_200/company-logo_200_200/0/1630571936384/opay_logo?e=2147483647&v=beta&t=7u7P7P_O_W_W_w_w_w_w_w_w_w_w_w_w_w_w_w_w' },
    { id: 'kuda', name: 'Kuda Bank', icon: 'https://media.licdn.com/dms/image/v2/D4D0BAQE-jW7z_Q_m_Q/company-logo_200_200/company-logo_200_200/0/1690452345517/kuda_logo?e=2147483647&v=beta&t=9_O_W_W_w_w_w_w_w_w_w_w_w_w_w_w_w_w' },
];

export default function RechargePage() {
    const [selectedOption, setSelectedOption] = useState('daily');
    const [selectedPayment, setSelectedPayment] = useState('mtn');
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handlePayment = () => {
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            setPaymentSuccess(true);
        }, 2500);
    };

    if (paymentSuccess) {
        return (
            <div className="min-h-screen flex flex-center bg-background p-8">
                <div className="w-full max-w-md bg-white/5 border border-primary/30 p-12 rounded-[40px] text-center shadow-2xl animate-slide-up">
                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(0,255,136,0.4)]">
                        <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h2 className="text-3xl font-black italic uppercase italic tracking-tighter mb-4 text-white">SACHET UNLOCKED!</h2>
                    <p className="text-gray-400 mb-8 font-medium italic">Your wallet has been topped up with {RECHARGE_OPTIONS.find(o => o.id === selectedOption)?.credits} Credits.</p>
                    <Link href="/feed" className="block w-full bg-primary text-black font-black py-4.5 rounded-2xl uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-all text-xs">
                        BACK TO ACTION
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background pb-32 flex flex-col items-center">
            <div className="container-pill mt-12 lg:mt-32 max-w-5xl">

                {/* Header Section */}
                <div className="text-center mb-16 px-4">
                    <h1 className="text-5xl lg:text-7xl font-black italic uppercase italic tracking-tighter text-white mb-4">
                        TOP-UP <span className="text-primary italic">WALLET</span>
                    </h1>
                    <p className="text-gray-400 text-lg font-medium italic">Buy sachet credits to unlock premium African short films.</p>
                </div>

                <div className="grid lg:grid-cols-5 gap-10">
                    {/* Left: Packages */}
                    <div className="lg:col-span-3 space-y-6">
                        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 mb-8 pl-2">Select Your Sachet</h3>
                        {RECHARGE_OPTIONS.map((option) => (
                            <div
                                key={option.id}
                                onClick={() => setSelectedOption(option.id)}
                                className={`relative p-8 rounded-[32px] cursor-pointer transition-all duration-300 border-2 ${selectedOption === option.id ? 'bg-primary/5 border-primary shadow-[0_10px_40px_rgba(0,255,136,0.1)]' : 'bg-white/5 border-white/5 hover:border-white/20'}`}
                            >
                                <div className="flex justify-between items-center relative z-10">
                                    <div>
                                        <span className={`text-[10px] font-black uppercase tracking-[0.2em] mb-2 inline-block ${selectedOption === option.id ? 'text-primary' : 'text-gray-500'}`}>{option.tag}</span>
                                        <h4 className="text-2xl font-black italic uppercase italic tracking-tighter text-white">{option.name}</h4>
                                        <p className="text-sm text-gray-400 font-bold mt-1 uppercase tracking-tighter">{option.credits} EPISODE CREDITS</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-3xl font-black text-white italic">{option.price}</span>
                                        <div className={`w-6 h-6 rounded-full border-2 mt-2 ml-auto flex items-center justify-center ${selectedOption === option.id ? 'border-primary' : 'border-white/20'}`}>
                                            {selectedOption === option.id && <div className="w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_10px_#00FF88]" />}
                                        </div>
                                    </div>
                                </div>
                                {option.popular && (
                                    <div className="absolute top-0 right-12 -translate-y-1/2 bg-primary text-black text-[9px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg">POPULAR CHOICE</div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right: Payment */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="glass-morphism p-8 rounded-[40px] shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl -translate-y-1/2 translate-x-1/2 rounded-full" />

                            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 mb-10 relative z-10">Payment Method</h3>

                            <div className="space-y-4 mb-10 relative z-10">
                                {PAYMENT_METHODS.map((method) => (
                                    <div
                                        key={method.id}
                                        onClick={() => setSelectedPayment(method.id)}
                                        className={`flex items-center justify-between p-5 rounded-2xl cursor-pointer border-2 transition-all ${selectedPayment === method.id ? 'border-primary bg-primary/5' : 'border-white/5 bg-white/5 hover:bg-white/10'}`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center p-1 overflow-hidden">
                                                <Image src={method.icon} alt={method.name} width={40} height={40} className="object-contain" />
                                            </div>
                                            <span className="font-bold text-sm text-white">{method.name}</span>
                                        </div>
                                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedPayment === method.id ? 'border-primary' : 'border-white/20'}`}>
                                            {selectedPayment === method.id && <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_#00FF88]" />}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-6 border-t border-white/5 relative z-10">
                                <div className="flex justify-between items-end mb-8">
                                    <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">Total Due</span>
                                    <span className="text-4xl font-black text-white italic">{RECHARGE_OPTIONS.find(o => o.id === selectedOption)?.price}</span>
                                </div>

                                <button
                                    onClick={handlePayment}
                                    disabled={isProcessing}
                                    className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all shadow-[0_15px_30px_rgba(0,255,136,0.3)] ${isProcessing ? 'bg-primary/50 text-black cursor-wait' : 'bg-primary text-black hover:scale-[1.03] active:scale-95'}`}
                                >
                                    {isProcessing ? (
                                        <>
                                            <div className="w-5 h-5 border-4 border-black border-t-transparent rounded-full animate-spin" />
                                            SECURELY PAYING...
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                            RECHARGE NOW
                                        </>
                                    )}
                                </button>
                                <p className="text-center text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-6">Securely processed by <span className="text-primary italic">SachetPay Gateway</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
