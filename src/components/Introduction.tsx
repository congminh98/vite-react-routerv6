import IMAGES from "@/constants/Images"
import React from 'react'

interface Props { }

export default function Introduction({ }: Props) {
  return (
    <>
      <section className="py-20 section-introduction">
        <div className="container">
          <div className="relative flex flex-row">
            <div className="user-image h-[452.8px] min-w-[452.8px] max-w-[452.8px]">
              <img src={IMAGES?.VIDEO_POSTER} className="object-cover h-full" alt="" />
            </div>
            <div className="relative flex items-end">
              <div className="relative -mx-[10%] -my-[5%] max-w-full p-12 shadow-xl before:absolute before:top-0 before:left-0 before:h-full before:w-full before:border before:border-orange-400 border-[30px] rounded-2xl border-transparent z-[1]">
                <h2>Công Minh</h2>
                <span>Chú rể</span>
                <p>Là một chàng lập trình viên cung Bão Bình, trầm tính, ít nói nhưng bên trong lại rất ấm áp. Thích ăn uống, thể thao và đi du lịch.</p>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full flow-icon origin-center rotate-180 -scale-y-100 translate-x-[5%] -translate-y-[10%]">
              <img src={IMAGES.FLOWER} className="" alt="Flower" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
