// import { Snowflake, Wifi, Tv, Car, Clock, ShowerHead } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import useScrollAnimation from '@/hooks/useScrollAnimation';

// const facilities = [
//   { icon: Snowflake, label: 'AC Room' },
//   { icon: Wifi, label: 'Free WiFi' },
//   { icon: Tv, label: 'LED TV' },
//   { icon: Car, label: 'Parking' },
//   { icon: Clock, label: '24/7 Service' },
//   { icon: ShowerHead, label: 'Hot Water' },
// ];

// const SingleBedroom = () => {
//   useScrollAnimation();

//   return (
//     <div>
//       <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0">
//           <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80" alt="Single Bedroom" className="w-full h-full object-cover" />
//           <div className="absolute inset-0 bg-primary/60" />
//         </div>
//         <div className="relative z-10 text-center px-4">
//           <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">Single Bedroom</h1>
//           <div className="gold-divider" />
//         </div>
//       </section>

//       <section className="section-padding bg-background">
//         <div className="container mx-auto max-w-5xl">
//           <div className="grid lg:grid-cols-2 gap-12 items-start">
//             <div className="animate-on-scroll hover-zoom rounded-lg overflow-hidden shadow-lg">
//               <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80" alt="Single Bedroom" className="w-full h-80 lg:h-96 object-cover" />
//             </div>
//             <div className="animate-on-scroll">
//               <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">Cozy & Comfortable</p>
//               <h2 className="font-display text-3xl font-bold text-foreground mb-4">Single Bedroom</h2>
//               <div className="gold-divider !mx-0 mb-6" />
//               <p className="text-muted-foreground leading-relaxed mb-6">
//                 Our single bedrooms are thoughtfully designed to provide the perfect balance of comfort and functionality. Ideal for solo travelers and business guests, each room features premium bedding, modern furnishings, and a warm ambiance that makes you feel right at home.
//               </p>

//               <h3 className="font-display text-xl font-semibold text-foreground mb-4">Room Facilities</h3>
//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
//                 {facilities.map((f) => (
//                   <div key={f.label} className="flex items-center gap-2 p-3 rounded-md bg-secondary">
//                     <f.icon className="h-5 w-5 text-accent" />
//                     <span className="text-sm font-medium text-foreground">{f.label}</span>
//                   </div>
//                 ))}
//               </div>

//               <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors">
//                 Book Now
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SingleBedroom;
import { useState } from 'react';
import { Snowflake, Wifi, Tv, Car, Clock, ShowerHead } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import BookingModal from '@/components/BookingModal';

const facilities = [
  { icon: Snowflake, label: 'AC Room' },
  { icon: Wifi, label: 'Free WiFi' },
  { icon: Tv, label: 'LED TV' },
  { icon: Car, label: 'Parking' },
  { icon: Clock, label: '24/7 Service' },
  { icon: ShowerHead, label: 'Hot Water' },
];

const SingleBedroom = () => {
  useScrollAnimation();
  const [open, setOpen] = useState(false);

  return (
    <div>
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80" alt="Single Bedroom" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">Single Bedroom</h1>
          <div className="gold-divider" />
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-on-scroll hover-zoom rounded-lg overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80" alt="Single Bedroom" className="w-full h-80 lg:h-96 object-cover" />
            </div>

            <div className="animate-on-scroll">
              <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">Cozy & Comfortable</p>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Single Bedroom</h2>
              <div className="gold-divider !mx-0 mb-6" />

              <p className="text-muted-foreground leading-relaxed mb-6">
                Perfect for solo travelers with premium comfort and modern design.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-4">Room Facilities</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {facilities.map((f) => (
                  <div key={f.label} className="flex items-center gap-2 p-3 rounded-md bg-secondary">
                    <f.icon className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium text-foreground">{f.label}</span>
                  </div>
                ))}
              </div>

              {/* ✅ BUTTON */}
              <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
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

export default SingleBedroom;