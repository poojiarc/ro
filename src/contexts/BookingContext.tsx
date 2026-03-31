import { createContext, useContext, useState, ReactNode } from 'react';

interface BookingContextType {
  bookingOpen: boolean;
  openBooking: () => void;
  closeBooking: () => void;
  setBookingOpen: (open: boolean) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [bookingOpen, setBookingOpen] = useState(false);
  return (
    <BookingContext.Provider value={{
      bookingOpen,
      openBooking: () => setBookingOpen(true),
      closeBooking: () => setBookingOpen(false),
      setBookingOpen,
    }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used within BookingProvider');
  return ctx;
};
