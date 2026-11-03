import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ORVAXIA COMPANY — A World Connected by Truth',
  description: 'ORVAXIA COMPANY is a creative world of thoughtful ideas, meaningful connection, and intentional details.',
  openGraph: {
    title: 'ORVAXIA COMPANY — A World Connected by Truth',
    description: 'A creative world of thoughtful ideas, meaningful connection, and intentional details.',
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ORVAXIA COMPANY — A World Connected by Truth',
    description: 'A creative world of thoughtful ideas, meaningful connection, and intentional details.',
    images: ['https://bolt.new/static/og_default.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
