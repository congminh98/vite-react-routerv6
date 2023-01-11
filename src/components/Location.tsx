import SvgUnderline from "@/shared/SvgUnderline";
import React, { memo } from 'react'

type Props = {}

const location = "!1m18!1m12!1m3!1d3833.7039529098856!2d108.23413482658732!3d16.08084525328633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314217013c0793c9%3A0xaf2962829210131b!2zQ2hpIG5ow6FuaCBDw7RuZyB0eSBUTkhIIE1vbnN0YXIgTGFiIFZp4buHdCBOYW0gLSDEkMOgIE7hurVuZw!5e0!3m2!1sen!2s!4v1673359708491!5m2!1sen!2s";

function Location({ }: Props) {
  return (
    <>
      <section className="mb-20">
        <div className="grid gap-4 mb-12 justify-items-center md:mb-10">
          <h2 className="text-5xl text-white text-shadow-default text-stroke-default md:text-4xl">Invitation</h2>
          <SvgUnderline color="text-[#ff4061]" />
        </div>
        <div className="h-[30rem] w-full">
          <iframe
            className="w-full h-full"
            src={`https://www.google.com/maps/embed?pb=${location}`}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </section>
    </>
  )
}

export default memo(Location)
