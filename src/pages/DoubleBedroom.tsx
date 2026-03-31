// import { Link } from 'react-router-dom';
// import { Snowflake, Wifi, Tv, Car, Clock, ShowerHead, UtensilsCrossed, Phone } from 'lucide-react';
// import useScrollAnimation from '@/hooks/useScrollAnimation';

// const DoubleBedroom = () => {
//   useScrollAnimation();

//   return (
//     <div>
//       <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0">
//           <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80" alt="Double Bedroom" className="w-full h-full object-cover" />
//           <div className="absolute inset-0 bg-primary/60" />
//         </div>
//         <div className="relative z-10 text-center px-4">
//           <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">Double Bedroom</h1>
//           <div className="gold-divider" />
//         </div>
//       </section>

//       <section className="section-padding bg-background">
//         <div className="container mx-auto max-w-6xl">
//           <div className="grid lg:grid-cols-5 gap-12 items-start">
//             <div className="lg:col-span-3 animate-on-scroll">
//               <div className="hover-zoom rounded-lg overflow-hidden shadow-lg mb-6">
//                 <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1000&q=80" alt="Double Bedroom" className="w-full h-80 lg:h-[28rem] object-cover" />
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="hover-zoom rounded-lg overflow-hidden shadow-md">
//                   <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&q=80" alt="Room detail" className="w-full h-40 object-cover" />
//                 </div>
//                 <div className="hover-zoom rounded-lg overflow-hidden shadow-md">
//                   <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&q=80" alt="Room view" className="w-full h-40 object-cover" />
//                 </div>
//               </div>
//             </div>

//             <div className="lg:col-span-2 animate-on-scroll">
//               <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">Spacious & Elegant</p>
//               <h2 className="font-display text-3xl font-bold text-foreground mb-4">Double Bedroom</h2>
//               <div className="gold-divider !mx-0 mb-6" />
//               <p className="text-muted-foreground leading-relaxed mb-6">
//                 Our double bedrooms offer a generous, luxurious space designed for couples and families. With premium king-size bedding, elegant interiors, and a private seating area, these rooms provide the perfect retreat after a day of exploration.
//               </p>

//               <h3 className="font-display text-xl font-semibold text-foreground mb-4">What's Included</h3>
//               <div className="space-y-3 mb-8">
//                 {[
//                   { icon: Snowflake, text: 'Fully air-conditioned rooms with climate control' },
//                   { icon: Wifi, text: 'Complimentary high-speed WiFi throughout the room' },
//                   { icon: Tv, text: 'Large LED TV with premium channels' },
//                   { icon: Car, text: 'Free covered parking space for guests' },
//                   { icon: Clock, text: 'Round-the-clock room service and assistance' },
//                   { icon: ShowerHead, text: 'Hot and cold water supply 24/7' },
//                   { icon: UtensilsCrossed, text: 'In-room dining options available' },
//                   { icon: Phone, text: 'Direct dial telephone and wake-up call service' },
//                 ].map((f) => (
//                   <div key={f.text} className="flex items-start gap-3">
//                     <f.icon className="h-5 w-5 text-accent mt-0.5 shrink-0" />
//                     <span className="text-sm text-muted-foreground">{f.text}</span>
//                   </div>
//                 ))}
//               </div>

//               <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors w-full text-center">
//                 Book Now
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default DoubleBedroom;



import { useState } from 'react';
import { Snowflake, Wifi, Tv, Car, Clock, ShowerHead, UtensilsCrossed, Phone } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import BookingModal from '@/components/BookingModal';

const DoubleBedroom = () => {
  useScrollAnimation();
  const [open, setOpen] = useState(false);

  return (
    <div>
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80" alt="Double Bedroom" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">Double Bedroom</h1>
          <div className="gold-divider" />
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3 animate-on-scroll">
              <div className="hover-zoom rounded-lg overflow-hidden shadow-lg mb-6">
                <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1000&q=80" alt="Double Bedroom" className="w-full h-80 lg:h-[28rem] object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="hover-zoom rounded-lg overflow-hidden shadow-md">
                  <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&q=80" alt="Room detail" className="w-full h-40 object-cover" />
                </div>
                <div className="hover-zoom rounded-lg overflow-hidden shadow-md">
                  <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&q=80" alt="Room view" className="w-full h-40 object-cover" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 animate-on-scroll">
              <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">Spacious & Elegant</p>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Double Bedroom</h2>
              <div className="gold-divider !mx-0 mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our double bedrooms offer a generous, luxurious space designed for couples and families.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-4">What's Included</h3>
              <div className="space-y-3 mb-8">
                {[
                  { icon: Snowflake, text: 'Fully air-conditioned rooms with climate control' },
                  { icon: Wifi, text: 'Complimentary high-speed WiFi' },
                  { icon: Tv, text: 'Large LED TV' },
                  { icon: Car, text: 'Free parking' },
                  { icon: Clock, text: '24/7 room service' },
                  { icon: ShowerHead, text: 'Hot & cold water' },
                  { icon: UtensilsCrossed, text: 'Dining options' },
                  { icon: Phone, text: 'Direct dial phone' },
                ].map((f) => (
                  <div key={f.text} className="flex items-start gap-3">
                    <f.icon className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{f.text}</span>
                  </div>
                ))}
              </div>

              {/* ✅ BUTTON */}
              <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors w-full"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ MODAL */}
      <BookingModal open={open} onOpenChange={setOpen} />
    </div>
  );
};

export default DoubleBedroom;