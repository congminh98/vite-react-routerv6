// import { getTeams } from "@/api";

import { getTeams } from "@/api/team";
import { json } from "react-router-dom";

export async function loader() {
  try {
    const teams = await getTeams();
    return json(teams);
  } catch (error: any) {
    const { status } = error?.response;
    throw new Response("Not Found", { status });
  }
}
