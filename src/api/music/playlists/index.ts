
import { axiosClientMusic } from "@/api-client/axiosClient";

export async function getPlaylists() {
  try {
    const getPlaylists = await axiosClientMusic.get("/me/playlists");
    return getPlaylists?.data ?? [];
  } catch (error) {
    console.log(error);
  }
}

export const usePlaylists = () => ({
  queryKey: ["me", "playlists"],
  queryFn: async () => getPlaylists(),
  staleTime: 10000
});
