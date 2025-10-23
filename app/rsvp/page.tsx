'use client';

import Link from "next/link";
import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";
import { storage } from "../utils/storage";

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    attending: 'yes',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Sila masukkan nama penuh anda';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Nama mestilah sekurang-kurangnya 2 huruf';
    }

    if (formData.attending === 'yes' && !formData.guests) {
      newErrors.guests = 'Sila pilih bilangan tetamu';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Store in localStorage with SSR-safe wrapper
      const existingRSVPs = JSON.parse(storage.getItem('rsvps') || '[]');
      const newRSVP = {
        ...formData,
        id: Date.now(),
        submittedAt: new Date().toISOString()
      };
      storage.setItem('rsvps', JSON.stringify([...existingRSVPs, newRSVP]));

      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      setErrors({ submit: 'Gagal menghantar RSVP. Sila cuba lagi.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-950 dark:to-violet-950">
        <Navigation />

        <main className="max-w-2xl mx-auto px-4 py-16 pb-24">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 text-center space-y-6">
            <div className="text-6xl">🕌</div>
            <h2 className="text-4xl font-serif text-purple-950 dark:text-gray-100" style={{ fontFamily: 'var(--font-playfair)' }}>
              Jazakallah Khair! ☪️
            </h2>
            <p className="text-xl text-purple-900 dark:text-gray-400" style={{ fontFamily: 'var(--font-cormorant)' }}>
              RSVP anda telah diterima. Kami menantikan kehadiran anda untuk meraikan majlis walimatul urus ini, Insha&apos;Allah! 🌸
            </p>
            <p className="text-lg text-purple-700 dark:text-gray-500 italic">
              Semoga Allah memberkati anda ✨
            </p>
            <div className="pt-4">
              <Link
                href="/"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-10 rounded-full transition shadow-lg text-lg"
              >
                Kembali ke Laman Utama 💜
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-200 dark:to-pink-200">
      <Navigation />

      <main className="max-w-2xl mx-auto px-4 py-16 pb-24">
        <div className="text-center mb-8">
          <p className="text-2xl text-purple-600 dark:text-purple-600 mb-3">
            ☪️ Assalamu Alaikum ☪️
          </p>
          <h1 className="text-5xl font-serif text-purple-950 dark:text-purple-950 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Sahkan Kehadiran 🕌
          </h1>
          <p className="text-xl text-purple-900 dark:text-purple-950" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Sila maklumkan sama ada anda dapat hadir ke majlis kami
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 space-y-6">
          {errors.submit && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg" role="alert">
              <p className="font-medium">Ralat</p>
              <p>{errors.submit}</p>
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Nama Penuh *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              aria-label="Nama penuh"
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100 ${
                errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              }`}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="attending" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Adakah anda akan hadir? *
            </label>
            <select
              id="attending"
              name="attending"
              required
              value={formData.attending}
              onChange={handleChange}
              aria-label="Pengesahan kehadiran"
              aria-required="true"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
            >
              <option value="yes">Ya, saya akan hadir</option>
              <option value="no">Tidak, saya tidak dapat hadir</option>
            </select>
          </div>

          {formData.attending === 'yes' && (
            <>
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Bilangan Tetamu *
                </label>
                <select
                  id="guests"
                  name="guests"
                  required
                  value={formData.guests}
                  onChange={handleChange}
                  aria-label="Bilangan tetamu"
                  aria-required="true"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
                >
                  <option value="1">1 Tetamu</option>
                  <option value="2">2 Tetamu</option>
                  <option value="3">3 Tetamu</option>
                  <option value="4">4 Tetamu</option>
                  <option value="5">5 Tetamu</option>
                </select>
              </div>

            </>
          )}

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Ucapan untuk Pengantin
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Kongsi ucapan & doa anda..."
              aria-label="Ucapan untuk pengantin"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
            />
          </div>

          <div className="flex flex-col gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              aria-label="Hantar RSVP"
              className="flex-1 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded-lg transition"
            >
              {isSubmitting ? 'Menghantar...' : 'Hantar RSVP'}
            </button>
            <Link
              href="/"
              aria-label="Batal dan kembali"
              className="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 font-semibold py-4 px-8 rounded-lg transition text-center flex items-center justify-center"
            >
              Batal
            </Link>
          </div>
        </form>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
