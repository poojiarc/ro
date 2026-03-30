import { Link } from 'react-router-dom';
import { Heart, Phone, MapPin, Mail, Home, Info, BedDouble, Contact } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white/80">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-white mb-3">
              Royal <span className="text-accent">Grand</span>
            </h3>
            <p className="text-sm leading-relaxed">
              Experience luxury and comfort at Royal Grand Hotel, your premium destination in Annavaram.
            </p>
          </div>

          {/* Quick Links */}
          {/* Quick Links */}
<div>
  <h4 className="font-display text-lg font-semibold text-white mb-3">Quick Links</h4>
  <div className="space-y-3 text-sm">

    <Link to="/" className="flex items-center gap-2 hover:text-accent transition-colors group">
      <Home className="h-4 w-4 text-accent group-hover:scale-110 transition-transform" />
      Home
    </Link>

    <Link to="/about" className="flex items-center gap-2 hover:text-accent transition-colors group">
      <Info className="h-4 w-4 text-accent group-hover:scale-110 transition-transform" />
      About
    </Link>

    <Link to="/accommodation" className="flex items-center gap-2 hover:text-accent transition-colors group">
      <BedDouble className="h-4 w-4 text-accent group-hover:scale-110 transition-transform" />
      Accommodation
    </Link>

    <Link to="/contact" className="flex items-center gap-2 hover:text-accent transition-colors group">
      <Contact className="h-4 w-4 text-accent group-hover:scale-110 transition-transform" />
      Contact
    </Link>

  </div>
</div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-white mb-3">Contact Info</h4>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> 98 7471 7471</p>
              <p className="flex items-start gap-2"><MapPin className="h-4 w-4 text-accent mt-0.5" /> Opp: NVR Theaters, NH 16, Annavaram</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> info@royalgrand.in</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm space-y-2">
          <p>&copy; {new Date().getFullYear()} Royal Grand Hotel. All rights reserved.</p>
          <div className="flex justify-center items-center gap-1">
            Made with <Heart className="inline h-4 w-4 text-red-500 mx-1" /> by
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-orange-400 hover:underline"
            >
              <img
                src="https://www.staffarc.in/images/Staffarc-logo.png"
                alt="StaffArc logo"
                className="h-5 w-5 object-contain"
              />
              StaffArc
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
