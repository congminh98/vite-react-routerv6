import { AUDIOS } from "@/constants";
import React, { memo, useEffect, useRef, useState } from 'react';

type Props = {}

const AudioPlay = ({ }: Props) => {
  const audioRef = useRef<any>(null);
  const [audio, setAudio] = useState<boolean>(false);
  const [text, setText] = useState<boolean>(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setText(false);
    }, 10000)
    return () => clearInterval(timer)
  }, []);

  const handlePlayAudio = () => {
    setAudio(!audio);
    setText(false);

    setTimeout(() => {
      !audio ? audioRef?.current?.play() : audioRef?.current?.pause();
    }, 0);
  }  

  return (
    <>
      <section className="fixed z-30 p-3 rounded-full cursor-pointer bottom-10 left-10 bg-colorPink border-[5px] border-white animate-pulse md:bottom-5 md:left-5"
        onMouseEnter={() => audio ? setText(false) : setText(true)}
        onClick={handlePlayAudio}
      >
        <div className="">
          {audio ?
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#fff" className="bi bi-volume-up-fill" viewBox="0 0 16 16">
              <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"></path>
              <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"></path>
              <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"></path>
            </svg> :
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#fff" className="bi bi-volume-mute-fill" viewBox="0 0 16 16">
              <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"></path>
            </svg>
          }
        </div>
        <span className={`absolute opacity-0 w-max left-0 top-1/2 translate-x-0 -translate-y-1/2 h-full pl-[100%] pr-5 -z-[1] flex items-center bg-colorPink rounded-full transition-all ease-in-out duration-500 ${text ? "opacity-100" : ""}`}>
          Click to play music
        </span>
        <audio ref={audioRef} src={AUDIOS?.AUDIO} />
      </section>
    </>
  )
}

export default memo(AudioPlay);
