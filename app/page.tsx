'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { FaHeart, FaMapMarkerAlt, FaCalendarAlt, FaGift, FaBook, FaUsers, FaClock } from "react-icons/fa";
import CountdownTimer from "./components/CountdownTimer";
import MusicPlayer from "./components/MusicPlayer";
import VenueMap from "./components/VenueMap";
import MobileNav from "./components/MobileNav";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-200 dark:to-pink-200">
      {/* Music Player */}
      <MusicPlayer />

      {/* Navigation */}
      <nav className="bg-purple-50/90 dark:bg-purple-100/90 backdrop-blur-sm shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="text-xl sm:text-2xl font-serif text-purple-600 dark:text-purple-400" style={{ fontFamily: 'var(--font-playfair)' }}>
                A & A
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <MobileNav />
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.main
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 py-16"
      >
        {/* Main Heading */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-block mb-6"
          >
            <FaHeart className="text-6xl md:text-8xl text-purple-600 dark:text-purple-400 animate-pulse" />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl text-purple-900 dark:text-purple-950 mb-4 font-medium"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Together with their families 🌸
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif text-purple-950 dark:text-purple-950 mb-6 px-4 leading-tight"
            style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '-0.02em' }}
          >
            💜 Amir <span className="text-purple-600 dark:text-purple-600">&</span> Ayunni 💜
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-purple-900 dark:text-purple-950 px-4 font-light"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            are getting married ✨
          </motion.p>
        </motion.div>

        {/* Date & Venue Card */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="max-w-3xl mx-auto bg-purple-50/95 dark:bg-purple-50/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-purple-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <span className="text-5xl">📅</span>
                  <h3 className="text-3xl font-semibold text-purple-950 dark:text-purple-950">
                    Date
                  </h3>
                </div>
                <p className="text-5xl font-serif text-purple-600 dark:text-purple-600 mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
                  22 December 2025
                </p>
                <p className="text-xl text-purple-900 dark:text-purple-950">Sunday 🌸</p>
              </div>

              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <span className="text-5xl">📍</span>
                  <h3 className="text-3xl font-semibold text-purple-950 dark:text-purple-950">
                    Venue
                  </h3>
                </div>
                <p className="text-2xl font-semibold text-purple-950 dark:text-purple-950">
                  Willow Hall 🏛️
                </p>
                <p className="text-lg text-purple-900 dark:text-purple-950 mt-2">
                  Forrest Valley<br />Bandar Mahkota Cheras
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center px-3">
              <Link
                href="/rsvp"
                className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-bold py-5 px-10 sm:px-12 rounded-full transition shadow-lg hover:shadow-2xl text-center text-xl sm:text-2xl touch-manipulation transform hover:scale-105"
              >
                RSVP Now 💜
              </Link>
              <Link
                href="/our-story"
                className="bg-white hover:bg-purple-50 dark:bg-white dark:hover:bg-purple-50 text-purple-600 dark:text-purple-600 font-bold py-5 px-10 sm:px-12 rounded-full transition shadow-lg hover:shadow-2xl border-3 border-purple-600 dark:border-purple-600 text-center text-xl sm:text-2xl touch-manipulation transform hover:scale-105"
              >
                Our Story 🌸
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div variants={itemVariants} className="mb-20">
          <CountdownTimer />
        </motion.div>

        {/* Feature Cards */}
        <motion.div variants={itemVariants} className="mb-20">
          <h2 className="text-5xl md:text-6xl font-serif text-center text-purple-950 dark:text-purple-950 mb-16" style={{ fontFamily: 'var(--font-playfair)' }}>
            Celebrate With Us 🌸
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { emoji: "💐", title: "Our Story", desc: "Journey of love", link: "/our-story" },
              { emoji: "👰🤵", title: "Wedding Party", desc: "Meet our squad", link: "/wedding-party" },
              { emoji: "💌", title: "Guest Book", desc: "Leave your wishes", link: "/guest-book" },
              { emoji: "🎁", title: "Registry", desc: "Gift options", link: "/registry" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -15, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={feature.link} className="block bg-purple-50 dark:bg-purple-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all p-8 text-center border border-purple-200">
                  <div className="text-7xl mb-6">
                    {feature.emoji}
                  </div>
                  <h3 className="text-2xl font-bold text-purple-950 dark:text-purple-950 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-purple-900 dark:text-purple-950">
                    {feature.desc}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Venue Map */}
        <motion.div variants={itemVariants} className="mb-20">
          <VenueMap />
        </motion.div>

        {/* Final CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center bg-gradient-to-br from-purple-600 to-violet-600 rounded-3xl shadow-2xl p-12 md:p-16 text-white"
        >
          <div className="text-8xl mb-8 animate-pulse">⏰</div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
            Don't Miss Our Big Day! 💜
          </h2>
          <p className="text-2xl md:text-3xl mb-10 opacity-95" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Please RSVP by 15 December 2025 🌸
          </p>
          <Link
            href="/rsvp"
            className="inline-block bg-white text-purple-600 hover:bg-purple-50 font-bold py-6 px-16 rounded-full transition shadow-lg hover:shadow-2xl text-2xl transform hover:scale-105 touch-manipulation"
          >
            Reserve Your Spot ✨
          </Link>
        </motion.div>
      </motion.main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-16 py-10 text-center text-purple-900 dark:text-purple-950 border-t-2 border-purple-300 dark:border-purple-300"
      >
        <p className="font-serif text-2xl md:text-3xl mb-3" style={{ fontFamily: 'var(--font-cormorant)' }}>
          🌸 With love, Fariz 💜
        </p>
        <p className="text-lg text-purple-900 dark:text-purple-950">22 December 2025 ✨</p>
      </motion.footer>
    </div>
  );
}
