import { useGuestBook } from "@/api/guestBook";
import { postGuestBook } from "@/api/guestBook/postGuestBook";
import IMAGES from "@/constants/Images"
import { loader } from "@/routes/app";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from 'react'
import { useLoaderData } from "react-router-dom";

type Props = {}
const initialState = {
  name: '',
  email: '',
  congratulation: ''
}

export default function GuestBook({ }: Props) {
  const [dataGuestbook, setDataGuestbook] = useState<any>(initialState);
  const queryClient = useQueryClient();
  const { data: guestBooks, isLoading: getLoading } = useQuery(useGuestBook());

  const { mutate, mutateAsync, isLoading: postLoading } = useMutation(postGuestBook, {
    onError: () => {
      console.log("there was an error");
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ['guest-books'] });
      setDataGuestbook(initialState);
    }
  });

  const handleSubmit = (event: any): void => {
    event.preventDefault();
    try {
      mutateAsync(dataGuestbook);
      queryClient.invalidateQueries({ queryKey: ['guest-books'] });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <section className="relative z-[1] h-screen md:h-auto py-20 bg-no-repeat bg-cover bg-center bg-invitation after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:h-full after:w-full after:bg-[rgba(47,54,64,.4)] after:-z-[1]">
        <div className="container">
          <div className="grid mb-10 justify-items-center">
            <h2 className="mb-5 text-5xl text-colorPink font-playBall">Sổ Lưu Bút</h2>
            <img className="mb-5" src={IMAGES?.DIVIDER} alt="" />
            <p className="text-lg">Tôi yêu bạn vì tất cả những gì bạn đang có, tất cả những gì bạn đã có, và tất cả những gì bạn chưa hiện hữu.</p>
          </div>
          <div className="flex gap-5 md:flex-col">
            <div className="flex-1">
              <p className="mb-6">Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám cưới của chúng tôi!</p>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-5">
                  <fieldset className="flex gap-5">
                    <input
                      className="flex-1 input-style"
                      type="text" value={dataGuestbook?.name}
                      onChange={(event) => setDataGuestbook({ ...dataGuestbook, name: event.target.value || "" })}
                      name="name" required placeholder="Nhập họ tên*"
                    />
                    <input
                      className="flex-1 input-style"
                      type="email" value={dataGuestbook?.email}
                      onChange={(event) => setDataGuestbook({ ...dataGuestbook, email: event.target.value || "" })}
                      name="email" placeholder="Nhập email"
                    />
                  </fieldset>
                  <fieldset className="flex">
                    <textarea
                      className="w-full p-3 resize-none text-colorPink outline-0"
                      name="congratulation"
                      value={dataGuestbook?.congratulation} onChange={(event) => setDataGuestbook({ ...dataGuestbook, congratulation: event.target.value || "" })}
                      rows={10} required placeholder="Nhập lời chúc của bạn*"
                    >
                    </textarea>
                  </fieldset>
                </div>
                <div className="flex justify-center">
                  <button type="submit" className={`relative flex items-center mt-5 h-[40px] px-3 bg-colorPink rounded-sm hover:shadow-button transition-all hover:transition-all ease-in-out delay-75 duration-300 hover:duration-300`}
                  disabled={!!postLoading}
                  >
                    {(postLoading) && <svg className="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    }
                    {(postLoading) ? "Đang gửi" : "Gửi lời chúc"}
                  </button>
                </div>
              </form>
            </div>
            <div className="flex-1">
              <div className={`border-4 p-2 border-colorPink h-[400px] overflow-y-auto bg-bg2 ${getLoading || postLoading ? "animate-pulse" : ""}`}>
                <div className="h-auto">
                  {
                    guestBooks?.length ?
                      guestBooks?.map((guestBook: any, i: React.Key) => {
                        return <div key={i} className={`${Number(i) % 2 === 0 ? "" : "bg-[]"} p-2`}>
                          <strong className="font-bold text-colorPink">{guestBook?.attributes?.name}</strong>
                          <p className="font-normal text-slate-700">{guestBook?.attributes?.congratulation}</p>
                        </div>
                      })
                      : <div className="h-full flex items-center justify-center">
                        <p className="text-colorPink text-xl">Chưa có lời chúc ạ</p>
                      </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}