import { Inter } from 'next/font/google';
import './globals.css';
import VideoBackground from '../components/VideoBackground';
import '../styles/globals.css';
import ChatWidget from '@/components/ChatWidget';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Posture Vision',
  description: 'Perfect Posture, Perfect Health',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
