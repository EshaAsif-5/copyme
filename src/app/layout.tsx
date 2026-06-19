import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DepViz – The Best Investment You Will Make In Your Business',
  description: 'A system that grows with you. Let your business every day. Builds your future within you into your present.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
