import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Info, BedDouble, Phone, Menu, X, ChevronDown } from 'lucide-react';
import { useBooking } from '@/contexts/BookingContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const navBg = scrolled || !isHome || mobileOpen
    ? 'bg-primary/95 backdrop-blur-md shadow-lg'
    : 'bg-transparent';

  const linkClass = "flex items-center gap-1.5 text-sm font-medium text-white/90 hover:text-accent transition-colors";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${navBg}`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <Link to="/" className="font-display text-xl md:text-2xl font-bold text-white tracking-wide">
          Royal <span className="text-accent">Grand</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={linkClass}><Home className="h-4 w-4" /> Home</Link>
          <Link to="/about" className={linkClass}><Info className="h-4 w-4" /> About</Link>

          <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <Link to="/accommodation" className={`${linkClass}`}>
              <BedDouble className="h-4 w-4" /> Accommodation <ChevronDown className="h-3 w-3" />
            </Link>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 rounded-md bg-primary/95 backdrop-blur-md shadow-xl border border-white/10 py-2">
                <Link to="/accommodation/single" className="block px-4 py-2 text-sm text-white/90 hover:text-accent hover:bg-white/5 transition-colors">Single Bedroom</Link>
                <Link to="/accommodation/double" className="block px-4 py-2 text-sm text-white/90 hover:text-accent hover:bg-white/5 transition-colors">Double Bedroom</Link>
              </div>
            )}
          </div>

          <Link to="/contact" className={linkClass}><Phone className="h-4 w-4" /> Contact</Link>
          <button onClick={() => openBooking()} className="ml-2 px-5 py-2 rounded-md bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent/90 transition-colors">Book Now</button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white" aria-label="Toggle menu">
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-md border-t border-white/10 px-4 pb-4 space-y-3">
          <Link to="/" className={linkClass + " py-2"}><Home className="h-4 w-4" /> Home</Link>
          <Link to="/about" className={linkClass + " py-2"}><Info className="h-4 w-4" /> About</Link>
          <Link to="/accommodation" className={linkClass + " py-2"}><BedDouble className="h-4 w-4" /> Accommodation</Link>
          <Link to="/accommodation/single" className="block pl-8 text-sm text-white/70 hover:text-accent transition-colors py-1">Single Bedroom</Link>
          <Link to="/accommodation/double" className="block pl-8 text-sm text-white/70 hover:text-accent transition-colors py-1">Double Bedroom</Link>
          <Link to="/contact" className={linkClass + " py-2"}><Phone className="h-4 w-4" /> Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
