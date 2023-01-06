import IMAGES from "@/constants/Images";
import useCountDown from "@/hooks/useCountDown";
import React from 'react';

type Props = {}
const spanStyles = {
  'span': 'grid border-r border-r-gray-400 justify-items-center text-yellow-300',
  'p': 'px-6 md:px-2 py-1 text-7xl font-rubik text-center min-w-[150px] md:min-w-[85px] md:text-5xl',
  'p2': 'py-1 text-base italic',
}

function CountDown({ }: Props) {
  const countDownTime = useCountDown();
  return (
    <>
      <section className="relative place-items-center h-screen section-countdown overflow-hidden md:bg-invitation md:bg-cover md:bg-center">
        <div className="flex justify-center w-full before:absolute before:content-[''] before:w-full before:h-full before:left-0 before:top-0 before:bg-before before:z-10 after:absolute after:content-[''] after:bottom-0 after:left-0 after:h-0 after:border-t-[100px] after:border-r-[50vw] after:border-b-0 after:border-l-[50vw] after:border-after after:z-30">
          <video poster={IMAGES.VIDEO_POSTER} autoPlay loop playsInline preload="true" className="md:hidden w-full h-auto absolute bg-cover">
            <source src={IMAGES.VIDEO} type="video/webm" />
            <source src={IMAGES.VIDEO} type="video/mp4" />
          </video>
        </div>
        <div className="relative z-20 grid content-center items-center h-full countdown-content justify-items-center">
          <div className="flex flex-col items-center justify-center w-full">
            <img className="w-2/12 md:w-1/4" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500" src={IMAGES.WHITE_ARROW}alt="" />
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-600 flex items-center gap-10 py-12 text-8xl font-rubik animate-text lg:flex-col lg:gap-2 md:text-5xl md:py-8" data-aos="zoom-in-down" data-aos-duration="1000" data-aos-delay="500">
              Công Minh<span className="text-5xl md:text-2xl md:leading-none">&</span>Thanh Huyền
            </h1>
            <img className="w-2/12 md:w-1/4" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500" src={IMAGES.WHITE_ARROW_REVERSE} alt="" />
          </div>
          <p className="my-10 text-2xl italic text-amber-200 md:text-xl md:my-5" data-aos="fade-up" data-aos-duration="500" data-aos-delay="1100" data-aos-anchor-placement="top-bottom">
            Sẽ đón giao thừa sau
          </p>
          <div className="relative flex" data-aos-duration="1000" data-aos-delay="1000">
            <span className={spanStyles.span} data-aos="flip-up" data-aos-delay="1000" data-aos-duration="500">
              <p className={spanStyles.p}>{countDownTime?.days}</p>
              <p className={spanStyles.p2}>Ngày</p>
            </span>
            <span className={spanStyles.span} data-aos="flip-up" data-aos-delay="1000" data-aos-duration="500">
              <p className={spanStyles.p}>{countDownTime?.hours}</p>
              <p className={spanStyles.p2}>Giờ</p>
            </span>
            <span className={spanStyles.span} data-aos="flip-up" data-aos-delay="1000" data-aos-duration="500">
              <p className={spanStyles.p}>{countDownTime?.minutes}</p>
              <p className={spanStyles.p2}>Phút</p>
            </span>
            <span className={`${spanStyles.span} !border-0`} data-aos="flip-up" data-aos-delay="1000" data-aos-duration="500">
              <p className={spanStyles.p}>{countDownTime?.seconds}</p>
              <p className={spanStyles.p2}>Giây</p>
            </span>
          </div>
        </div>
      </section>
      <section></section>
    </>
  )
}

export default React.memo(CountDown)
