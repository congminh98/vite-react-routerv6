import { postTeams } from "@/api/team/postTeam";
import { redirect } from "react-router-dom";

export async function action({request }: any) {
  let formData = await request.formData();
  await postTeams(formData);
  return redirect("/");
}
