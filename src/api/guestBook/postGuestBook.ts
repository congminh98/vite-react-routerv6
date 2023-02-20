import { axiosClient } from "@/api-client/axiosClient";

export const postGuestBook = async (data: any): Promise<any> => {
  try {
    const guestBook = await axiosClient.post("/guest-books", {
      data: {
        name: data.name,
        congratulation: data.congratulation
      }
    });
    return guestBook;
  } catch (error) {
    console.log(error);
  }
};
