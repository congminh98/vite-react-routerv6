import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShuffle, faBackwardStep, faForwardStep, faPlay, faPause, faRepeat, faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import { AUDIOS } from "@/constants";
import * as React from "react";
import { useAppStore } from "@/store/store";
import { tracks } from '@/assets/data/tracks';

type Props = {}

const MusicTime = React.lazy(() => import("@/components/music/Time"));
const MusicVolumn = React.lazy(() => import("@/components/music/Volumn"));

const styleIcons = "text-colorPink text-2xl cursor-pointer"

const Controls = ({ }: Props) => {
  const { setMusicTime, isRepeat, setRepeatMusic } = useAppStore();
  
  const [audioStatus, setAudioStatus] = React.useState<boolean>(false);
  const [curAudioTime, setCurAudioTime] = React.useState<any>(0);
  const [durationAudioTime, setDurationAudioTime] = React.useState<any>(0);
  const [progress, setProgress] = React.useState<any>("0%");
  const [currentTrack, setCurrentTrack] = React.useState(tracks[0]);
  const [trackIndex, setTrackIndex] = React.useState<number>(0);
  const audioRef = React.useRef<any>(null);
  const progressBarRef = React.useRef<any>(null);
  const playAnimationRef = React.useRef<any>(null);

  const handlePlayAudio = () => {
    setAudioStatus((prev) => !prev);
  }

  const handleLoadedData = () => {
    setDurationAudioTime(audioRef?.current?.duration);
  }
  const onTimeUpdate = () => {
    setCurAudioTime(audioRef?.current?.currentTime);
    if (durationAudioTime > 0) {
      const progressTime = `${(audioRef.current?.currentTime / audioRef?.current?.duration) * 100
        }%`
      setProgress(progressTime);
    }
  }
  const handleOnProgress = () => {
  }

  const handleOnEnded = () => {
    !isRepeat && handlePreOrNext("next");
  }

  const repeat = React.useCallback(() => {
    const currentTime = audioRef.current?.currentTime;    
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      '--range-progress',
      `${(progressBarRef.current.value / audioRef.current?.duration) * 100}%`
    );
    setMusicTime(currentTime);
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, durationAudioTime, progressBarRef]);

  const handleStep = (step: string) => {
    step == "back" ? audioRef.current.currentTime -= 15 :
      step == "for" ? audioRef.current.currentTime += 15 :
        audioRef.current?.currentTime;
    playAnimationRef.current = requestAnimationFrame(repeat);
  }

  const handlePreOrNext = (step: string) => {
    setAudioStatus(true);
    if (step === "prev") {
      if (trackIndex === 0) {
        const lastTrackIndex = tracks.length - 1;
        setTrackIndex(lastTrackIndex);
        setCurrentTrack(tracks[lastTrackIndex]);
      } else {
        setTrackIndex((prev) => prev - 1);
        setCurrentTrack(tracks[trackIndex - 1]);
      }
    } else if (step == "next") {
      if (trackIndex >= tracks.length - 1) {
        setTrackIndex(0);
        setCurrentTrack(tracks[0]);
      } else {
        setTrackIndex((prev) => prev + 1);
        setCurrentTrack(tracks[trackIndex + 1]);
      }
    }
  }

  const handleOnPause = () => {
  }

  React.useEffect(() => {
    if (audioStatus) {
      audioRef.current?.play();
      playAnimationRef.current = requestAnimationFrame(repeat);
    } else {
      audioRef.current?.pause();
      cancelAnimationFrame(playAnimationRef.current);
    }
  }, [audioRef, audioStatus, repeat]);

  const handleRepeatMusic = () =>{
    isRepeat ? setRepeatMusic(false) : setRepeatMusic(true);
  }

  return (
    <>
      <audio
        loop={isRepeat}
        className="hidden"
        ref={audioRef}
        src={currentTrack?.src}
        onLoadedData={handleLoadedData}
        onTimeUpdate={onTimeUpdate}
        onProgress={handleOnProgress}
        onEnded={handleOnEnded}
        onPause={handleOnPause}
        onPlay={() => setAudioStatus(true)}
      />

      <MusicTime {...{ curAudioTime, durationAudioTime, progressBarRef, audioRef, progress, playAnimationRef }} />

      <div className="flex flex-row items-center gap-5">
        <FontAwesomeIcon className={styleIcons} icon={faShuffle} />
        <FontAwesomeIcon className={styleIcons} icon={faBackward} onClick={() => handlePreOrNext("prev")} />
        <FontAwesomeIcon className={styleIcons} icon={faBackwardStep} onClick={() => handleStep("back")} />
        <span className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-colorPink">
          <FontAwesomeIcon className={`styleIcons text-white`} icon={audioStatus ? faPause : faPlay} onClick={handlePlayAudio} />
        </span>
        <FontAwesomeIcon className={styleIcons} icon={faForwardStep} onClick={() => handleStep("for")} />
        <FontAwesomeIcon className={styleIcons} icon={faForward} onClick={() => handlePreOrNext("next")} />
        <span className="relative flex after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:h-1 after:w-1 after:text-orange" onClick={handleRepeatMusic}>
          <FontAwesomeIcon className={`${styleIcons} ${isRepeat && '!text-green-500'}`} icon={faRepeat} />
        </span>
      </div>

      <MusicVolumn {...{ audioRef }} />
    </>
  )
}

export default React.memo(Controls);
