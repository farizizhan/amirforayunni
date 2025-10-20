'use client';

import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaParking, FaHotel, FaDirections } from 'react-icons/fa';

export default function VenueMap() {
  const venueInfo = {
    name: 'Willow Hall',
    address: 'Forrest Valley, Bandar Mahkota Cheras',
    coordinates: '3.0738,101.7724', // Approximate coordinates for Bandar Mahkota Cheras
    parking: 'Ample parking available on-site',
    nearbyHotels: [
      'Hotel Seri Malaysia Kajang',
      'Cititel Express Kajang',
      'The Leaf Hotel'
    ]
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=Willow+Hall+Forrest+Valley+Bandar+Mahkota+Cheras`;
  const wazeUrl = `https://www.waze.com/ul?q=Willow Hall Forrest Valley Bandar Mahkota Cheras&navigate=yes`;

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl font-serif text-gray-800 dark:text-gray-100 mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
          Venue & Directions
        </h2>
        <p className="text-gray-600 dark:text-gray-400">Find your way to our celebration</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden shadow-2xl"
        >
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.3897773!2d101.7724!3d3.0738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDQnMjUuNyJOIDEwMcKwNDYnMjAuNiJF!5e0!3m2!1sen!2smy!4v1234567890`}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </motion.div>

        {/* Venue Details */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Address */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
                <FaMapMarkerAlt className="text-purple-600 dark:text-purple-400" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  {venueInfo.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {venueInfo.address}
                </p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition text-sm font-medium"
                  >
                    <FaDirections size={16} />
                    Google Maps
                  </a>
                  <a
                    href={wazeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition text-sm font-medium"
                  >
                    <FaDirections size={16} />
                    Waze
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Parking */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                <FaParking className="text-green-600 dark:text-green-400" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Parking
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {venueInfo.parking}
                </p>
              </div>
            </div>
          </div>

          {/* Nearby Hotels */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                <FaHotel className="text-blue-600 dark:text-blue-400" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Nearby Hotels
                </h3>
                <ul className="space-y-2">
                  {venueInfo.nearbyHotels.map((hotel, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                      {hotel}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
