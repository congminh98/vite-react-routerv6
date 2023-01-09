import SvgUnderline from "@/shared/SvgUnderline"
import { memo } from 'react'

interface Props { }

function Story({ }: Props) {
  return (
    <>
      <section className="relative mb-40 bg-fixed bg-center z-[1] bg-no-repeat bg-cover py-56 bg-flower before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-before before:w-full before:h-full before:-z-[1]">
        <div className="grid gap-6 justify-items-center before-style after2-style">
          <h2 className="text-5xl stroke-[2px] text-shadow-default text-stroke-default">Our love story</h2>
          <SvgUnderline />
        </div>
      </section>
    </>
  )
}
export default memo(Story);
