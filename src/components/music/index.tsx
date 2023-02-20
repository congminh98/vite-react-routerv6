import * as React from "react";

// import component
const MusicInfo = React.lazy(() => import( "@/components/music/Info"));
const MusicControls = React.lazy(() => import( "@/components/music/Controls"));

type Props = {}

const Index = ({ }: Props) => {
  return (
    <>
      <section className="bg-white">
        <div className="fixed bottom-0 left-0 z-50 flex flex-row items-center justify-between w-full h-20 bg-white">
          <MusicInfo />
          <MusicControls />
        </div>
      </section>
    </>
  )
}
export default React.memo(Index);
