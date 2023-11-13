import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeProvider from '@/providers';
const inter = Inter({ subsets: ['latin'] })
import Script from "next/script";

export const metadata: Metadata = {
  title: 'Portafolio',
  description: 'David Almanza Portafolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script 
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.GOOGLE_TMG}')`}}
        />
      </head>
      <body className={inter.className}>
      <iframe src={`https://www.googletagmanager.com/ns.html?id=${process.env.GOOGLE_ANALYTICS}`} height="0" width="0"></iframe>
        <ThemeProvider>
          <Navbar />
          <Script strategy='lazyOnload' src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}></Script>
          <Script strategy='lazyOnload'>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.GOOGLE_ANALYTICS}');
            `}
          </Script>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  )
}
