import { StateCreator } from "zustand";

export interface MusicSlice {
  isRepeat: boolean;
  currentMusicTime: number;
  currentMusicVolumn: number | string;
  setMusicTime: (currTime: any) => void;
  setRepeatMusic: (isRepeat: any) => void;
}

export const createMusicSlice: StateCreator<MusicSlice> = (set: any) => ({
  isRepeat: false,
  currentMusicTime: 0,
  currentMusicVolumn: 0,
  setMusicTime: (currTime) =>
    set((state: MusicSlice) => ({
      currentMusicTime: Number(currTime)
    })),
  setRepeatMusic: (isRepeat) =>
    set((state: MusicSlice) => ({
      isRepeat: isRepeat
    }))
});
