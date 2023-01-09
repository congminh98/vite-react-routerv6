import IMAGES from "@/constants/Images"
import React from 'react'
import Social from "./Social"

interface Props {
  userImage?: string,
  rowReverse?: boolean | false
}

export default function UserInfo(props: any) {
  const { rowReverse, userImage, userName, husband, des, scale, rotate, flowerPos, itemPos, mb, mbm } = props;
  console.log(props);

  return (
    <>
      <div className={`relative flex md:flex-col ${!!rowReverse ? "flex-row-reverse" : "flex-row"} ${itemPos} mb-${mb} ${mbm}`}>
        <div className="user-image h-[452.8px] w-[452.8px] md:w-full z-0" data-aos="fade-down-left" data-aos-duration="1000" data-aos-delay="100">
          <img src={userImage} className="object-cover w-full h-full" alt="" />
        </div>
        <div className="relative -mx-[5%] -my-[5%] max-w-full w-1/2 h-fit bg-white p-12 shadow-xl before:absolute before:-z-[1] before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:h-[calc(100%-40px)] before:w-full before:border before:rounded-md before:border-rose-500 border-[30px] rounded-2xl border-white z-[1] after:absolute after:border after:border-rose-500 after:h-full after:-z-[1] after:top-1/2 after:left-1/2 after:-translate-y-1/2 after:-translate-x-1/2 after:w-[calc(100%-40px)] after:rounded-md md:m-auto md:w-[95%] md:!-translate-y-[10%] md:border-[15px] md:p-6 md:after:w-[calc(100%-24px)] md:before:h-[calc(100%-24px)]" data-aos="fade-down-right" data-aos-duration="1000" data-aos-delay="100">
          <h1 className="text-4xl font-extrabold text-center text-color2 md:text-3xl">{userName}</h1>
          <span className="block mb-4 text-xl italic font-semibold text-center text-color2 md:text-base md:mb-3">{husband ? 'Chồng' : 'Vợ'}</span>
          <p className="mb-10 text-base text-[#73777b] font-normal md:text-sm md:mb-5">{des}</p>
          <Social />
        </div>
        <div className={`absolute ${flowerPos} w-[35%] h-auto origin-center ${rotate} flow-icon -scale-${scale}-100 md:w-full md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:-z-[1]`}>
          <img data-aos="zoom-in-left" data-aos-duration="1000" data-aos-delay="200" src={IMAGES.FLOWER} alt="Flower" />
        </div>
      </div>
    </>
  )
}
{/* <div className="relative flex flex-row-reverse items-start">
  <div className="user-image h-[452.8px] min-w-[452.8px] max-w-[452.8px] z-0" data-aos="fade-down-right" data-aos-duration="1000" data-aos-delay="100">
    <img src={IMAGES?.BRIDE} className="object-cover w-full h-full" alt="" />
  </div>
  <div className="relative -mx-[5%] -my-[5%] max-w-full w-1/2 h-fit bg-white p-12 shadow-xl before:absolute before:-z-[1] before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:h-[calc(100%-40px)] before:w-full before:border before:rounded-md before:border-rose-500 border-[30px] rounded-2xl border-white z-[1] after:absolute after:border after:border-rose-500 after:h-full after:-z-[1] after:top-1/2 after:left-1/2 after:-translate-y-1/2 after:-translate-x-1/2 after:w-[calc(100%-40px)] after:rounded-md" data-aos="fade-down-left" data-aos-duration="1000" data-aos-delay="100">
    <h1 className="mb-1 text-4xl font-extrabold text-center text-color2">Thanh Huyền</h1>
    <span className="block mb-4 text-xl italic font-semibold text-center text-color2">Cô dâu</span>
    <p className="mb-10 text-base text-[#73777b] font-normal">Là một kế toán viên rất vui vẻ, hồn nhiên và hoà đồng. Dù vậy nhưng rất ghét nghề và làm vì lương là chính thôi ạ.</p>
    <Social />
  </div>
  <div className="absolute left-0 bottom-0 w-[35%] h-auto origin-center -rotate-180 flow-icon -scale-x-100" data-aos="zoom-in-left" data-aos-duration="1000" data-aos-delay="200">
    <img src={IMAGES.FLOWER} className="" alt="Flower" />
  </div>
</div> */}
