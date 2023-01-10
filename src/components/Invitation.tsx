import IMAGES from "@/constants/Images"
import SvgUnderline from "@/shared/SvgUnderline"
import React, { memo } from 'react'

interface Props { }

function Invitation({ }: Props) {
  return (
    <>
      <section className="relative z-[1] py-32 bg-center bg-no-repeat bg-flower lg:bg-fixed md:bg-cover before:absolute before:top-0 before:left-0 before:bg-before before:h-full before:w-full before:-z-[1] before-style after-style md:pt-24 md:pb-32">
        <div className="container">
          <div className="grid gap-4 mb-20 justify-items-center md:mb-10">
            <h2 className="text-5xl text-white text-shadow-default text-stroke-default md:text-4xl">Invitation</h2>
            <SvgUnderline />
          </div>
          <div className="relative p-5 before:absolute before:-z-[1] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:border before:border-white before:w-full before:h-[calc(100%-20px)] after:absolute after:-z-[1] after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:border after:border-white after:h-full after:w-[calc(100%-20px)]">
            <div className="flex flex-row items-center md:flex-col">
              <div className="relative grid flex-1 h-full py-5 px-7 justify-items-center md:py-24 md:px-0">
                <h2 className="md:relative md:py-3 md:px-1 flex flex-col items-center first-letter:text-white text-8xl before:absolute before:right-0 before:top-0 before:h-40 before:w-40 before:-translate-x-1/2 before:-translate-y-[40%] before:bg-leaf before:bg-no-repeat before:bg-contain before:z-[1] after:absolute after:left-0 after:top-full after:h-40 after:w-40 after:translate-x-1/2 after:-translate-y-1/2 after:rotate-180 after:bg-leaf after:bg-no-repeat after:bg-contain md:text-5xl md:before:h-20 md:before:w-[100px] md:before:left-full md:after:h-20 md:after:w-[100px] md:after:-left-full">
                  Save
                  <p className="text-xl uppercase leading-[0] pt-[1rem] md:text-xs md:pt-3">the</p>
                  Date
                </h2>
              </div>
              <div className="grid flex-1 h-full px-7 py-5 md:px-2 justify-items-center bg-[rgba(72,126,176,.6)]">
                <div className="w-1/2 mb-7 md:mb-5">
                  <img src={IMAGES?.WEDDING_LOGO} alt="" />
                </div>
                <p className="text-center uppercase mb-7">Trân trọng kính mời Quý khách ở nhà bắn pháo hoa để đón giao thừa cùng gia đình nhé</p>
                <div className="relative grid gap-2 pt-10 pb-12 mb-7 justify-items-center before:absolute before:w-32 before:h-5 before:bg-contain before:bg-no-repeat before:top-0 before:left-1/2 before:-translate-x-1/2 before:bg-whiteArrow after:absolute after:w-32 after:h-5 after:bottom-0 after: after:bg-contain after:bg-whiteArrowReverse after:bg-no-repeat after:left-1/2 after:-translate-x-1/2 md:gap-0 md:pt-7 md:pb-10">
                  <p className="text-3xl md:text-[22px]">Ngày 21 tháng 1 năm 2023</p>
                  <p className="text-xl">Vào lúc 00:00</p>
                </div>
                <div className="grid gap-0 justify-items-center">
                  <p>Tại trung tâm hội nghị tiệc cưới</p>
                  <p className="text-2xl uppercase md:text-xl">Nào Nào Đó</p>
                  <p>Sảnh B - Tầng 2</p>
                  <p className="md:text-xs md:text-center">456 Nguyễn Văn A, Thanh Khê, Đà Nẵng</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default memo(Invitation);
