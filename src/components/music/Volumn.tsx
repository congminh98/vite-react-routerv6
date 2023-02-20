import * as React from "react";
import { faCirclePlus, faHeart, faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {}

const styleIcons = "text-colorPink text-2xl transition-all cursor-pointer"

export default function Volumn(props: any) {
  const { audioRef } = props;
  const [volume, setVolume] = React.useState<any>(50);
  const [muteVolume, setMuteVolume] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, audioRef, muteVolume]);

  return (
    <>
      <div className="flex flex-row items-center gap-4 mr-10">
        <FontAwesomeIcon className={styleIcons} icon={faHeart} />
        <FontAwesomeIcon className={styleIcons} icon={faCirclePlus} />
        <FontAwesomeIcon className={styleIcons} icon={muteVolume ? faVolumeXmark : faVolumeHigh} onClick={() => setMuteVolume((prev) => !prev)} />
        <div className="relative w-40 h-2 bg-yellow-300 rounded-full">
          <input type="range"
            className="absolute w-full -translate-y-1/2 top-1/2 z-[1] appearance-none bg-emerald-500 h-[2px] rounded-sm cursor-pointer before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:bg-pink-500 before:h-[2px]"
            style={{
              background: `linear-gradient(to right,rgb(236 72 153) ${volume}%, rgb(16 185 129) ${volume}%)`,
            }}
            min={0}
            max={100}
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
          {/* <i className="absolute left-0 w-1/2 h-full -translate-y-1/2 rounded-full top-1/2 bg-colorPink"></i> */}
        </div>
      </div>
    </>
  )
}
