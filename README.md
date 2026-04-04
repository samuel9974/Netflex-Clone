# Netflix Clone - Streaming Platform Application

## 📋 Overview

Netflix Clone is a modern, responsive web application that replicates the core functionality and user interface of Netflix. This project demonstrates proficiency in front-end development, API integration, and modern web technologies by implementing a fully functional movie and television show streaming discovery platform.

The application fetches real-time data from The Movie Database (TMDB) API and presents it in an intuitive, Netflix-like interface with features such as dynamic content filtering, movie/show categorization, and embedded trailer playback.

---

## ✨ Key Features

- **Dynamic Banner Section**: Displays a randomly featured Netflix Original with a responsive hero image
- **Multiple Content Categories**: Browse movies and shows across various genres including:
  - Netflix Originals
  - Trending Now
  - Top Rated
  - Action, Comedy, Horror, Romance Movies
  - TV Shows
  - Documentaries
- **Interactive Movie Cards**: Hover effects and smooth scaling animations for enhanced user experience
- **Trailer Integration**: Watch trailers directly in the application using the YouTube integration
- **Responsive Design**: Fully responsive layout that adapts seamlessly to different screen sizes
- **Error Handling**: Graceful handling of missing images and API errors
- **Horizontal Scrolling**: Smooth horizontal scrolling for content rows with hidden scrollbars

---

## 🛠️ Tech Stack

### Frontend

- **React 18**: Modern React with Hooks (useState, useEffect)
- **Vite**: Lightning-fast build tool and development server
- **CSS3**: Custom styling with flexbox and animations
- **Axios**: Promise-based HTTP client for API requests

### External APIs & Libraries

- **TMDB API (The Movie Database)**: Real-time movie and show data
- **Movie-Trailer NPM Package**: Automatic trailer URL fetching
- **React-YouTube**: Embedded YouTube player for trailer playback

### Development Tools

- **ESLint**: Code quality and consistency
- **Node.js**: Runtime environment

---

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- TMDB API Key (obtain from [themoviedb.org](https://www.themoviedb.org/))

### Setup Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/Netflex-Clone.git
   cd Netflex-Clone
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env.local` file in the root directory:

   ```
   VITE_API_KEY=your_tmdb_api_key_here
   ```

4. **Start Development Server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

5. **Build for Production**
   ```bash
   npm run build
   ```

---

## 📁 Project Structure

```
Netflex-Clone/
├── src/
│   ├── components/
│   │   ├── Banner/
│   │   │   ├── Banner.jsx          # Hero section component
│   │   │   └── banner.css          # Banner styling
│   │   ├── Header/
│   │   │   ├── Header.jsx          # Navigation component
│   │   │   └── header.css          # Header styling
│   │   ├── Rows/
│   │   │   ├── Row/
│   │   │   │   ├── Row.jsx         # Individual row component
│   │   │   │   └── row.css         # Row styling
│   │   │   └── RowsList/
│   │   │       ├── RowList.jsx     # Row container component
│   │   │       └── RowList.css     # RowList styling
│   │   └── Footer/
│   │       ├── Footer.jsx          # Footer component
│   │       └── footer.css          # Footer styling
│   ├── pages/
│   │   └── Home/
│   │       └── Home.jsx            # Main home page
│   ├── utils/
│   │   ├── axios.js                # Axios instance configuration
│   │   └── requests.js             # TMDB API endpoints
│   ├── assets/                     # Images and static files
│   ├── App.jsx                     # Root component
│   ├── App.css                     # Global styling
│   └── main.jsx                    # React entry point
├── public/                         # Static assets
├── index.html                      # HTML template
├── package.json                    # Dependencies and scripts
├── vite.config.js                  # Vite configuration
└── README.md                       # Project documentation
```

---

## 🎯 Component Architecture

### Banner Component

- Fetches Netflix Originals from TMDB API
- Displays a random selection on each load
- Shows movie title, description, and action buttons
- Implements gradient fade effect

### Row Component

- Reusable component for displaying movie/show collections
- Handles API calls based on provided endpoints
- Implements hover animations and scaling effects
- Integrates YouTube trailer player
- Features error handling for missing images

### RowList Component

- Orchestrates all content rows
- Manages different movie categories
- Responsive layout for all genre categories

### Header Component

- Navigation bar with logo and branding
- Sticky positioning for persistent navigation

### Footer Component

- Copyright and legal information
- Additional links and resources

---

## 🔌 API Integration

### TMDB API Endpoints Used

- `/discover/tv?with_networks=213` - Netflix Originals
- `/trending/tv/week` - Trending Shows
- `/movie/top_rated` - Top Rated Movies
- `/discover/movie?with_genres={id}` - Movies by Genre
- `/discover/tv` - TV Shows

### Environment Variables

```
VITE_API_KEY=<Your TMDB API Key>
```

---

## 🎨 Styling Approach

- **Responsive Design**: Mobile-first approach with flexible layouts
- **CSS Flexbox**: Horizontal scrolling rows and responsive containers
- **Hover Effects**: Smooth transitions and scaling animations
- **Dark Theme**: Netflix-inspired dark color scheme
- **Gradient Effects**: Fade effects for visual hierarchy

---

## ⚡ Performance Optimizations

- Lazy image loading with error handling
- Efficient API request management
- Optimized CSS animations using transform properties
- Vite's fast build process and HMR (Hot Module Replacement)


## 📝 Code Quality

All components include:

- ✅ Comprehensive JSDoc comments
- ✅ Clear variable naming conventions
- ✅ Proper error handling
- ✅ ESLint compliance
- ✅ Modular component structure

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Create a feature branch (`git checkout -b feature/YourFeatureName`)
2. Commit your changes (`git commit -m 'Add some feature'`)
3. Push to the branch (`git push origin feature/YourFeatureName`)
4. Open a Pull Request

---

## 📄 License

This project is created for educational purposes as part of Evangadi Academy's Phase 4 coursework.

**Note**: Netflix is a registered trademark. This is a clone project for learning purposes only and is not affiliated with Netflix.

---

## 👨‍💻 Author

**Samuel**  

---

## 📞 Support & Contact

For questions or issues, please open an issue in the repository or contact the development team.

---

**Last Updated**: January 2026  
**Project Status**: In Development
