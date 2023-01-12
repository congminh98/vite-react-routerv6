import { useGuestBook } from "@/api/guestBook";
import { getTeams } from "@/api/team";
import { QueryClient } from "@tanstack/react-query";
import { json } from "react-router-dom";

export const loader = (queryClient: { getQueryData: (arg0: string[]) => any; fetchQuery: (arg0: { queryKey: string[]; queryFn: () => Promise<any>; staleTime: number; }) => any; }) => async () => {
  const query = useGuestBook();
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
