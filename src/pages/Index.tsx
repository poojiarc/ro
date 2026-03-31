import { Link } from 'react-router-dom';
import { Wifi, Car, Tv, Snowflake, Clock, UtensilsCrossed, Star, ArrowRight } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { useBooking } from '@/contexts/BookingContext';

const Index = () => {
  useScrollAnimation();
  const { openBooking } = useBooking();

  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero.jpeg" alt="Royal Grand Hotel" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in-up">
            Welcome to <span className="text-accent">Royal Grand</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Luxury Stay in Annavaram
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button onClick={openBooking} className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors">
              Book Now
            </button>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-md border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center max-w-3xl">
          <div className="animate-on-scroll">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">About Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">A Legacy of Luxury</h2>
            <div className="gold-divider mb-6" />
            <p className="text-muted-foreground leading-relaxed">
              Nestled in the heart of Annavaram, Royal Grand Hotel offers an unparalleled blend of elegance, comfort, and hospitality. Whether you're here for a spiritual journey to the famous Satyanarayana Swamy temple or a peaceful retreat, our hotel promises a truly memorable experience.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 mt-6 text-accent font-semibold hover:underline">
              Learn More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Accommodation Preview */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">Rooms</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our Accommodation</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Single Bedroom', desc: 'Cozy and comfortable, perfect for solo travelers.', link: '/accommodation/single', img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80' },
              { title: 'Double Bedroom', desc: 'Spacious rooms designed for couples and families.', link: '/accommodation/double', img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80' },
            ].map((room) => (
              <Link key={room.title} to={room.link} className="group animate-on-scroll">
                <div className="rounded-lg overflow-hidden bg-card shadow-lg hover:shadow-xl transition-shadow">
                  <div className="hover-zoom h-60">
                    <img src={room.img} alt={room.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">{room.title}</h3>
                    <p className="text-muted-foreground text-sm">{room.desc}</p>
                    <span className="inline-flex items-center gap-1 mt-3 text-accent font-semibold text-sm">
                      View Details <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">Facilities</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">World-Class Amenities</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Snowflake, label: 'AC Rooms' },
              { icon: Wifi, label: 'Free WiFi' },
              { icon: Tv, label: 'LED TV' },
              { icon: Car, label: 'Parking' },
              { icon: Clock, label: '24/7 Service' },
              { icon: UtensilsCrossed, label: 'Restaurant' },
            ].map((f) => (
              <div key={f.label} className="animate-on-scroll flex flex-col items-center text-center p-4 rounded-lg bg-secondary hover:shadow-md transition-shadow">
                <f.icon className="h-8 w-8 text-accent mb-3" />
                <p className="text-sm font-medium text-foreground">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-primary text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">Testimonials</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">What Our Guests Say</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Rajesh Kumar', text: 'Excellent service and beautiful rooms. The staff was incredibly welcoming. Highly recommend!' },
              { name: 'Priya Sharma', text: 'A perfect place to stay while visiting the Annavaram temple. Clean, comfortable, and luxurious.' },
              { name: 'Anil Reddy', text: 'The best hotel in Annavaram! Great food, spacious rooms, and very affordable prices.' },
            ].map((t) => (
              <div key={t.name} className="animate-on-scroll glass-card p-6 rounded-lg">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-white/80 text-sm mb-4 italic">"{t.text}"</p>
                <p className="font-semibold text-accent">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero.jpeg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative z-10 text-center px-4 animate-on-scroll">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Ready for a Luxury Experience?</h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">Book your stay at Royal Grand and enjoy the finest hospitality in Annavaram.</p>
          <button onClick={openBooking} className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors">
            Book Your Stay
          </button>
        </div>
      </section>

      </div>
    </div>
  );
};

export default Index;
