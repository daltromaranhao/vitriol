import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vitriol - Global Brotherhood',
  description: 'A global network connecting professionals worldwide for mutual support, collaboration, and growth.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
