# 💍 Amir & Ayunni Wedding Website

A stunning, billion-dollar quality wedding microsite built with Next.js 15, React 19, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Premium Features

### 🎨 Visual Excellence
- **Premium Typography**: Beautiful Google Fonts (Playfair Display, Cormorant Garamond, Inter)
- **Advanced Animations**: Smooth Framer Motion animations throughout
- **Lilac Theme**: Elegant purple/violet color palette
- **Responsive Design**: Perfect on all devices
- **Dark Mode Support**: Automatic dark mode support

### ⏰ Interactive Elements
- **Live Countdown Timer**: Real-time countdown to the wedding day
- **Background Music Player**: Elegant floating music player with controls
- **Interactive Map**: Embedded Google Maps with directions
- **Smooth Scrolling**: Professional page transitions

### 📱 Pages & Features

1. **Homepage** (`/`)
   - Stunning hero section with animated entrance
   - Live countdown timer
   - Date and venue information
   - Interactive venue map with directions
   - Quick access to all features

2. **Our Story** (`/our-story`)
   - Beautiful timeline of the couple's journey
   - Animated scroll effects
   - Interactive milestone cards

3. **Wedding Party** (`/wedding-party`)
   - Profiles of bridesmaids and groomsmen
   - Hover animations and transitions
   - Beautiful card layouts

4. **RSVP** (`/rsvp`)
   - Full-featured RSVP form
   - Conditional fields based on attendance
   - Form validation and confirmation

5. **Photo Gallery** (`/gallery`)
   - Upload and share photos
   - Lightbox view for full-size images
   - Caption and uploader information
   - Delete functionality

6. **Guest List** (`/guests`)
   - Admin view of all RSVPs
   - Filter by attendance status
   - Statistics dashboard
   - View dietary restrictions and messages

7. **Guest Book** (`/guest-book`)
   - Digital guest book for well wishes
   - Real-time message display
   - Beautiful card-based layout

8. **Gift Registry** (`/registry`)
   - Links to gift registries
   - Cash gift/honeymoon fund information
   - QR code for easy bank transfers
   - Bank account details

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone and install dependencies:**
```bash
npm install
```

2. **Add wedding music (Optional):**
   - Add an MP3 file to `public/music/wedding-music.mp3`
   - See `public/music/README.md` for recommendations

3. **Run the development server:**
```bash
npm run dev
```

4. **Open your browser:**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The site will hot-reload as you make changes

## 🎭 Customization

### Wedding Details
Edit `/app/page.tsx` and `/app/components/CountdownTimer.tsx` to update:
- Wedding date: Currently set to December 22, 2025
- Venue name and address
- RSVP deadline

### Love Story Timeline
Edit `/app/our-story/page.tsx` to customize:
- Timeline events
- Years and descriptions
- Icons for each milestone

### Wedding Party
Edit `/app/wedding-party/page.tsx` to add:
- Real names and photos
- Roles and bios
- Replace emoji placeholders with actual images

### Colors & Theme
The site uses a lilac/purple theme. To customize colors:
- Primary: `purple-600` / `violet-600`
- Edit Tailwind classes throughout the components

### Typography
Fonts are configured in `/app/layout.tsx`:
- Headings: Playfair Display
- Display text: Cormorant Garamond
- Body: Inter

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: React Icons
- **QR Codes**: qrcode.react
- **Fonts**: Google Fonts (next/font)

## 🏗️ Project Structure

```
app/
├── components/          # Reusable components
│   ├── CountdownTimer.tsx
│   ├── MusicPlayer.tsx
│   ├── Navigation.tsx
│   └── VenueMap.tsx
├── gallery/            # Photo gallery page
├── guest-book/         # Digital guest book
├── guests/             # Guest list management
├── our-story/          # Love story timeline
├── registry/           # Gift registry
├── rsvp/              # RSVP form
├── wedding-party/      # Wedding party profiles
├── globals.css        # Global styles
├── layout.tsx         # Root layout
└── page.tsx           # Homepage

public/
└── music/             # Background music files
```

## 💾 Data Storage

Currently uses `localStorage` for:
- RSVP responses
- Photo gallery images
- Guest book messages

### Upgrading to a Database

For production, replace localStorage with:
- **Firebase/Firestore**: Real-time database
- **Supabase**: PostgreSQL with real-time features
- **MongoDB Atlas**: NoSQL database
- **Vercel Postgres**: Built-in database

Example migration path:
1. Create database schema for RSVPs, photos, messages
2. Replace `localStorage.getItem()` with database queries
3. Add authentication for admin features
4. Set up image hosting (Cloudinary, S3, etc.)

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main
```

2. **Deploy on Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Custom Domain (Optional):**
   - Add your custom domain in Vercel settings
   - Update DNS records as instructed

### Other Deployment Options
- **Netlify**: Similar to Vercel
- **AWS Amplify**: More control and AWS integration
- **Self-hosted**: Use `npm run build` and deploy the `.next` folder

## 🎵 Music Player Setup

The music player requires an audio file:

1. Obtain rights to use the music
2. Convert to MP3 format (recommended bitrate: 128-192 kbps)
3. Name the file `wedding-music.mp3`
4. Place in `public/music/` directory

Royalty-free music sources:
- Epidemic Sound
- Artlist
- AudioJungle
- YouTube Audio Library

## 📱 Mobile Optimization

The site is fully responsive with:
- Mobile-first design approach
- Touch-friendly interactive elements
- Optimized images and lazy loading
- Reduced motion for accessibility

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Screen reader compatible
- High contrast text ratios

## 📄 License

This project is for personal use. Feel free to customize for your own wedding!

## 🤝 Contributing

This is a personal wedding website, but suggestions are welcome:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request with improvements

## 💖 Credits

Built with love for Amir & Ayunni's special day.

## 🎉 Wedding Day: December 22, 2025

**Venue**: Willow Hall, Forrest Valley, Bandar Mahkota Cheras

---

Made with ❤️ using Next.js, React, and lots of coffee ☕
