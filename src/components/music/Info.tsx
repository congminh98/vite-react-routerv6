import IMAGES from "@/constants/Images"
import * as React from 'react'

type Props = {}

export default function Info({ }: Props) {
  return (
    <>
      <div className="flex items-center gap-5">
        <img src={IMAGES?.FLOWER_TITLE} alt="" />
        <div className="grid">
          <h2 className="text-colorBlue">Episode 1: How do you yourself</h2>
          <p className="text-colorPink">Author</p>
        </div>
      </div>
    </>
  )
}
