import IMAGES from "@/constants/Images"
import Social from "@/shared/Social"
import UserInfo from "@/shared/UserInfo"
import React, { memo } from 'react'

interface Props { }

const HusbandInfo = {
  userImage: IMAGES?.THUMBNAIL,
  userName: 'Công Minh',
  husband: true,
  des: "Là một chàng lập trình viên cung Bão Bình, trầm tính, ít nói nhưng bên trong lại rất ấm áp. Thích ăn uống, thể thao và đi du lịch.",
  scale: "y",
  rotate: "-rotate-180",
  flowerPos: "top-0 right-0",
  itemPos: "items-end",
  mb: "52",
  mbm: "md:mb-6"
}
const WifeInfo = {
  userImage: IMAGES?.BRIDE,
  userName: 'Thanh Huyền',
  rowReverse: true,
  des: "Là một kế toán viên rất vui vẻ, hồn nhiên và hoà đồng. Dù vậy nhưng rất ghét nghề và làm vì lương là chính thôi ạ.",
  scale: "x",
  rotate: "-rotate-180",
  flowerPos: "bottom-0 left-0",
  itemPos: "items-start",
  mb: "0",
  mbm: "md:mb-0"
}

function Introduction({ }: Props) {
  return (
    <>
      <section className="py-20 md:py-10 section-introduction relative z-[2] bg-white">
        <div className="container">
          <UserInfo {...HusbandInfo} />
          <UserInfo {...WifeInfo} />
        </div>
      </section>
    </>
  )
}
export default memo(Introduction);
