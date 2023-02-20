import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { BearSlice, createBearSlice } from "@/store/slices/createBearSlice";
import { createMusicSlice, MusicSlice } from "@/store/slices/createMusicSlice";


type StoreState = BearSlice & MusicSlice;

export const useAppStore = create<StoreState>()(
  devtools(
    persist(
      (...a) => ({
        ...createBearSlice(...a),
        ...createMusicSlice(...a),
      }),
      { name: 'app-store' }
    )
  )
);
