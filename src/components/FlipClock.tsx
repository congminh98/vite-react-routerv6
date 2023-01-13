import { useEffect, useState } from 'react';

// function component
export const AnimatedCard = ({ animation, className, digit }: any) => {
  return (
    <div className={`flex justify-center absolute left-0 w-full h-1/2 overflow-hidden ${className}`}>
      <span className={`text-[5rem] text-colorPink ${animation == "fold" ? "translate-y-1/2" : "-translate-y-1/2"}`}>{digit}</span>
    </div>
  );
};

// function component
export const StaticCard = ({ position, className, digit }: any) => {
  return (
    <div className={className}>
      <span className={`text-[5rem] text-colorPink ${position == "upperCard" ? "translate-y-1/2" : "-translate-y-1/2"}`}>{digit}</span>
    </div>
  );
};

// function component
export const FlipUnitContainer = ({ digit, shuffle, unit }: any) => {
  // assign digit values
  let currentDigit = digit;
  let previousDigit: string | number = digit - 1;

  // to prevent a negative value
  if (unit !== 'hours') {
    previousDigit = previousDigit === -1
      ? 59
      : previousDigit;
  } else {
    previousDigit = previousDigit === -1
      ? 23
      : previousDigit;
  }

  // add zero
  if (currentDigit < 10) {
    currentDigit = `0${currentDigit}`;
  }
  if (previousDigit < 10) {
    previousDigit = `0${previousDigit}`;
  }

  // shuffle digits
  const digit1 = shuffle
    ? previousDigit
    : currentDigit;
  const digit2 = !shuffle
    ? previousDigit
    : currentDigit;

  // shuffle animations
  const animation1 = shuffle
    ? 'fold'
    : 'unfold';
  const animation2 = !shuffle
    ? 'fold'
    : 'unfold';

  return (
    <div className="relative block w-[140px] h-[120px] perspective-origin bg-white rounded shadow-md">
      <StaticCard
        position={'upperCard'}
        className="relative flex items-end justify-center w-full h-1/2 overflow-hidden border-b-[1px] border-red-500"
        digit={currentDigit}
      />
      <StaticCard
        position={'lowerCard'}
        className="relative flex items-start justify-center w-full h-1/2 overflow-hidden border-t-[1px] border-red-500"
        digit={previousDigit}
      />
      <AnimatedCard
        digit={digit1}
        animation={animation1}
        className={`${animation1 == "fold" ? "top-0 items-end origin-[50%_100%] rotate-x-0 rounded-t border-b-[1px] border-red-500 animate-fold" : "top-1/2 items-start origin-[50%_0%] rotate-x-180 rounded-b border-t-[1px] border-red-500 animate-unfold"} bg-white preserve-3d`}
      />
      <AnimatedCard
        digit={digit2}
        animation={animation2}
        className={`${animation1 !== "fold" ? "top-0 items-end origin-[50%_100%] rotate-x-0 rounded-t border-b-[1px] border-red-500 animate-fold" : "top-1/2 items-start origin-[50%_0%] rotate-x-180 rounded-b border-t-[1px] border-red-500 animate-unfold"} bg-white preserve-3d`}
      />
    </div>
  );
};

// class component
export default function FlipClock () {
  const [stateInitial, setStateInitial] = useState({
    days: 0,
    daysShuffle: true,
    hours: 0,
    hoursShuffle: true,
    minutes: 0,
    minutesShuffle: true,
    seconds: 0,
    secondsShuffle: true
  });
  useEffect(() => {
    const timerID = setInterval(() => {
      // get new date
      const time = new Date();
      // set time units
      const days = time.getDate();
      const hours = time.getHours();
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();
      // on hour chanage, update hours and shuffle state
      if (days !== stateInitial?.days) {
        const daysShuffle = !stateInitial?.daysShuffle;
        setStateInitial({
          ...stateInitial,
          days,
          daysShuffle
        });
      }
      if (hours !== stateInitial?.hours) {
        const hoursShuffle = !stateInitial?.hoursShuffle;
        setStateInitial({
          ...stateInitial,
          hours,
          hoursShuffle
        });
      }
      // on minute chanage, update minutes and shuffle state
      if (minutes !== stateInitial?.minutes) {
        const minutesShuffle = !stateInitial?.minutesShuffle;
        setStateInitial({
          ...stateInitial,
          minutes,
          minutesShuffle
        });
      }
      // on second chanage, update seconds and shuffle state
      if (seconds !== stateInitial?.seconds) {
        const secondsShuffle = !stateInitial?.secondsShuffle;
        setStateInitial({
          ...stateInitial,
          seconds,
          secondsShuffle
        });
      }
    }, 1000);
    return () => {
      clearInterval(timerID);
    };
  });
  return (
    <>
      <div className="flex justify-between w-[500px]">
        <FlipUnitContainer
          unit={'days'}
          digit={stateInitial?.days}
          shuffle={stateInitial?.daysShuffle}
        />
        <FlipUnitContainer
          unit={'hours'}
          digit={stateInitial?.hours}
          shuffle={stateInitial?.hoursShuffle}
        />
        <FlipUnitContainer
          unit={'minutes'}
          digit={stateInitial?.minutes}
          shuffle={stateInitial?.minutesShuffle}
        />
        <FlipUnitContainer
          unit={'seconds'}
          digit={stateInitial?.seconds}
          shuffle={stateInitial?.secondsShuffle}
        />
      </div>
    </>
  )
}
