import { useState } from 'react';

export type PaymentMethod = 'MTN' | 'AIRTEL' | 'OPAY' | 'KUDA';

export const useSachetPay = () => {
    const [isPaying, setIsPaying] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const paySachet = async (method: PaymentMethod, amount: number) => {
        setIsPaying(true);
        setPaymentStatus('idle');

        console.log(`Processing sachet payment of $${amount} via ${method}...`);

        // Mock API call
        return new Promise<{ success: boolean; transactionId: string }>((resolve) => {
            setTimeout(() => {
                setIsPaying(false);
                setPaymentStatus('success');
                resolve({ success: true, transactionId: Math.random().toString(36).substring(2, 9) });
            }, 1500);
        });
    };

    return { paySachet, isPaying, paymentStatus };
};
