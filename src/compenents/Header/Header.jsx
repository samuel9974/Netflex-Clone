import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/NetflixLogo.png";
import styles from "./Header.module.css";
import { Search, Bell, User, ChevronDown } from "lucide-react";

/**
 * Renders the top navigation: branding, route links, expandable search, notifications, and profile menu.
 * Scroll position toggles a darker header style.
 * Takes no parameters.
 * Assumes a browser environment with `window`, React hooks, and a react-router parent context.
 * @returns {import("react").ReactElement} - The header markup; not null.
 */
function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    /**
     * Syncs header appearance with vertical scroll (past 50px applies the scrolled style).
     * Takes no parameters.
     * Assumes `window` exists and `window.scrollY` is a finite number during scroll events.
     * @returns {void} - Updates React state only. Does not throw; no error messages. Listener cleanup runs on unmount.
     */
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Shows or hides the inline search field.
   * Takes no parameters.
   * Assumes `setIsSearchOpen` toggles from the current boolean state.
   * @returns {void} - Updates React state only. Does not throw; no error messages.
   */
  const handleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  /**
   * Opens or closes the profile dropdown menu.
   * Takes no parameters.
   * Assumes `setIsProfileOpen` toggles from the current boolean state.
   * @returns {void} - Updates React state only. Does not throw; no error messages.
   */
  const handleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <img className={styles.logo} src={logo} alt="logo" />

        <nav className={styles.nav}>
          <Link className={styles.navLink} to="/">
            Home
          </Link>
          <Link className={styles.navLink} to="/tv-shows">
            Tv Shows
          </Link>
          <Link className={styles.navLink} to="/movies">
            Movies
          </Link>
          <Link className={styles.navLink} to="/new-popular">
            New & Popular
          </Link>
          <Link className={styles.navLink} to="/my-list">
            My List
          </Link>
          <Link className={styles.navLink} to="/browse-language">
            Browse by Language
          </Link>
        </nav>

        {/* right side section */}
        <div className={styles.rightSection}>
          {/* search button */}
          <div className={styles.searchContainer}>
            <button className={styles.searchButton} onClick={handleSearch}>
              <Search size={20} />
            </button>
            {/* if search is open, show the search input */}
            {isSearchOpen && (
              <input
                type="text"
                className={styles.searchInput}
                placeholder="movies titles"
              />
            )}
          </div>

          {/* notification button */}
          <button className={styles.iconButton} type="button">
            <Bell size={20} />
            <span className={styles.notificationBadge}>4</span>
          </button>

          {/* profile button */}
          <div className={styles.profileContainer}>
            <button
              onClick={handleProfile}
              className={styles.profileButton}
              type="button"
            >
              <div className={styles.profileAvatar}>
                <User size={20} />
              </div>
              <ChevronDown size={20} />
            </button>

            {/* if profile is open, show the profile dropdown */}
            {isProfileOpen && (
              <div className={styles.profileMenu}>
                <Link className={styles.profileMenuItem}> Account </Link>
                <Link className={styles.profileMenuItem}> help center </Link>
                <hr className={styles.profileMenuDivider} />
                <Link className={styles.profileMenuItem}> Sign out </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
