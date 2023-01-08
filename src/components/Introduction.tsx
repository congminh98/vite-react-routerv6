import IMAGES from "@/constants/Images"
import React from 'react'

interface Props { }
const styleLi = 'p-1.5 text-xs text-white rounded-sm bg-color2';

export default function Introduction({ }: Props) {
  return (
    <>
      <section className="py-20 section-introduction">
        <div className="container">
          <div className="relative flex flex-row items-end">
            <div className="user-image h-[452.8px] min-w-[452.8px] max-w-[452.8px] z-0">
              <img src={IMAGES?.THUMBNAIL} className="object-cover h-full" alt="" />
            </div>
            <div className="relative -mx-[5%] -my-[5%] max-w-full w-1/2 h-fit bg-white p-12 shadow-xl before:absolute before:-z-[1] before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:h-[calc(100%-40px)] before:w-full before:border-2 before:rounded-md before:border-rose-500 border-[30px] rounded-2xl border-white z-[1] after:absolute after:border-2 after:border-rose-500 after:h-full after:-z-[1] after:top-1/2 after:left-1/2 after:-translate-y-1/2 after:-translate-x-1/2 after:w-[calc(100%-40px)] after:rounded-md">
              <h1 className="mb-1 text-4xl font-extrabold text-center text-color2">Công Minh</h1>
              <span className="block mb-4 text-xl italic font-semibold text-center text-color2">Chú rể</span>
              <p className="mb-10 text-base text-[#73777b] font-normal">Là một chàng lập trình viên cung Bão Bình, trầm tính, ít nói nhưng bên trong lại rất ấm áp. Thích ăn uống, thể thao và đi du lịch.</p>
              <ul className="flex justify-center gap-2">
                <li className={styleLi}>
                  <a href="https://www.facebook.com/ElJefecito2.7.98" target="_blank">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 3h2.5v-3h-2.5c-1.93 0-3.5 1.57-3.5 3.5v1.5h-2v3h2v8h3v-8h2.5l0.5-3h-3v-1.5c0-0.271 0.229-0.5 0.5-0.5z"></path></svg>
                  </a>
                </li>
                <li className={styleLi}>
                  <a href="https://www.facebook.com/ElJefecito2.7.98" target="_blank">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM11 2.5c0-0.275 0.225-0.5 0.5-0.5h2c0.275 0 0.5 0.225 0.5 0.5v2c0 0.275-0.225 0.5-0.5 0.5h-2c-0.275 0-0.5-0.225-0.5-0.5v-2zM8 5c1.656 0 3 1.344 3 3s-1.344 3-3 3c-1.656 0-3-1.344-3-3s1.344-3 3-3zM14 13.5v0c0 0.275-0.225 0.5-0.5 0.5h-11c-0.275 0-0.5-0.225-0.5-0.5v0-6.5h1.1c-0.066 0.322-0.1 0.656-0.1 1 0 2.762 2.237 5 5 5s5-2.238 5-5c0-0.344-0.034-0.678-0.1-1h1.1v6.5z"></path></svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="absolute top-0 right-0 w-[35%] h-auto origin-center rotate-180 flow-icon -scale-y-100">
              <img src={IMAGES.FLOWER} className="" alt="Flower" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
