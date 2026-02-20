import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vitriol - Global Brotherhood',
  description: 'A global network connecting professionals worldwide',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
