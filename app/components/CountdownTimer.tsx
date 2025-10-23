'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const WEDDING_TIMESTAMP = new Date('2025-12-22T00:00:00').getTime();

const calculateTimeLeft = (targetTime: number): TimeLeft => {
  const now = Date.now();
  const difference = targetTime - now;

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
};

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setTimeLeft(calculateTimeLeft(WEDDING_TIMESTAMP));

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(WEDDING_TIMESTAMP));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Hari', value: timeLeft.days },
    { label: 'Jam', value: timeLeft.hours },
    { label: 'Minit', value: timeLeft.minutes },
    { label: 'Saat', value: timeLeft.seconds },
  ];

  if (!isMounted) {
    return (
      <div className="w-full">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-serif text-purple-950 dark:text-purple-950 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            🕐 Counting Down 🕐
          </h2>
          <p className="text-xl text-purple-900 dark:text-purple-800">Until we say &ldquo;I do&rdquo; 💍</p>
        </div>

        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
          {timeUnits.map((unit) => (
            <div
              key={unit.label}
              className="bg-purple-50 dark:bg-purple-100 rounded-2xl shadow-xl p-6 text-center"
            >
              <div className="text-6xl font-bold text-purple-600 dark:text-purple-600 mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
                00
              </div>
              <div className="text-base text-purple-950 dark:text-purple-950 uppercase tracking-wider font-bold">
                {unit.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl font-serif text-purple-950 dark:text-purple-950 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
          ⏰ Menghitung Hari
        </h2>
        <p className="text-xl text-purple-900 dark:text-purple-800">Sehingga hari bahagia kami 💍</p>
      </motion.div>

      <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-purple-50 dark:bg-purple-100 rounded-2xl shadow-xl p-6 text-center"
          >
            <motion.div
              key={unit.value}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-6xl font-bold text-purple-600 dark:text-purple-600 mb-3"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              {String(unit.value).padStart(2, '0')}
            </motion.div>
            <div className="text-base text-purple-950 dark:text-purple-950 uppercase tracking-wider font-bold">
              {unit.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
