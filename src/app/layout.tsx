import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Monkey Coffee | Find Your Escape',
  description:
    'A cozy coffee bar & dining space to sip, work, and connect — open every day in Pontianak.',
  keywords: ['coffee', 'cafe', 'pontianak', 'monkey coffee', 'coffee shop'],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* ── Google Fonts ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />

        {/* ── Font Awesome ── */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
        />

        {/* ── AOS CSS ── */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/aos@2.3.4/dist/aos.css"
        />
      </head>

      <body className="font-sans antialiased">
        {children}

        {/* ── AOS JS — async agar tidak block render ── */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://unpkg.com/aos@2.3.4/dist/aos.js" async />

        {/* ── AOS init inline — fallback jika script async belum ready ── */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function initAOS() {
                if (window.AOS) {
                  window.AOS.init({ duration: 700, once: true, offset: 60, easing: 'ease-out-cubic' });
                }
              }
              // Coba init setelah DOM ready
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', function() {
                  setTimeout(initAOS, 100);
                });
              } else {
                setTimeout(initAOS, 100);
              }
              // Fallback: coba lagi setelah semua resource load
              window.addEventListener('load', function() {
                setTimeout(initAOS, 200);
              });
            `,
          }}
        />
      </body>
    </html>
  )
}
