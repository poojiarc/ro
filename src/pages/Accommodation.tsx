import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const rooms = [
  {
    title: 'Single Bedroom',
    desc: 'A cozy and well-appointed room ideal for solo travelers, featuring all modern amenities for a comfortable stay.',
    img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
    link: '/accommodation/single',
  },
  {
    title: 'Double Bedroom',
    desc: 'Spacious and elegantly designed rooms perfect for couples and families, offering generous space and premium comfort.',
    img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80',
    link: '/accommodation/double',
  },
];

const Accommodation = () => {
  useScrollAnimation();

  return (
    <div>
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero.jpeg" alt="Accommodation" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">Accommodation</h1>
          <div className="gold-divider" />
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-on-scroll">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">Our Rooms</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Choose Your Perfect Stay</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {rooms.map((room) => (
              <Link key={room.title} to={room.link} className="group animate-on-scroll">
                <div className="rounded-lg overflow-hidden bg-card shadow-lg hover:shadow-xl transition-shadow">
                  <div className="hover-zoom h-72">
                    <img src={room.img} alt={room.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">{room.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{room.desc}</p>
                    <span className="inline-flex items-center gap-2 text-accent font-semibold">
                      View Details <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accommodation;
