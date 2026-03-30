import { Shield, Eye, Award, Heart, CheckCircle } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const About = () => {
  useScrollAnimation();

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero.jpeg" alt="Royal Grand Hotel" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">About Us</h1>
          <div className="gold-divider" />
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-on-scroll text-center">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">Our Story</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Welcome to Royal Grand</h2>
            <div className="gold-divider mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Royal Grand Hotel stands as a beacon of luxury hospitality in Annavaram. Located conveniently opposite NVR Theaters on NH 16, our hotel combines modern amenities with traditional warmth to create an unforgettable stay experience.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're a pilgrim visiting the revered Sri Satyanarayana Swamy Temple, a business traveler, or a family on vacation, Royal Grand offers the perfect sanctuary of comfort and elegance.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="animate-on-scroll">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-8 w-8 text-accent" />
                <h3 className="font-display text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the most sought-after luxury hotel in Annavaram and the East Godavari district, setting new benchmarks in hospitality, comfort, and guest satisfaction.
              </p>
            </div>
            <div className="animate-on-scroll">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="h-8 w-8 text-accent" />
                <h3 className="font-display text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To provide every guest with a warm, memorable, and luxurious experience through impeccable service, modern facilities, and genuine care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-on-scroll">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">Why Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Royal Grand?</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: 'Premium Quality', desc: 'Elegantly designed rooms with premium furnishings and modern amenities for the ultimate comfort.' },
              { icon: Shield, title: 'Safe & Secure', desc: '24/7 security, CCTV surveillance, and trained staff ensure your safety throughout your stay.' },
              { icon: CheckCircle, title: 'Prime Location', desc: 'Located on NH 16, opposite NVR Theaters, with easy access to the Annavaram temple and railway station.' },
            ].map((item) => (
              <div key={item.title} className="animate-on-scroll text-center p-6 rounded-lg bg-secondary hover:shadow-lg transition-shadow">
                <item.icon className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
