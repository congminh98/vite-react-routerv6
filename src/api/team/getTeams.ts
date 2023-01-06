import axiosClient from "@/api-client/axiosClient";

export const getTeams = async (): Promise<any> => {
  const teams = await axiosClient.get("/teams");
  return teams;
};
