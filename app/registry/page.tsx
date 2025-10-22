'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGift, FaHeart, FaExternalLinkAlt } from "react-icons/fa";
import { QRCodeSVG } from "qrcode.react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";
import { useState } from "react";

export default function Registry() {
  const [showQR, setShowQR] = useState(false);

  const registryLinks = [
    {
      name: "Amazon Registry",
      description: "Home essentials and wishlist items",
      url: "https://www.amazon.com/wedding/registry",
      icon: "🛍️",
      color: "from-orange-500 to-yellow-500"
    },
    {
      name: "IKEA Registry",
      description: "Furniture and home decor",
      url: "https://www.ikea.com",
      icon: "🏠",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Cash Fund",
      description: "Contribute to our honeymoon",
      url: "#cash-fund",
      icon: "✈️",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const bankDetails = {
    bank: "Maybank",
    accountName: "Amir & Ayunni Wedding",
    accountNumber: "1234 5678 9012",
    reference: "Wedding Gift"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-200 dark:to-pink-200">
      <Navigation />

      <main className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="text-6xl">🎁💝</div>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-serif text-purple-950 dark:text-purple-950 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Hadiyah (Gifts) 🕌
          </h1>
          <p className="text-xl text-purple-900 dark:text-purple-950 max-w-2xl mx-auto mb-3" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Your presence and duas are the greatest gifts. However, if you wish to bless us with a hadiyah, we are deeply grateful.
          </p>
          <p className="text-lg text-purple-700 dark:text-purple-800 italic">
            Barakallahu Lakuma ☪️
          </p>
        </motion.div>

        {/* Registry Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {registryLinks.map((registry, index) => (
            <motion.a
              key={index}
              href={registry.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all"
            >
              <div className={`h-40 bg-gradient-to-br ${registry.color} flex items-center justify-center text-7xl`}>
                {registry.icon}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2 flex items-center gap-2">
                  {registry.name}
                  <FaExternalLinkAlt className="text-sm text-purple-600 dark:text-purple-400" />
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {registry.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Cash Gift Section */}
        <motion.div
          id="cash-fund"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-purple-600 to-violet-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white mb-12"
        >
          <div className="text-center mb-8">
            <div className="text-5xl mx-auto mb-4">🌙✨</div>
            <h2 className="text-4xl font-serif mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Monetary Gift 💝
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Help us start our blessed journey together. Your generous contribution will help us build our new life, Insha&apos;Allah
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Bank Transfer Details</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="opacity-75">Bank:</span>
                    <div className="font-semibold">{bankDetails.bank}</div>
                  </div>
                  <div>
                    <span className="opacity-75">Account Name:</span>
                    <div className="font-semibold">{bankDetails.accountName}</div>
                  </div>
                  <div>
                    <span className="opacity-75">Account Number:</span>
                    <div className="font-semibold text-xl tracking-wider">{bankDetails.accountNumber}</div>
                  </div>
                  <div>
                    <span className="opacity-75">Reference:</span>
                    <div className="font-semibold">{bankDetails.reference}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center">
                <button
                  onClick={() => setShowQR(!showQR)}
                  className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition mb-4"
                >
                  {showQR ? 'Hide QR Code' : 'Show QR Code'}
                </button>

                {showQR && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white p-4 rounded-xl"
                  >
                    <QRCodeSVG
                      value={`Bank: ${bankDetails.bank}\nAccount: ${bankDetails.accountNumber}\nName: ${bankDetails.accountName}`}
                      size={150}
                      level="H"
                      includeMargin={true}
                    />
                    <p className="text-xs text-gray-600 text-center mt-2">
                      Scan to save details
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
        >
          <p className="text-3xl mb-4">☪️</p>
          <p className="text-2xl text-purple-900 dark:text-gray-300 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            &ldquo;The best of you are those who are best to their families&rdquo;
          </p>
          <p className="text-purple-700 dark:text-gray-400 mb-6 italic">
            — Prophet Muhammad ﷺ
          </p>
          <p className="text-lg text-purple-900 dark:text-gray-400 mb-6">
            Jazakallah Khair for being part of our blessed Nikah 🕌
          </p>
          <Link
            href="/rsvp"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-10 rounded-full transition shadow-lg hover:shadow-xl text-lg"
          >
            RSVP Now 💜
          </Link>
        </motion.div>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
