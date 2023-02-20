import { axiosClient } from "@/api-client/axiosClient";

export async function postTeams(data: FormData): Promise<any> {
  try {
    var body: any = {};
    for (const key of data.keys()) {
      body[key] = data.get(key);
    }
    const teams = await axiosClient.post("/teams", {
      data: body
    });
    return teams;
  } catch (error) {
    return Promise.reject(error);
  }
}
