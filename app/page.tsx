'use client';

import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import CountdownTimer from "./components/CountdownTimer";
import MusicPlayer from "./components/MusicPlayer";
import CompactGuestBook from "./components/VenueMap";
import CompactGallery from "./components/CompactGallery";
import BottomNav from "./components/BottomNav";

export default function Home() {

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* Music Player - Minimal */}
      <MusicPlayer />

      {/* Section 1: Hero - Full Height */}
      <section id="hero" className="h-screen snap-start flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-200 dark:to-pink-200 scroll-mt-0">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <FaHeart className="text-6xl text-purple-600 dark:text-purple-400 inline-block" />
          </div>

          <p className="text-lg text-purple-700 dark:text-purple-700 mb-3 font-medium">
            ☪️ Bismillahirrahmanirrahim ☪️
          </p>

          <p className="text-xl text-purple-900 dark:text-purple-800 mb-4 font-medium" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Dengan penuh kesyukuran ke hadrat Allah S.W.T,
          </p>

          <p className="text-lg text-purple-900 dark:text-purple-800 mb-5 px-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            kami sekeluarga menjemput
            <br />
            Dato&apos; / Datin / Tuan / Puan / Encik / Cik
            <br />
            ke <strong>Majlis Walimatul Urus</strong>
          </p>

          <h1 className="text-5xl md:text-6xl font-serif text-purple-950 dark:text-purple-950 mb-6 px-4 leading-tight" style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '-0.02em' }}>
            Amir <span className="text-purple-600 dark:text-purple-600">&</span> Ayunni
          </h1>

          <div className="mt-8 text-purple-400 animate-bounce">
            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Section 2: Date & Venue - Full Height */}
      <section className="h-screen snap-start flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-purple-200">
            <div className="space-y-8 mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-5xl">📅</span>
                  <h3 className="text-3xl font-semibold text-purple-950">Tarikh</h3>
                </div>
                <p className="text-5xl font-serif text-purple-600 mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
                  22 Disember 2025
                </p>
                <p className="text-xl text-purple-900">Ahad 🌸</p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-5xl">📍</span>
                  <h3 className="text-3xl font-semibold text-purple-950">Tempat</h3>
                </div>
                <p className="text-2xl font-semibold text-purple-950">
                  Willow Hall 🏛️
                </p>
                <p className="text-lg text-purple-900 mt-2">
                  Forrest Valley<br />Bandar Mahkota Cheras
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <Link
                href="/rsvp"
                aria-label="Sahkan kehadiran"
                className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-bold py-5 px-10 rounded-full transition shadow-lg text-center text-xl touch-manipulation"
              >
                Sahkan Kehadiran 💜
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Countdown Timer - Full Height */}
      <section className="h-screen snap-start flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="w-full px-4">
          <CountdownTimer />
        </div>
      </section>

      {/* Section 4: Photo Gallery - Full Height */}
      <section className="h-screen snap-start flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="w-full px-4">
          <CompactGallery />
        </div>
      </section>

      {/* Section 5: Guest Book - Full Height */}
      <section id="guestbook" className="h-screen snap-start flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 scroll-mt-0">
        <div className="w-full px-4">
          <CompactGuestBook />
        </div>
      </section>

      {/* Section 6: Final CTA - Full Height */}
      <section className="h-screen snap-start flex items-center justify-center bg-gradient-to-br from-purple-600 to-violet-600">
        <div className="text-center max-w-4xl mx-auto px-4 text-white">
          <div className="text-8xl mb-8">🕌</div>
          <h2 className="text-5xl font-serif mb-6 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
            Jemput Hadir ke Majlis Kami ☪️💜
          </h2>
          <p className="text-2xl mb-10 opacity-95" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Sila sahkan kehadiran sebelum 15 Disember 2025 • Insha&apos;Allah 🌸
          </p>
          <Link
            href="/rsvp"
            className="inline-block bg-white text-purple-600 hover:bg-purple-50 font-bold py-6 px-16 rounded-full transition shadow-lg hover:shadow-2xl text-2xl touch-manipulation"
          >
            Sahkan Kehadiran 🕌
          </Link>

          {/* Spacer for bottom nav */}
          <div className="pb-20"></div>
        </div>
      </section>

      {/* Fixed Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
