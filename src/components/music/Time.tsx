import { formatTime } from "@/utils/commons";
import * as  React from 'react'
import "./_progress.scss";

type Props = {
  durationAudioTime?: any;
  curAudioTime?: any;
  progressBarRef?: any;
  audioRef?: any;
  progress?: any;
  playAnimationRef?: any;
}

const Time = ({ durationAudioTime, curAudioTime, progressBarRef, audioRef}: Props) => {
  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  }

  return (
    <>
      <div className="absolute left-0 w-full h-2 bg-yellow-300 bottom-full">
        <input
          type="range"
          ref={progressBarRef}
          onChange={handleProgressChange}
          min={0}
          max={durationAudioTime}
          defaultValue="0"
          className="absolute w-full -translate-y-1/2 top-1/2 z-[1] appearance-none bg-emerald-500 h-[2px] rounded-sm cursor-pointer before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:bg-pink-500 before:h-[2px]"
        />
        <span className="absolute left-0 flex items-center h-full p-5 bg-pink-500 rounded-t-xl bottom-full">{formatTime(curAudioTime)}</span>
        <span className="absolute right-0 flex items-center h-full p-5 bg-pink-500 rounded-t-xl bottom-full">{formatTime(durationAudioTime)}</span>
      </div>
    </>
  )
}
export default React.memo(Time);
