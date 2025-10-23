# Wedding Music Setup

## 🎵 YouTube Embed - AUTO-PLAYING!

**✅ MUSIC IS ALREADY WORKING!**

Your selected music is now **embedded directly from YouTube**:
**YouTube Link:** https://www.youtube.com/watch?v=j6PKKHg90CY

## ✨ How It Works

The music player now uses YouTube's IFrame API to play music directly from YouTube:
- ✅ **No download needed** - Music streams from YouTube
- ✅ **Auto-plays** after user clicks "Ya, Main 🎵"
- ✅ **Loops automatically** - Continuous playback
- ✅ **Hidden player** - Only control buttons visible
- ✅ **Mobile friendly** - Works on all devices
- ✅ **Volume control** - Desktop hover controls

## 🎼 Features

- **Welcome Prompt:** Shows after 2 seconds on first visit
- **Remembers Preference:** Saves if you want music playing
- **Smooth Controls:** Play/pause, volume, mute
- **Low Data:** Streams directly, no large file downloads

## 🔄 To Change the Music

1. **Find a YouTube video** with the music you want
2. **Get the video ID** from the URL
   - Example: `https://www.youtube.com/watch?v=j6PKKHg90CY`
   - Video ID is: `j6PKKHg90CY` (everything after `v=`)

3. **Edit the MusicPlayer component:**
   - Open: `app/components/MusicPlayer.tsx`
   - Find line 56: `videoId: 'j6PKKHg90CY'`
   - Replace with your video ID
   - Also update line 68: `playlist: 'j6PKKHg90CY'`

4. **Save and reload** - Music will change!

## 🎵 Suggested Islamic Wedding Music

Search on YouTube for:
- "Baraka Allahu Lakuma Maher Zain"
- "Islamic wedding nasheed instrumental"
- "Mawlaya nasheed"
- "Assubhu Bada instrumental"
- "Ya Hanana Sabyan"

## 🔧 Troubleshooting

**Music not playing?**
- Check browser console (F12) for errors
- Try different browser (Chrome works best)
- Make sure you clicked "Ya, Main 🎵" in the prompt
- Check if video is available in your region

**Want to use MP3 file instead?**
- You can switch back to MP3 playback
- Download music and save as `wedding-music.mp3`
- Update MusicPlayer.tsx to use audio element
- (Ask for help if needed)

## 📱 Browser Support

- ✅ Chrome/Edge (best)
- ✅ Safari (iOS/macOS)
- ✅ Firefox
- ℹ️ Autoplay requires user interaction (handled by prompt)
