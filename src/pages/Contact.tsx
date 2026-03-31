import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const Contact = () => {
  useScrollAnimation();

  return (
    <div>
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero.jpeg" alt="Contact" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">Contact Us</h1>
          <div className="gold-divider" />
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-on-scroll">
              <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">Get in Touch</p>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">We'd Love to Hear From You</h2>
              <div className="gold-divider !mx-0 mb-8" />

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a href="tel:+91987471747" className="text-muted-foreground hover:text-accent transition-colors">98 7471 7471</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      Opp: NVR Theaters<br />
                      NH 16<br />
                      Annavaram<br />
                      Kakinada (Dist)<br />
                      533406
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Check-in / Check-out</h3>
                    <p className="text-muted-foreground">Check-in: 12:00 PM | Check-out: 11:00 AM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:info@royalgrand.in" className="text-muted-foreground hover:text-accent transition-colors">info@royalgrand.in</a>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/9170139 72383?text=Hello%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Royal%20Grand."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 mt-8 rounded-md bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Google Maps */}
            <div className="animate-on-scroll">
              <div className="rounded-lg overflow-hidden shadow-lg h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3814.7!2d82.4098!3d17.2832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDE2JzU5LjUiTiA4MsKwMjQnMzUuMyJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Royal Grand Hotel Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
