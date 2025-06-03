# Hike and S33k Website

A modern, responsive website for the Hike and S33k hiking group built with React, Vite, and Tailwind CSS.

## 🌟 Features

- **Responsive Design**: Beautiful, mobile-first design with hiking-themed colors
- **JSON-Driven Content**: Easy content updates without redeployment
- **Upcoming Hikes**: Complete hike planning with RSVP tracking and details
- **Photo Gallery**: Lightbox image viewer with multiple collections
- **Instagram Integration**: Both JSON feed and oEmbed support
- **WhatsApp Integration**: Direct links to join the group
- **No Backend Required**: Static site with dynamic JSON content loading

## 🚀 Quick Start

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Start Development Server**

   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
hike-and-s33k/
├── public/
│   ├── galleries/          # Gallery JSON files
│   │   ├── ramsgate-to-margate.json
│   │   └── box-hill-circular.json.json
│   ├── instagram/          # Instagram JSON files
│   │   └── recent.json
│   └── hikes/              # Upcoming hikes JSON files
│       └── upcoming.json
├── src/
│   ├── components/         # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx
│   │   ├── InstagramEmbed.jsx
│   │   └── UpcomingHikes.jsx
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Hikes.jsx
│   │   ├── Gallery.jsx
│   │   ├── Instagram.jsx
│   │   └── Join.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
└── package.json
```

## 📝 Content Management

### Managing Upcoming Hikes

Update `public/hikes/upcoming.json` to add/modify hikes:

```json
{
  "lastUpdated": "2024-03-15T10:00:00Z",
  "hikes": [
    {
      "id": 1,
      "title": "Sunrise Peak Challenge",
      "date": "2024-03-23",
      "time": "06:00 AM",
      "location": "Mount Wilson Trail",
      "meetingPoint": "Mount Wilson Trailhead Parking",
      "distance": "8.2 miles",
      "difficulty": "Moderate",
      "difficultyLevel": 3,
      "duration": "4-5 hours",
      "elevation": "2,400 ft gain",
      "description": "Early morning hike description...",
      "attendees": 8,
      "maxAttendees": 12,
      "whatToBring": ["Headlamp", "Water (3L)", "Snacks"],
      "highlights": ["Sunrise views", "City panorama"],
      "trailConditions": "Good - some loose rocks near summit",
      "parkingInfo": "Free parking at trailhead"
    }
  ]
}
```

**Key Fields:**

- `difficultyLevel`: 1 (Easy), 2 (Moderate), 3 (Challenging), 4 (Advanced)
- `attendees`/`maxAttendees`: Track RSVP numbers
- `whatToBring`: Array of essential items
- `highlights`: Key attractions of the hike

### Adding New Gallery Collections

1. Create a new JSON file in `public/galleries/` (e.g., `april2024.json`)
2. Follow this structure:

```json
{
  "name": "Gallery Name",
  "description": "Gallery description",
  "date": "April 2024",
  "location": "Trail Location",
  "images": [
    {
      "id": 1,
      "src": "image-url",
      "alt": "Alt text",
      "title": "Image title",
      "date": "2024-04-01",
      "location": "Specific location"
    }
  ]
}
```

3. Add the new gallery to the `galleries` array in `src/pages/Gallery.jsx`

### Updating Instagram Content

Update `public/instagram/recent.json` with new posts:

```json
{
  "account": "@hikeands33k",
  "updated": "2024-03-15T10:00:00Z",
  "posts": [
    {
      "id": "unique-id",
      "image": "image-url",
      "caption": "Post caption with hashtags",
      "date": "2024-03-15",
      "likes": 47,
      "comments": 8,
      "permalink": "instagram-post-url",
      "location": "Location name"
    }
  ]
}
```

### WhatsApp Group Link

Update the WhatsApp invite link in:

- `src/pages/Join.jsx` (line 59)
- `src/components/Footer.jsx` (line 21)

Replace `"https://chat.whatsapp.com/your-group-invite-link"` with your actual group invite link.

## 🎨 Customization

### Colors

The site uses custom hiking-themed colors defined in `tailwind.config.js`:

- **Nature Green**: Primary hiking theme colors
- **Trail Brown**: Secondary earthy tones

### Fonts

Uses Inter font family loaded from Google Fonts in `index.html`.

### Icons

Uses Lucide React icons throughout the site.

## 🌐 Deployment

### Static Hosting (Recommended)

This site works perfectly with static hosting services:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder after building
- **GitHub Pages**: Use GitHub Actions for automated deployment

### Build Process

```bash
npm run build
```

This creates a `dist` folder ready for deployment.

## 📱 Instagram Integration Options

### Option 1: JSON Feed (Current)

- Manual updates via JSON file
- Full control over content display
- No API dependencies

### Option 2: oEmbed Integration

- Add specific Instagram post IDs to embed
- Automatic Instagram styling
- Example in `src/pages/Instagram.jsx`

### Option 3: Instagram API (Advanced)

- Create a serverless function to fetch posts
- Automatic updates
- Requires Instagram developer account

## 🛠 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Dependencies

- **React 18** - UI framework
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library
- **Vite** - Build tool

## 📧 Contact Information

Update contact information in:

- `src/components/Footer.jsx`
- `src/pages/Join.jsx`

Current placeholders:

- Email: `hello@hikeands33k.com`
- Phone: `(123) 456-7890`
- Instagram: `@hikeands33k`

## 🎯 Upcoming Hikes Management

### Regular Maintenance

1. **Weekly Updates**: Update attendance numbers and add new hikes
2. **Remove Past Hikes**: Delete completed hikes from the JSON file
3. **Weather Alerts**: Add `weatherAlert: true` and `weatherNote` for conditions
4. **RSVP Tracking**: Update `attendees` count as people join

### Special Features

- **"This Week" Badge**: Automatically highlights hikes happening within 7 days
- **Difficulty Color Coding**: Visual difficulty indicators
- **RSVP Progress Bars**: Show attendance vs. capacity
- **What to Bring Lists**: Detailed packing guidance
- **Trail Conditions**: Current trail status updates

## 🎯 Future Enhancements

- **Event Calendar**: Add upcoming hikes calendar view
- **Member Profiles**: Showcase community members
- **Trail Database**: Detailed trail information and reviews
- **Real-time Weather**: Weather integration for hiking conditions
- **Blog Section**: Hiking tips and trip reports
- **RSVP System**: Direct RSVP without WhatsApp

## 📄 License

This project is open source and available under the MIT License.

---

**Happy Hiking! 🥾⛰️**
