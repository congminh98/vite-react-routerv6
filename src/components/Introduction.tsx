import IMAGES from "@/constants/Images"
import React from 'react'

interface Props {}

export default function Introduction({ }: Props) {
  return (
    <>
      <section className="section-introduction">
        <div className="container">
          <div className="user-image">
            <img src={IMAGES?.VIDEO_POSTER} alt="" />
          </div>
          <div className="user-info">

            <div className="flow-icon">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
