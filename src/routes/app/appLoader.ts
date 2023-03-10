import { useGuestBook } from "@/api/guestBook";
import { useGetAccessToken } from "@/api/music";
import { getTeams } from "@/api/team";
import { QueryClient } from "@tanstack/react-query";
import { json } from "react-router-dom";

export const loader = (queryClient: any) => async () => {
  const query = useGetAccessToken();
  // ⬇️ return data or fetch it
  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};

// export async function loader() {
//   try {
//     const teams = await getTeams();
//     return json(teams);
//   } catch (error: any) {
//     const { status } = error?.response;
//     throw new Response("Not Found", { status });
//   }
// }
