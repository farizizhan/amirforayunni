'use client';

import Link from "next/link";
import { useState } from "react";
import Navigation from "../components/Navigation";

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    attending: 'yes',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Store in localStorage for now (can be replaced with API call)
    const existingRSVPs = JSON.parse(localStorage.getItem('rsvps') || '[]');
    const newRSVP = {
      ...formData,
      id: Date.now(),
      submittedAt: new Date().toISOString()
    };
    localStorage.setItem('rsvps', JSON.stringify([...existingRSVPs, newRSVP]));

    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-950 dark:to-violet-950">
        <Navigation />

        <main className="max-w-2xl mx-auto px-4 py-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 text-center space-y-6">
            <div className="text-6xl">✓</div>
            <h2 className="text-3xl font-serif text-gray-800 dark:text-gray-100">
              Thank You!
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Your RSVP has been received. We look forward to celebrating with you!
            </p>
            <div className="pt-4">
              <Link
                href="/"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full transition"
              >
                Back to Home
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

      <main className="max-w-2xl mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif text-gray-800 dark:text-gray-100 mb-2">
            RSVP
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Please let us know if you can join us
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
            />
          </div>

          <div>
            <label htmlFor="attending" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Will you attend? *
            </label>
            <select
              id="attending"
              name="attending"
              required
              value={formData.attending}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
            >
              <option value="yes">Yes, I will attend</option>
              <option value="no">No, I cannot attend</option>
            </select>
          </div>

          {formData.attending === 'yes' && (
            <>
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Number of Guests *
                </label>
                <select
                  id="guests"
                  name="guests"
                  required
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                </select>
              </div>

            </>
          )}

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Message for the Couple
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Share your well wishes..."
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition"
            >
              Submit RSVP
            </button>
            <Link
              href="/"
              className="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 font-semibold py-3 px-8 rounded-lg transition text-center"
            >
              Cancel
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}
