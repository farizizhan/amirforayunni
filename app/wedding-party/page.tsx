'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const bridesmaids = [
  {
    name: "Sarah Johnson",
    role: "Maid of Honor",
    bio: "Ayunni's sister and best friend since childhood. Always there with a smile and helping hand.",
    image: "👰"
  },
  {
    name: "Emma Williams",
    role: "Bridesmaid",
    bio: "College roommate and partner in crime. Knows all of Ayunni's secrets!",
    image: "👱‍♀️"
  },
  {
    name: "Lisa Chen",
    role: "Bridesmaid",
    bio: "Work bestie turned lifelong friend. Coffee dates and heart-to-hearts are their thing.",
    image: "👩"
  }
];

const groomsmen = [
  {
    name: "Daniel Rahman",
    role: "Best Man",
    bio: "Amir's brother and confidant. The calm to Amir's storm.",
    image: "🤵"
  },
  {
    name: "Marcus Lee",
    role: "Groomsman",
    bio: "Childhood friend and adventure buddy. They've been through it all together.",
    image: "👨"
  },
  {
    name: "Ryan Tan",
    role: "Groomsman",
    bio: "College buddy and fellow sports enthusiast. Game nights are mandatory!",
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
          <h1 className="text-5xl md:text-6xl font-serif text-gray-800 dark:text-gray-100 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Our Wedding Party
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Meet the amazing people standing by our side on our special day
          </p>
        </motion.div>

        {/* Bridesmaids */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-serif text-purple-600 dark:text-purple-400 text-center mb-12"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Bridesmaids
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bridesmaids.map((person, index) => (
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

        {/* Groomsmen */}
        <section>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-serif text-purple-600 dark:text-purple-400 text-center mb-12"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Groomsmen
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {groomsmen.map((person, index) => (
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
    </div>
  );
}
