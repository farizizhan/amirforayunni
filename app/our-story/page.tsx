'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const timeline = [
  {
    year: "2018",
    title: "First Meeting",
    description: "We met at a mutual friend's party. It was love at first sight, or so we like to tell ourselves!",
    icon: "💫"
  },
  {
    year: "2019",
    title: "First Date",
    description: "Our first official date at a cozy café. We talked for hours and lost track of time.",
    icon: "☕"
  },
  {
    year: "2020",
    title: "Made It Official",
    description: "Despite the challenges of the pandemic, we knew we were meant to be together.",
    icon: "💑"
  },
  {
    year: "2022",
    title: "Moving In Together",
    description: "We took the next big step and found our first home together.",
    icon: "🏡"
  },
  {
    year: "2024",
    title: "The Proposal",
    description: "Under the stars, with hearts full of love, Amir asked the most important question.",
    icon: "💍"
  },
  {
    year: "2025",
    title: "Our Wedding Day",
    description: "Surrounded by family and friends, we begin our forever.",
    icon: "💒"
  }
];

export default function OurStory() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-200 dark:to-pink-200">
      <Navigation />

      <main className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <FaHeart className="text-6xl text-purple-600 dark:text-purple-400 animate-pulse" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-serif text-gray-800 dark:text-gray-100 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Our Love Story
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Every love story is beautiful, but ours is our favorite
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-violet-600 hidden md:block" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="w-full md:w-5/12 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{item.icon}</span>
                    <div>
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1" style={{ fontFamily: 'var(--font-playfair)' }}>
                        {item.year}
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>

                {/* Center dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="w-6 h-6 bg-purple-600 dark:bg-purple-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"
                  />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-2xl text-gray-700 dark:text-gray-300 mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
            &ldquo;And now these three remain: faith, hope and love. But the greatest of these is love.&rdquo;
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-8">- 1 Corinthians 13:13</p>
          <Link
            href="/rsvp"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-10 rounded-full transition shadow-lg hover:shadow-xl text-lg"
          >
            Join Our Celebration
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
