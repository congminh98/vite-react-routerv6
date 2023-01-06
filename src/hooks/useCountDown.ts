import { useMemo, useState } from "react";

const useCountDown = () => {
  const [timeCountDown, setTimeCountDown] = useState<any>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  useMemo(() => {
    // Set the date we're counting down to
    const countDownDate = new Date("Jan 22, 2023 00:00:00").getTime();
    // Update the count down every 1 second
    const x = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();
      const distance = countDownDate - now;
      if (distance > 0) {
        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // If the count down is finished, write some text
        setTimeCountDown({
          days,
          hours,
          minutes,
          seconds
        });
      }
    }, 1000);
    return () => {
      clearInterval(x);
    };
  }, []);
  return {
    days: timeCountDown?.days > 9 ? timeCountDown?.days : "0" + timeCountDown?.days,
    hours: timeCountDown?.hours > 9 ? timeCountDown?.hours : "0" + timeCountDown?.hours,
    minutes: timeCountDown?.minutes > 9 ? timeCountDown?.minutes : "0" + timeCountDown?.minutes,
    seconds: timeCountDown?.seconds > 9 ? timeCountDown?.seconds : "0" + timeCountDown?.seconds,
  };
};

export default useCountDown;
