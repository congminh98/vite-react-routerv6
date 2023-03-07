
import { axiosClientMusic } from "@/api-client/axiosClient";

export async function getTracks() {
  try {
    // const getTracks = await axiosClientMusic.get(`/playlists/${"5ENcqjQrDmR0fpu3qK5JHL"}/tracks`);
    const getTracks = await axiosClientMusic.get("/tracks/0bgJPIvefuRnEU4MNJuJSA");
    return getTracks?.data ?? [];
  } catch (error) {
    console.log(error);
  }
}

export const useTracks = () => ({
  queryKey: ["me", "playlists", "tracks", "tracks-detail"],
  queryFn: async () => getTracks(),
  staleTime: 10000
});
