import { AUDIOS, VIDEOS } from "@/constants";
import IMAGES from "@/constants/Images";
import useCountDown from "@/hooks/useCountDown";
import React from 'react';

type Props = {}
const spanStyles = {
  'span': 'grid border-r border-r-gray-400 justify-items-center text-yellow-300',
  'p': 'px-6 md:px-2 py-1 text-7xl font-rubik text-center min-w-[150px] md:min-w-[85px] md:text-5xl',
  'p2': 'py-1 text-base font-vibes',
}

function CountDown({ }: Props) {
  const countDownTime = useCountDown();
  return (
    <>
      <section className="relative h-screen overflow-hidden bg-cover mb-14 place-items-center section-countdown md:bg-invitation md:bg-center">
        <div className="flex justify-center w-full before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-before before:z-10 after:absolute after:bottom-0 after:left-0 after:h-0 after:border-t-[100px] after:border-r-[50vw] after:border-b-0 after:border-l-[50vw] after:border-after after:z-30 before:transition after:opacity-80 md:before:bg-beforemd md:after:border-t-[50px]">
          <video poster={IMAGES.THUMBNAIL} loop playsInline preload="none" className="absolute top-0 left-0 object-cover object-center h-auto min-w-full bg-cover md:hidden" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
            {/* <source src={VIDEOS.VIDEO} type="video/mp4" />
            <source src={VIDEOS.VIDEO} type="video/mp4" /> */}
          </video>
          <audio src={AUDIOS?.AUDIO} controls={false}></audio>
        </div>
        <div className="relative z-20 grid items-center content-center h-full countdown-content justify-items-center">
          <div className="flex flex-col items-center justify-center w-full">
            <img className="w-2/12 md:w-2/6" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500" src={IMAGES.WHITE_ARROW} alt="" />
            <h1 className="flex items-center gap-10 py-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-600 text-8xl font-rubik md:font-vibes md:font-extrabold animate-text lg:flex-col lg:gap-2 md:text-6xl md:py-9" data-aos="zoom-in-down" data-aos-duration="1000" data-aos-delay="500">
              Công Minh<span className="text-5xl md:text-2xl md:leading-none">&</span>Thanh Huyền
            </h1>
            <img className="w-2/12 md:w-2/6" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500" src={IMAGES.WHITE_ARROW_REVERSE} alt="" />
          </div>
          <p className="my-8 text-3xl italic font-semibold text-amber-200 md:text-xl md:my-5 font-vibes" data-aos="fade-up" data-aos-duration="500" data-aos-delay="1200" data-aos-anchor-placement="top-bottom">
            Sẽ đón giao thừa sau
          </p>
          <div className="relative flex" data-aos="flip-up" data-aos-duration="500" data-aos-delay="2000">
            <span className={spanStyles.span}>
              <p className={spanStyles.p}>{countDownTime?.days}</p>
              <p className={spanStyles.p2}>Ngày</p>
            </span>
            <span className={spanStyles.span}>
              <p className={spanStyles.p}>{countDownTime?.hours}</p>
              <p className={spanStyles.p2}>Giờ</p>
            </span>
            <span className={spanStyles.span}>
              <p className={spanStyles.p}>{countDownTime?.minutes}</p>
              <p className={spanStyles.p2}>Phút</p>
            </span>
            <span className={`${spanStyles.span} !border-0`}>
              <p className={spanStyles.p}>{countDownTime?.seconds}</p>
              <p className={spanStyles.p2}>Giây</p>
            </span>
          </div>
        </div>
      </section>
    </>
  )
}

export default React.memo(CountDown)
