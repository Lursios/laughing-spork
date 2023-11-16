"use client"
import { crimsonText } from './fonts';
import './globals.css'
import '@fontsource/crimson-text';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { usePathname } from 'next/navigation';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const isNoScrollPage = pathname === "/publication&research";

  return (
    <html lang="en">
      <body className={crimsonText.className} style={isNoScrollPage?{overflowY:'hidden'}:{}}>
          {children}
      </body>
    </html>
  )
}
