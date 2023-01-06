import CountDown from "@/components/CountDown";

interface Props {
  teams?: {
    data: string[],
    meta: any
  } | any
}

export default function HomePage({ teams }: Props) {
  return (
    <>
      <div className="relative page-home">
        <CountDown />
      </div>
    </>
  )
}
