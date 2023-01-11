import axiosClient from "@/api-client/axiosClient";
import { useQuery } from "@tanstack/react-query";

export const getGuestBook = async (): Promise<any> => {
  try {
    const guestBook = await axiosClient.get("/guest-books?sort[createdAt]=DESC");
    return guestBook?.data || [];
  } catch (error) {
    console.log(error);
    
  }
};

export const useGuestBook = () => {
  return useQuery({
    queryKey: ["guest-books"],
    queryFn: () => getGuestBook()
  });
};
