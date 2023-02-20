import { axiosAccountSpotify } from "@/api-client/axiosClient";
import { Configs } from "@/utils/commons";

export const getAccessToken = async (): Promise<any> => {
  try {
    const accessToken = await axiosAccountSpotify.post("/token", {
      grant_type: "client_credentials",
      client_id: Configs.SPOTIFY_CLIENT_ID,
      client_secret: Configs.SPOTIFY_CLIENT_SECRET
    });
    return accessToken?.data;
  } catch (error) {
    // Promise.reject(error);
    console.log(error)
  }
};

export const useGetAccessToken = () => ({
  queryKey: ["auth"],
  queryFn: async () => getAccessToken(),
  staleTime: 10000,
});
