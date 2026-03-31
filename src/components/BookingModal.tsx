import { useState } from 'react';
import { format } from 'date-fns';
import { CalendarIcon, User, Phone, Mail, ArrowRight, ArrowLeft, X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingModal = ({ open, onOpenChange }: BookingModalProps) => {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState<'forward' | 'back'>('forward');
  const [animating, setAnimating] = useState(false);
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [shakeField, setShakeField] = useState('');

  const triggerShake = (field: string) => {
    setShakeField(field);
    setTimeout(() => setShakeField(''), 500);
  };

  const validateStep1 = () => {
    const e: Record<string, string> = {};
    if (!checkIn) { e.checkIn = 'Select check-in date'; triggerShake('checkIn'); }
    if (!checkOut) { e.checkOut = 'Select check-out date'; triggerShake('checkOut'); }
    if (checkIn && checkOut && checkOut <= checkIn) {
      e.checkOut = 'Check-out must be after check-in';
      triggerShake('checkOut');
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep2 = () => {
    const e: Record<string, string> = {};
    if (!name.trim()) { e.name = 'Enter your name'; triggerShake('name'); }
    if (!mobile.trim() || mobile.trim().length < 10) { e.mobile = 'Enter valid mobile number'; triggerShake('mobile'); }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) { e.email = 'Enter valid email'; triggerShake('email'); }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const goToStep = (target: number) => {
    if (animating) return;
    setDirection(target > step ? 'forward' : 'back');
    setAnimating(true);
    setTimeout(() => {
      setStep(target);
      setAnimating(false);
    }, 10);
  };

  const handleNext = () => {
    if (validateStep1()) goToStep(2);
  };

  const handleBack = () => {
    setErrors({});
    goToStep(1);
  };

  const handleWhatsApp = () => {
    if (!validateStep2()) return;
    const message = `Hello Royal Grand,

I would like to book a room.

Check-in Date: ${checkIn ? format(checkIn, 'PPP') : ''}
Check-out Date: ${checkOut ? format(checkOut, 'PPP') : ''}

Name: ${name.trim()}
Mobile: ${mobile.trim()}
Email: ${email.trim()}

Please confirm availability.`;

    window.open(`https://wa.me/9170139 72383?text=${encodeURIComponent(message)}`, '_blank');
    onOpenChange(false);
    resetForm();
  };

  const resetForm = () => {
    setStep(1);
    setCheckIn(undefined);
    setCheckOut(undefined);
    setName('');
    setMobile('');
    setEmail('');
    setErrors({});
    setDirection('forward');
  };

  const shakeClass = (field: string) =>
    shakeField === field ? 'animate-[shake_0.4s_ease-in-out]' : '';

  const enterAnim = direction === 'forward'
    ? 'animate-[slideInRight_0.3s_ease-in-out_forwards]'
    : 'animate-[slideInLeft_0.3s_ease-in-out_forwards]';

  return (
    <Dialog open={open} onOpenChange={(o) => { onOpenChange(o); if (!o) resetForm(); }}>
      <DialogContent className="sm:max-w-md max-w-[92vw] p-0 border-0 overflow-hidden bg-transparent shadow-none [&>button]:hidden">
        <div className="relative bg-primary/95 backdrop-blur-xl border border-accent/20 rounded-2xl shadow-2xl shadow-accent/10 overflow-hidden">
          {/* Close button - always on top */}
          <button
            onClick={() => { onOpenChange(false); resetForm(); }}
            className="absolute right-4 top-4 z-50 h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 hover:scale-110 transition-all duration-200"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Header */}
          <div className="px-6 pt-6 pb-4 text-center border-b border-white/10">
            <h2 className="font-display text-2xl font-bold text-white">Book Your Stay</h2>
            <p className="text-white/50 text-sm mt-1">Royal Grand, Annavaram</p>
            <div className="flex justify-center gap-2 mt-4">
              {[1, 2].map((s) => (
                <div
                  key={s}
                  className={cn(
                    'h-1.5 rounded-full transition-all duration-300',
                    s === step ? 'w-8 bg-accent' : 'w-4 bg-white/20'
                  )}
                />
              ))}
            </div>
          </div>

          {/* Body - fixed height, overflow hidden, one step at a time */}
          <div className="relative overflow-hidden" style={{ minHeight: 340 }}>
            <div className={cn('px-6 py-6', enterAnim)} key={step}>
              {step === 1 && (
                <div className="space-y-4">
                  <div className={shakeClass('checkIn')}>
                    <Label className="text-white/70 text-xs uppercase tracking-wider mb-1.5 block">Check-in Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            'w-full justify-start text-left bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white',
                            !checkIn && 'text-white/40'
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4 text-accent" />
                          {checkIn ? format(checkIn, 'PPP') : 'Select date'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={checkIn}
                          onSelect={setCheckIn}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                    {errors.checkIn && <p className="text-red-400 text-xs mt-1">{errors.checkIn}</p>}
                  </div>

                  <div className={shakeClass('checkOut')}>
                    <Label className="text-white/70 text-xs uppercase tracking-wider mb-1.5 block">Check-out Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            'w-full justify-start text-left bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white',
                            !checkOut && 'text-white/40'
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4 text-accent" />
                          {checkOut ? format(checkOut, 'PPP') : 'Select date'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={checkOut}
                          onSelect={setCheckOut}
                          disabled={(date) => date < (checkIn || new Date())}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                    {errors.checkOut && <p className="text-red-400 text-xs mt-1">{errors.checkOut}</p>}
                  </div>

                  <Button
                    onClick={handleNext}
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold mt-2 hover:scale-[1.02] transition-all duration-200 hover:shadow-lg hover:shadow-accent/30"
                  >
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div className={shakeClass('name')}>
                    <Label className="text-white/70 text-xs uppercase tracking-wider mb-1.5 block">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-accent" />
                      <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-accent"
                        maxLength={100}
                      />
                    </div>
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div className={shakeClass('mobile')}>
                    <Label className="text-white/70 text-xs uppercase tracking-wider mb-1.5 block">Mobile Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-accent" />
                      <Input
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value.replace(/[^0-9+\s-]/g, ''))}
                        placeholder="+91 98765 43210"
                        className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-accent"
                        maxLength={15}
                      />
                    </div>
                    {errors.mobile && <p className="text-red-400 text-xs mt-1">{errors.mobile}</p>}
                  </div>

                  <div className={shakeClass('email')}>
                    <Label className="text-white/70 text-xs uppercase tracking-wider mb-1.5 block">Email ID</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-accent" />
                      <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-accent"
                        maxLength={255}
                      />
                    </div>
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div className="flex gap-3 mt-2">
                   <Button
  onClick={handleBack}
  className="flex-1 bg-transparent border border-white/20 text-white hover:bg-white/10 hover:border-accent hover:text-accent transition-all duration-200"
>
  <ArrowLeft className="mr-2 h-4 w-4" /> Back
</Button>
                    <Button
                      onClick={handleWhatsApp}
                      className="flex-1 bg-green-600 hover:bg-green-500 text-white font-semibold hover:scale-[1.02] transition-all duration-200 hover:shadow-lg hover:shadow-green-500/30"
                    >
                      Book via WhatsApp
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
