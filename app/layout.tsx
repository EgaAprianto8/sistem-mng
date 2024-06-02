import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Sistem POS Media Nusa Gemilang | UAS Sistem Informasi Perpustakaan',
    description: 'Aplikasi berbasis website menyediakan layanan informatif terhadap pemantauan transaksi pada CV Media Nusa Gemilang Secara Real Time',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="overflow-x-hidden">{children}</div>
                <Toaster />
            </body>
        </html>
    );
}
