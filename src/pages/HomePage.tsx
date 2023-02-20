import * as React from "react";

const CountDown = React.lazy(() => import("@/components/CountDown"));
const Introduction = React.lazy(() => import("@/components/Introduction"));
const Story = React.lazy(() => import("@/components/Story"));
const Invitation = React.lazy(() => import("@/components/Invitation"));
const Location = React.lazy(() => import("@/components/Location"));
const GuestBook = React.lazy(() => import("@/components/GuestBook"));
const Music = React.lazy(() => import("@/components/music/index"));

interface Props {
  teams?: {
    data: string[],
    meta: any
  } | any
}

export default function HomePage({ teams }: Props) {
  return (
    <>
      <CountDown />
      <Introduction />
      <Story />
      <Invitation />
      <Location />
      <GuestBook />
      <Music />
    </>
  )
}
