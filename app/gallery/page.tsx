'use client';

import { useState, useEffect, type ChangeEvent } from "react";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";

interface Photo {
  id: number;
  url: string;
  caption: string;
  uploadedBy: string;
  uploadedAt: string;
}

export default function Gallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [formData, setFormData] = useState({
    caption: '',
    uploadedBy: ''
  });

  useEffect(() => {
    const storedPhotos = JSON.parse(localStorage.getItem('photos') || '[]');
    setPhotos(storedPhotos);
  }, []);

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newPhoto: Photo = {
          id: Date.now(),
          url: reader.result as string,
          caption: formData.caption,
          uploadedBy: formData.uploadedBy,
          uploadedAt: new Date().toISOString()
        };
        const updatedPhotos = [...photos, newPhoto];
        setPhotos(updatedPhotos);
        localStorage.setItem('photos', JSON.stringify(updatedPhotos));
        setShowUploadForm(false);
        setFormData({ caption: '', uploadedBy: '' });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = (id: number) => {
    const updatedPhotos = photos.filter(p => p.id !== id);
    setPhotos(updatedPhotos);
    localStorage.setItem('photos', JSON.stringify(updatedPhotos));
    setSelectedPhoto(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-200 dark:to-pink-200">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <p className="text-2xl text-purple-600 dark:text-purple-600 mb-3">
            📸 Alhamdulillah 📸
          </p>
          <h1 className="text-5xl md:text-6xl font-serif text-purple-950 dark:text-purple-950 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Nikah Memories 🕌✨
          </h1>
          <p className="text-xl text-purple-900 dark:text-purple-950 mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Share your favorite moments from our blessed celebration
          </p>
          <button
            onClick={() => setShowUploadForm(!showUploadForm)}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-10 rounded-full transition shadow-lg text-lg"
          >
            {showUploadForm ? 'Cancel' : 'Upload Photo 📷'}
          </button>
        </div>

        {showUploadForm && (
          <div className="max-w-2xl mx-auto mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Upload a Photo
            </h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="uploadedBy" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="uploadedBy"
                  value={formData.uploadedBy}
                  onChange={(e) => setFormData({ ...formData, uploadedBy: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="caption" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Caption
                </label>
                <input
                  type="text"
                  id="caption"
                  value={formData.caption}
                  onChange={(e) => setFormData({ ...formData, caption: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
                  placeholder="Add a caption"
                />
              </div>
              <div>
                <label htmlFor="photo" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Select Photo
                </label>
                <input
                  type="file"
                  id="photo"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 dark:file:bg-purple-900 dark:file:text-purple-200"
                />
              </div>
            </div>
          </div>
        )}

        {photos.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📷</div>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No photos yet. Be the first to share a memory!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {photos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="relative h-64 bg-gray-200 dark:bg-gray-700">
                  <Image
                    src={photo.url}
                    alt={photo.caption || 'Uploaded photo'}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  {photo.caption && (
                    <p className="text-gray-800 dark:text-gray-100 font-medium mb-2">
                      {photo.caption}
                    </p>
                  )}
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    By {photo.uploadedBy || 'Anonymous'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full" style={{ aspectRatio: '3 / 2' }}>
              <Image
                src={selectedPhoto.url}
                alt={selectedPhoto.caption || 'Selected gallery photo'}
                fill
                sizes="100vw"
                className="object-contain"
                unoptimized
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              {selectedPhoto.caption && (
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  {selectedPhoto.caption}
                </h3>
              )}
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Uploaded by {selectedPhoto.uploadedBy || 'Anonymous'} on{' '}
                {new Date(selectedPhoto.uploadedAt).toLocaleDateString()}
              </p>
              <button
                onClick={() => handleDelete(selectedPhoto.id)}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition"
              >
                Delete Photo
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
      <BottomNav />
    </div>
  );
}
