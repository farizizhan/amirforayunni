'use client';

import { useState, useEffect } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { storage } from '../utils/storage';

interface Message {
  id: number;
  name: string;
  message: string;
  timestamp: string;
}

export default function CompactGuestBook() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const storedMessages = JSON.parse(storage.getItem('guestbook') || '[]');
    setMessages(storedMessages.slice(0, 5)); // Show only latest 5
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);

    const newMessage: Message = {
      id: Date.now(),
      name: formData.name.trim(),
      message: formData.message.trim(),
      timestamp: new Date().toISOString()
    };

    const updatedMessages = [newMessage, ...messages];
    setMessages(updatedMessages.slice(0, 5));
    storage.setItem('guestbook', JSON.stringify(updatedMessages));

    setFormData({ name: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-serif text-purple-950 dark:text-purple-950 mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
          💌 Ucapan
        </h2>
        <p className="text-sm text-purple-700 dark:text-purple-800">Tinggalkan ucapan & doa untuk kami</p>
      </div>

      {/* Compact Form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="bg-white/90 backdrop-blur-sm dark:bg-purple-100 rounded-xl shadow-lg p-4">
          <input
            type="text"
            placeholder="Nama anda"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            maxLength={50}
            className="w-full px-3 py-2 mb-3 border border-purple-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-white"
          />
          <textarea
            placeholder="Tulis ucapan anda..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            maxLength={200}
            rows={3}
            className="w-full px-3 py-2 mb-3 border border-purple-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none dark:bg-white"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 disabled:from-purple-400 disabled:to-violet-400 text-white py-2.5 px-4 rounded-lg font-medium text-sm transition shadow-lg flex items-center justify-center gap-2"
          >
            <FaPaperPlane size={14} />
            {isSubmitting ? 'Menghantar...' : 'Hantar Ucapan'}
          </button>
        </div>
      </form>

      {/* Messages Display */}
      <div className="space-y-3">
        {messages.length === 0 ? (
          <div className="text-center py-8 text-purple-700 dark:text-purple-800 text-sm">
            Be the first to leave a wish! 🤲
          </div>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className="bg-white/80 backdrop-blur-sm dark:bg-purple-50 rounded-lg p-4 shadow">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-200 dark:bg-purple-300 flex items-center justify-center flex-shrink-0 text-purple-700 font-bold text-sm">
                  {msg.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-purple-950 text-sm mb-1">{msg.name}</div>
                  <p className="text-purple-900 dark:text-purple-950 text-sm leading-relaxed break-words">
                    {msg.message}
                  </p>
                  <div className="text-xs text-purple-600 dark:text-purple-700 mt-2">
                    {new Date(msg.timestamp).toLocaleDateString('en-MY', { day: 'numeric', month: 'short' })}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {messages.length >= 5 && (
        <div className="text-center mt-4">
          <a href="/guest-book" className="text-sm text-purple-600 hover:text-purple-700 font-medium">
            View all wishes →
          </a>
        </div>
      )}
    </div>
  );
}
