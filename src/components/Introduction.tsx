import IMAGES from "@/constants/Images"
import React from 'react'

type Props = {}

export default function Introduction({ }: Props) {
  return (
    <>
      <section className="section-introduction">
        <div className="container">
          <div className="user-image">
            <img src={IMAGES?.VIDEO_POSTER} alt="" />
          </div>
          <div className="user-info">
            <div className="flow-icon"></div>
          </div>
        </div>
      </section>
    </>
  )
}
