'use client';

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/our-story", label: "Our Story" },
    { href: "/wedding-party", label: "Wedding Party" },
    { href: "/rsvp", label: "RSVP" },
    { href: "/gallery", label: "Gallery" },
    { href: "/guest-book", label: "Guest Book" },
    { href: "/registry", label: "Registry" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex space-x-6">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition font-medium"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMenu}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-white dark:bg-gray-900 shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              {/* Close Button */}
              <div className="flex justify-end p-4 border-b border-gray-200 dark:border-gray-800">
                <button
                  onClick={closeMenu}
                  className="p-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition"
                  aria-label="Close menu"
                >
                  <FaTimes size={24} />
                </button>
              </div>

              {/* Menu Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                <h2
                  className="text-3xl font-serif text-purple-600 dark:text-purple-400"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  A & A
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  December 22, 2025
                </p>
              </div>

              {/* Menu Items */}
              <nav className="p-4">
                <ul className="space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="block px-4 py-3 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg transition"
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Quick Actions */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-800 mt-auto">
                <Link
                  href="/rsvp"
                  onClick={closeMenu}
                  className="block w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-semibold py-3 px-6 rounded-lg transition shadow-lg text-center"
                >
                  RSVP Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
