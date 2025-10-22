'use client';

import Link from "next/link";
import { FaPhone, FaPlay, FaMapMarkerAlt, FaGift, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function BottomNav() {
  const navItems = [
    {
      icon: FaPhone,
      label: "Contact",
      href: "tel:+60123456789",
      action: "call"
    },
    {
      icon: FaPlay,
      label: "Video",
      href: "/gallery",
      action: "link"
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      href: "#map",
      action: "scroll"
    },
    {
      icon: FaGift,
      label: "Registry",
      href: "/registry",
      action: "link"
    },
    {
      icon: FaEnvelope,
      label: "RSVP",
      href: "/rsvp",
      action: "link"
    },
  ];

  const handleClick = (e: React.MouseEvent, action: string, href: string) => {
    if (action === "scroll" && href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-purple-50/95 backdrop-blur-lg border-t-2 border-purple-200 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-around items-center py-3">
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1"
            >
              {item.action === "call" ? (
                <a
                  href={item.href}
                  className="flex flex-col items-center gap-1 text-purple-600 dark:text-purple-600 hover:text-purple-800 dark:hover:text-purple-800 transition-colors"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-50 dark:bg-purple-100 hover:bg-purple-100 dark:hover:bg-purple-200 transition-colors">
                    <item.icon className="text-xl" />
                  </div>
                  <span className="text-xs font-medium">{item.label}</span>
                </a>
              ) : (
                <Link
                  href={item.href}
                  onClick={(e) => handleClick(e, item.action, item.href)}
                  className="flex flex-col items-center gap-1 text-purple-600 dark:text-purple-600 hover:text-purple-800 dark:hover:text-purple-800 transition-colors"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-50 dark:bg-purple-100 hover:bg-purple-100 dark:hover:bg-purple-200 transition-colors">
                    <item.icon className="text-xl" />
                  </div>
                  <span className="text-xs font-medium">{item.label}</span>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
