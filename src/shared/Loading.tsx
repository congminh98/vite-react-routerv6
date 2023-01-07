import React from 'react'

type Props = {}

function Loading({}: Props) {
  return (
    <>
      <div className="loading absolute h-full w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-loading bg-no-repeat bg-center"></div>
    </>
  )
}

export default Loading
