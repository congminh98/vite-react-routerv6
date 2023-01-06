import { getTeams } from "@/api/team";
import { defer, json } from "react-router-dom";

export async function loader() {
  try {
    const teams = await getTeams();
    return defer(teams);
    // return json(teams);
  } catch (error: any) {
    const { status } = error?.response;
    throw new Response("Not Found", { status });
  }
}
