'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";

const brideParty = [
  {
    name: "Sarah Johnson",
    role: "Sister & Witness",
    bio: "Ayunni's beloved sister and best friend since childhood. Always there with love and support.",
    image: "👰"
  },
  {
    name: "Emma Williams",
    role: "Close Friend",
    bio: "College companion and trusted friend. Shares countless precious memories with Ayunni.",
    image: "👱‍♀️"
  },
  {
    name: "Lisa Chen",
    role: "Dear Friend",
    bio: "Lifelong friend and confidante. Always offering a listening ear and heartfelt advice.",
    image: "👩"
  }
];

const groomParty = [
  {
    name: "Daniel Rahman",
    role: "Brother & Witness",
    bio: "Amir's beloved brother and closest confidant. The calm voice of wisdom and support.",
    image: "🤵"
  },
  {
    name: "Marcus Lee",
    role: "Close Friend",
    bio: "Childhood companion and trusted friend. They've shared life's journey together.",
    image: "👨"
  },
  {
    name: "Ryan Tan",
    role: "Dear Friend",
    bio: "Loyal friend and brother in faith. Always ready to lend support and encouragement.",
    image: "👨‍💼"
  }
];

export default function WeddingParty() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-200 dark:to-pink-200">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-2xl text-purple-600 dark:text-purple-600 mb-3">
            👥 ☪️ 👥
          </p>
          <h1 className="text-5xl md:text-6xl font-serif text-purple-950 dark:text-purple-950 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Our Beloved Family & Friends 🕌
          </h1>
          <p className="text-xl text-purple-900 dark:text-purple-950 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Meet the cherished people standing by our side on this blessed day
          </p>
        </motion.div>

        {/* Bride's Party */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-serif text-purple-600 dark:text-purple-400 text-center mb-12"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Bride&apos;s Family & Friends 👰💜
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brideParty.map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
              >
                <div className="h-64 bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-900 dark:to-pink-900 flex items-center justify-center text-9xl">
                  {person.image}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                    {person.name}
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-3" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    {person.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {person.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Groom's Party */}
        <section>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-serif text-purple-600 dark:text-purple-400 text-center mb-12"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Groom&apos;s Family & Friends 🤵💜
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {groomParty.map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
              >
                <div className="h-64 bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center text-9xl">
                  {person.image}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                    {person.name}
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-3" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    {person.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {person.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <Link
            href="/rsvp"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-10 rounded-full transition shadow-lg hover:shadow-xl text-lg"
          >
            RSVP Now
          </Link>
        </motion.div>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
