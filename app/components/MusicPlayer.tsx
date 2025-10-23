'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

// YouTube IFrame Player API types
interface YTPlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  setVolume: (volume: number) => void;
  mute: () => void;
  unMute: () => void;
  destroy: () => void;
}

interface YTEvent {
  target: YTPlayer;
  data: number;
}

declare global {
  interface Window {
    YT: {
      Player: new (elementId: string, config: unknown) => YTPlayer;
      PlayerState: {
        PLAYING: number;
        PAUSED: number;
      };
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(30); // YouTube volume is 0-100
  const [showControls, setShowControls] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const playerRef = useRef<YTPlayer | null>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);

  // Load YouTube IFrame API
  useEffect(() => {
    // Load the IFrame Player API code asynchronously
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Initialize player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      if (playerContainerRef.current && !playerRef.current) {
        playerRef.current = new window.YT.Player('youtube-player', {
          videoId: 'j6PKKHg90CY', // Your YouTube video ID
          playerVars: {
            autoplay: 1, // Auto-play enabled
            controls: 1, // Show controls on the visible player
            disablekb: 0,
            fs: 0,
            loop: 1,
            modestbranding: 1,
            playsinline: 1,
            rel: 0,
            showinfo: 0,
            playlist: 'j6PKKHg90CY', // Required for looping
          },
          events: {
            onReady: (event: YTEvent) => {
              event.target.setVolume(volume);
              // Auto-play on load
              setHasInteracted(true);
              const musicPref = localStorage.getItem('musicPreference');

              // Auto-play unless user explicitly paused before
              if (musicPref !== 'paused') {
                setTimeout(() => {
                  event.target.playVideo();
                  setIsPlaying(true);
                  localStorage.setItem('musicPreference', 'playing');
                }, 1000); // Small delay to ensure everything is loaded
              }
            },
            onStateChange: (event: YTEvent) => {
              // YouTube player state: -1 (unstarted), 0 (ended), 1 (playing), 2 (paused), 3 (buffering), 5 (cued)
              if (event.data === window.YT.PlayerState.PLAYING) {
                setIsPlaying(true);
              } else if (event.data === window.YT.PlayerState.PAUSED) {
                setIsPlaying(false);
              }
            },
          },
        });
      }
    };

    return () => {
      // Cleanup
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle play/pause state
  useEffect(() => {
    if (!playerRef.current || !hasInteracted) return;

    if (isPlaying) {
      playerRef.current.playVideo();
      localStorage.setItem('musicPreference', 'playing');
    } else {
      playerRef.current.pauseVideo();
      localStorage.setItem('musicPreference', 'paused');
    }
  }, [isPlaying, hasInteracted]);

  // Handle volume changes
  useEffect(() => {
    if (playerRef.current && playerRef.current.setVolume) {
      playerRef.current.setVolume(volume);
    }
  }, [volume]);

  // Handle mute
  useEffect(() => {
    if (playerRef.current) {
      if (isMuted) {
        playerRef.current.mute();
      } else {
        playerRef.current.unMute();
      }
    }
  }, [isMuted]);

  const togglePlay = () => {
    setHasInteracted(true);
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
  };

  return (
    <>

      {/* Music Player Controls & YouTube Embed */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-20 right-4 z-40 md:bottom-24"
      >
        {/* Control Button */}
        <div
          className="relative"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-full shadow-lg p-2">
            <div className="flex items-center gap-2">
              {/* Main play/pause button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={togglePlay}
                className="w-10 h-10 md:w-9 md:h-9 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 text-white flex items-center justify-center shadow-md transition-shadow touch-manipulation"
                aria-label={isPlaying ? 'Jeda muzik' : 'Main muzik'}
              >
                {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} className="ml-0.5" />}
              </motion.button>

              {/* Volume controls - desktop only */}
              <AnimatePresence>
                {showControls && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    className="hidden md:flex items-center gap-2 overflow-hidden"
                  >
                    <button
                      onClick={toggleMute}
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition touch-manipulation"
                      aria-label={isMuted ? 'Bunyikan' : 'Bisukan'}
                    >
                      {isMuted ? <FaVolumeMute size={14} /> : <FaVolumeUp size={14} />}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="10"
                      value={volume}
                      onChange={handleVolumeChange}
                      aria-label="Kawalan bunyi"
                      className="w-12 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer accent-purple-600 touch-manipulation"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Playing indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isPlaying ? 1 : 0 }}
            className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-purple-600 rounded-full animate-pulse"
          />
        </div>

        {/* Hidden player container */}
        <div
          ref={playerContainerRef}
          className="fixed -left-[9999px] -top-[9999px] w-0 h-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div id="youtube-player"></div>
        </div>
      </motion.div>
    </>
  );
}
