import IMAGES from "@/constants/Images";
import SvgUnderline from "@/shared/SvgUnderline"
import { memo } from 'react'

interface Props { }

const doubleBorder = (color: string) => `before:absolute before:border before:border-${color} before:h-full before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 after:absolute after:border after:border-${color} after:w-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 before:w-[calc(100%-15px)] after:h-[calc(100%-15px)]`;
const imgStyleCommon = "h-[546px] max-w-[546px] object-cover border-[10px] border-white md:w-full"

function Story({ }: Props) {
  return (
    <>
      <section className="mb-40 md:mb-10">
        <div className="relative lg:bg-fixed bg-center z-[1] bg-no-repeat bg-cover py-56 md:py-32 bg-invitation before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-before before:w-full before:h-full before:-z-[1]">
          <div className="grid gap-6 justify-items-center before-style after2-style">
            <h2 className="text-5xl stroke-[2px] text-shadow-default text-stroke-default md:text-4xl">Our love story</h2>
            <SvgUnderline />
          </div>
        </div>
        <div className="container">
          <div className="relative z-[1] before:absolute before:h-full before:w-[2px] before:top-1 before:left-1/2 before:-translate-x-1/2 before:bg-colorPink before:-z-[1]">
            <div className="w-full pb-2 mb-16 text-center bg-white md:mb-10">
              <span className={`relative flex py-8 px-16 md:py-4 md:px-8 text-4xl md:text-3xl m-auto w-fit text-colorPink ${doubleBorder("colorPink")}`}>2020</span>
            </div>
            <div className="flex flex-row pt-2 bg-white relative -z-[1] w-fit md:flex-col">
              <div className="flex-[0.7] ml-[8%] md:ml-0 md:flex-1">
                <img className={`${imgStyleCommon} relative -z-[1]`} src={IMAGES?.THUMBNAIL} alt="" data-aos="fade-up"/>
                <div className={`relative border-[10px] border-white px-7 py-6 bg-colorBlue max-w-[80%] mx-auto -mt-[10%] md:max-w-full after:bg-flower after:bg-center after:w-full after:h-full after:absolute after:z-[-2] after:bg-no-repeat after:top-1/2 after:right-1/2 after:rotate-180 md:after:hidden`}>
                  <div className={`relative z-[1] py-6 px-7 grid justify-items-center ${doubleBorder("white")}`}  data-aos="fade-down">
                    <h4 className="text-3xl font-semibold text-center md:text-2xl">Lần đầu gặp nhau</h4>
                    <div className="mt-4 mb-8 md:mt-2 md:mb-4">
                      <SvgUnderline />
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1 -ml-[8%] mt-[15%] md:-mt-[5%] md:items-center">
                <div className="px-8 py-5 md:pt-3 md:pb-4 md:px-5 w-fit border-[10px] border-white bg-colorBlue ml-[5%] -mb-[5%] z-[1] md:ml-0 md:border-[5px]" data-aos="fade-right">
                  <span className={`relative p-4 flex items-center text-2xl w-fit h-fit -mb-[5%] z-[1] ${doubleBorder("white")} md:text-base`}>
                    8 tháng 1
                  </span>
                </div>
                <div className="relative w-fit -z-[1]" data-aos="fade-down">
                  <img className={`${imgStyleCommon}`} src={IMAGES?.THUMBNAIL} alt="" />
                  <div className="absolute right-0 w-3/4 -z-[1] top-0 left-full -translate-x-1/2 -translate-y-1/2 md:hidden">
                    <img src={IMAGES?.FLOWER_MEDIUM} className="w-full" alt="" data-aos="fade-right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default memo(Story);
