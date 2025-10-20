'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";

interface RSVP {
  id: number;
  name: string;
  email: string;
  phone: string;
  attending: string;
  guests: string;
  dietaryRestrictions: string;
  message: string;
  submittedAt: string;
}

export default function GuestList() {
  const [rsvps, setRsvps] = useState<RSVP[]>([]);
  const [filter, setFilter] = useState<'all' | 'attending' | 'not-attending'>('all');

  useEffect(() => {
    const storedRSVPs = JSON.parse(localStorage.getItem('rsvps') || '[]');
    setRsvps(storedRSVPs);
  }, []);

  const filteredRSVPs = rsvps.filter(rsvp => {
    if (filter === 'attending') return rsvp.attending === 'yes';
    if (filter === 'not-attending') return rsvp.attending === 'no';
    return true;
  });

  const attendingCount = rsvps.filter(r => r.attending === 'yes').reduce((sum, r) => sum + parseInt(r.guests || '1'), 0);
  const notAttendingCount = rsvps.filter(r => r.attending === 'no').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-950 dark:to-violet-950">
      <Navigation />

      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif text-gray-800 dark:text-gray-100 mb-2">
            Guest List
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage and view all RSVPs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
              {attendingCount}
            </div>
            <div className="text-gray-600 dark:text-gray-400 mt-2">
              Guests Attending
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-red-600 dark:text-red-400">
              {notAttendingCount}
            </div>
            <div className="text-gray-600 dark:text-gray-400 mt-2">
              Cannot Attend
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              {rsvps.length}
            </div>
            <div className="text-gray-600 dark:text-gray-400 mt-2">
              Total Responses
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              RSVP Responses
            </h2>
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filter === 'all'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('attending')}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filter === 'attending'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                Attending
              </button>
              <button
                onClick={() => setFilter('not-attending')}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filter === 'not-attending'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                Not Attending
              </button>
            </div>
          </div>

          {filteredRSVPs.length === 0 ? (
            <div className="text-center py-12 text-gray-500 dark:text-gray-400">
              No RSVPs yet. Share the RSVP link with your guests!
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Phone
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Guests
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Dietary
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredRSVPs.map((rsvp) => (
                    <tr key={rsvp.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                        {rsvp.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                        {rsvp.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                        {rsvp.phone || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          rsvp.attending === 'yes'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                        }`}>
                          {rsvp.attending === 'yes' ? 'Attending' : 'Not Attending'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                        {rsvp.attending === 'yes' ? rsvp.guests : '-'}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                        {rsvp.dietaryRestrictions || '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {filteredRSVPs.some(r => r.message) && (
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
              Messages from Guests
            </h2>
            <div className="space-y-4">
              {filteredRSVPs.filter(r => r.message).map((rsvp) => (
                <div key={rsvp.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="font-medium text-gray-800 dark:text-gray-100 mb-2">
                    {rsvp.name}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 italic">
                    "{rsvp.message}"
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
