'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { storage } from '../utils/storage';

interface Photo {
  id: number;
  url: string;
  caption: string;
  uploadedBy: string;
  uploadedAt: string;
}

// Dummy placeholder images using emojis/gradients
const dummyPhotos = [
  { id: 1, emoji: '💍', gradient: 'from-purple-400 to-pink-400' },
  { id: 2, emoji: '🌸', gradient: 'from-pink-400 to-rose-400' },
  { id: 3, emoji: '💐', gradient: 'from-rose-400 to-orange-400' },
  { id: 4, emoji: '🎊', gradient: 'from-violet-400 to-purple-400' },
  { id: 5, emoji: '✨', gradient: 'from-blue-400 to-purple-400' },
  { id: 6, emoji: '🤲', gradient: 'from-purple-400 to-violet-400' },
];

export default function CompactGallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const storedPhotos = JSON.parse(storage.getItem('photos') || '[]');
    setPhotos(storedPhotos.slice(0, 6)); // Show only latest 6
  }, []);

  // Use real photos if available, otherwise show dummies
  const displayItems = photos.length > 0 ? photos : [];
  const totalSlots = 6;

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-serif text-purple-950 dark:text-purple-950 mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
          📸 Galeri
        </h2>
        <p className="text-sm text-purple-700 dark:text-purple-800">Detik-detik indah majlis kami</p>
      </div>

      {/* Photo Grid - 2 rows x 3 columns on mobile, responsive */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {Array.from({ length: totalSlots }).map((_, index) => {
          const photo = displayItems[index];
          const dummy = dummyPhotos[index];

          if (photo) {
            // Real photo from uploads
            return (
              <div
                key={photo.id}
                className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
              >
                <Image
                  src={photo.url}
                  alt={photo.caption || 'Gallery photo'}
                  fill
                  sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-cover"
                  unoptimized
                />
              </div>
            );
          } else {
            // Dummy placeholder
            return (
              <div
                key={`dummy-${index}`}
                className={`relative aspect-square rounded-lg overflow-hidden shadow-md bg-gradient-to-br ${dummy.gradient} flex items-center justify-center`}
              >
                <span className="text-4xl md:text-5xl opacity-60">{dummy.emoji}</span>
              </div>
            );
          }
        })}
      </div>

      {/* View More Link */}
      <div className="text-center">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700 font-medium transition"
        >
          <span>Lihat semua & muat naik foto</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
