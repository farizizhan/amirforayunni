# 🚀 Quick Start Guide - Amir & Ayunni Wedding Website

## Get Running in 30 Seconds

```bash
# 1. Start the development server
npm run dev

# 2. Open in browser
# http://localhost:3000
```

## ✨ What You Have

### 8 Complete Pages
1. **/** - Homepage with countdown & map
2. **/our-story** - Love story timeline
3. **/wedding-party** - Bridesmaids & groomsmen
4. **/rsvp** - RSVP form
5. **/gallery** - Photo gallery
6. **/guest-book** - Digital well-wishes
7. **/guests** - Admin guest list
8. **/registry** - Gift registry & donations

### Premium Features
- ⏰ Live countdown timer
- 🎵 Background music player
- 🗺️ Interactive Google Maps
- 📱 Mobile hamburger menu
- ✨ Framer Motion animations
- 💜 Lilac/purple theme
- 🌙 Dark mode support
- ♿ Fully accessible

## 🎨 Customization Quick Guide

### Update Wedding Details
**File**: `app/page.tsx` and `app/components/CountdownTimer.tsx`
```typescript
// Change date (line 50 in CountdownTimer.tsx)
const weddingDate = new Date('2025-12-22T00:00:00').getTime();

// Update venue (in page.tsx)
Willow Hall, Forrest Valley, Bandar Mahkota Cheras
```

### Add Your Love Story
**File**: `app/our-story/page.tsx` (lines 6-45)
```typescript
const timeline = [
  { year: "2018", title: "First Meeting", ... },
  // Add your own milestones
];
```

### Update Wedding Party
**File**: `app/wedding-party/page.tsx`
```typescript
const bridesmaids = [
  { name: "Sarah Johnson", role: "Maid of Honor", ... },
];
const groomsmen = [
  { name: "Daniel Rahman", role: "Best Man", ... },
];
```

### Add Background Music
1. Get an MP3 file (your favorite song)
2. Name it `wedding-music.mp3`
3. Place in `public/music/` folder
4. Music player will auto-load it!

### Change Theme Colors
**Current**: Purple/Lilac (`purple-600`, `violet-600`)
**To change**: Find and replace throughout:
- `purple-600` → your color
- `violet-600` → your complementary color

## 📱 Mobile Features

- ✅ Hamburger menu on mobile
- ✅ Touch-friendly buttons (44px+)
- ✅ Responsive typography
- ✅ Smaller music player on mobile
- ✅ No horizontal scroll
- ✅ Perfect on all screen sizes

## 🚢 Deploy to Production

### Option 1: Vercel (Recommended - Free)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: GitHub + Vercel Web
1. Push to GitHub
2. Go to vercel.com
3. Import your repo
4. Deploy! (auto-detects Next.js)

## 📊 Current Data Storage

**LocalStorage** (browser-based):
- RSVPs: `localStorage.getItem('rsvps')`
- Photos: `localStorage.getItem('photos')`
- Messages: `localStorage.getItem('guestbook')`

**To upgrade to database**:
- Replace localStorage with Firebase/Supabase
- See README.md for detailed migration guide

## 🎯 Quick Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 📝 Quick Checklist Before Launch

- [ ] Update wedding date and venue
- [ ] Add your love story timeline
- [ ] Update wedding party names
- [ ] Add background music (optional)
- [ ] Customize bank details in registry
- [ ] Test RSVP form
- [ ] Test photo upload
- [ ] Check on mobile device
- [ ] Deploy to Vercel
- [ ] Add custom domain (optional)
- [ ] Share with guests! 🎉

## 🆘 Quick Troubleshooting

### Server won't start?
```bash
rm -rf .next node_modules
npm install
npm run dev
```

### Music not playing?
- Check `public/music/wedding-music.mp3` exists
- Check browser console for errors
- Try different audio file

### Mobile menu not working?
- Check browser console
- Clear browser cache
- Try different browser

## 💡 Pro Tips

1. **Test early**: Test on real mobile devices
2. **Backup data**: Export localStorage data regularly
3. **Optimize images**: Compress photos before uploading
4. **Monitor RSVPs**: Check guest list page daily
5. **Share link**: Use QR code for easy sharing

## 🎉 You're Ready!

Your billion-dollar wedding website is ready to go! Just customize the content, add your music, and share with your guests.

**Need help?** Check:
- `README.md` - Full documentation
- `FEATURES.md` - Feature breakdown
- `MOBILE-OPTIMIZATION.md` - Mobile details

**Wedding Date**: December 22, 2025
**Venue**: Willow Hall, Forrest Valley, Bandar Mahkota Cheras

### Made with ❤️ for Amir & Ayunni
