import { useState, useEffect } from 'react';

const Countdown = ({ targetDate }: { targetDate: Date }) => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const formatted = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    setTimeLeft(formatted);

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft('EXPIRED');
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <span>{timeLeft}</span>
  );
};

export default Countdown;