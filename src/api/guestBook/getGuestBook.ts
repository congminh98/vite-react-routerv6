import { axiosClient } from "@/api-client/axiosClient";
import { useQuery } from "@tanstack/react-query";

export async function getGuestBook(){
  try {
    const guestBook = await axiosClient.get(
      "/guest-books?sort[id]=DESC"
    );
    return guestBook?.data ?? [];
  } catch (error) {
    console.log(error);
  }
};

// export const useGuestBook = () => {
//   return useQuery({
//     queryKey: ["guest-books"],
//     queryFn: async () => getGuestBook(),
//     staleTime: 10000,
//   });
// };
export const useGuestBook = () => ({
  queryKey: ["guest-books"],
  queryFn: async () => getGuestBook(),
  staleTime: 10000,
});
