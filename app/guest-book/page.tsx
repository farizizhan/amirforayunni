'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";

interface Message {
  id: number;
  name: string;
  message: string;
  timestamp: string;
}

export default function GuestBook() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem('guestbook') || '[]');
    setMessages(storedMessages);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newMessage: Message = {
      id: Date.now(),
      name: formData.name,
      message: formData.message,
      timestamp: new Date().toISOString()
    };

    const updatedMessages = [newMessage, ...messages];
    setMessages(updatedMessages);
    localStorage.setItem('guestbook', JSON.stringify(updatedMessages));

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-200 dark:to-pink-200">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 py-16">
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
            <div className="text-6xl">🤲✨</div>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-serif text-purple-950 dark:text-purple-950 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Duas & Blessings 🕌
          </h1>
          <p className="text-xl text-purple-900 dark:text-purple-950 mb-3" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Leave your heartfelt duas and blessings for the blessed couple
          </p>
          <p className="text-lg text-purple-700 dark:text-purple-800 italic">
            May Allah accept your prayers ☪️
          </p>
        </motion.div>

        {/* Message Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mb-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100 transition"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Dua & Blessings 🤲
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100 transition resize-none"
                placeholder="Share your heartfelt duas and prayers for the couple... (e.g., May Allah bless your union...)"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-semibold py-4 px-8 rounded-lg transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <FaPaperPlane />
              {submitted ? 'Message Sent! ❤️' : 'Send Your Wishes'}
            </motion.button>
          </form>
        </motion.div>

        {/* Messages Display */}
        <div className="space-y-6">
          <h2 className="text-3xl font-serif text-gray-800 dark:text-gray-100 mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
            Wishes from Our Guests ({messages.length})
          </h2>

          {messages.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl"
            >
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                Be the first to leave a message! ✨
              </p>
            </motion.div>
          ) : (
            messages.map((msg, index) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">
                    {msg.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                        {msg.name}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(msg.timestamp).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic">
                      &ldquo;{msg.message}&rdquo;
                    </p>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
