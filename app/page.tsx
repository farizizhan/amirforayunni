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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-950 dark:to-violet-950">
      {/* Music Player */}
      <MusicPlayer />

      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md sticky top-0 z-40">
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
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Together with their families
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-gray-800 dark:text-gray-100 mb-4 px-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Amir <span className="text-purple-600 dark:text-purple-400">&</span> Ayunni
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-400 px-4"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            are getting married
          </motion.p>
        </motion.div>

        {/* Date & Venue Card */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                  <FaCalendarAlt className="text-3xl text-purple-600 dark:text-purple-400" />
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                    Date
                  </h3>
                </div>
                <p className="text-4xl font-serif text-purple-600 dark:text-purple-400 mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                  22 December 2025
                </p>
                <p className="text-gray-600 dark:text-gray-400">Sunday</p>
              </div>

              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                  <FaMapMarkerAlt className="text-3xl text-purple-600 dark:text-purple-400" />
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                    Venue
                  </h3>
                </div>
                <p className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  Willow Hall
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Forrest Valley<br />Bandar Mahkota Cheras
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link
                href="/rsvp"
                className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-semibold py-4 px-8 sm:px-10 rounded-full transition shadow-lg hover:shadow-xl text-center text-base sm:text-lg touch-manipulation"
              >
                RSVP Now
              </Link>
              <Link
                href="/our-story"
                className="bg-white hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 text-purple-600 dark:text-purple-400 font-semibold py-4 px-8 sm:px-10 rounded-full transition shadow-lg hover:shadow-xl border-2 border-purple-600 dark:border-purple-400 text-center text-base sm:text-lg touch-manipulation"
              >
                Our Story
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
          <h2 className="text-4xl font-serif text-center text-gray-800 dark:text-gray-100 mb-12" style={{ fontFamily: 'var(--font-playfair)' }}>
            Celebrate With Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FaBook, title: "Our Story", desc: "Journey of love", link: "/our-story", color: "from-pink-500 to-rose-500" },
              { icon: FaUsers, title: "Wedding Party", desc: "Meet our squad", link: "/wedding-party", color: "from-purple-500 to-violet-500" },
              { icon: FaHeart, title: "Guest Book", desc: "Leave your wishes", link: "/guest-book", color: "from-red-500 to-pink-500" },
              { icon: FaGift, title: "Registry", desc: "Gift options", link: "/registry", color: "from-blue-500 to-purple-500" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={feature.link} className="block bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                    <feature.icon className="text-3xl text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
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
          className="text-center bg-gradient-to-br from-purple-600 to-violet-600 rounded-3xl shadow-2xl p-12 text-white"
        >
          <FaClock className="text-6xl mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-serif mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Don't Miss Our Big Day!
          </h2>
          <p className="text-xl mb-8 opacity-90" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Please RSVP by 15 December 2025
          </p>
          <Link
            href="/rsvp"
            className="inline-block bg-white text-purple-600 hover:bg-gray-100 font-semibold py-4 px-12 rounded-full transition shadow-lg hover:shadow-xl text-lg"
          >
            Reserve Your Spot
          </Link>
        </motion.div>
      </motion.main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-16 py-8 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800"
      >
        <p className="font-serif text-lg" style={{ fontFamily: 'var(--font-cormorant)' }}>
          With love, Amir & Ayunni ❤️
        </p>
        <p className="text-sm mt-2">22 December 2025</p>
      </motion.footer>
    </div>
  );
}
