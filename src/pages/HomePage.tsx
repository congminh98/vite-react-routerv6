import CountDown from "@/components/CountDown";
import { lazy } from "react";

const Introduction = lazy(() => import('@/components/Introduction'));
const Story = lazy(() => import('@/components/Story'));
const Invitation = lazy(() => import('@/components/Invitation'));
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
    </>
  )
}
