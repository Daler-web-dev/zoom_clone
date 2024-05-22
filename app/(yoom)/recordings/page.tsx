import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="items-center pl-[20%]">
        <h1 className="text-start  pt-[47px] text-white font-bold text-3xl">
          Meeting Recordings
        </h1>

        <div className=" w-full grid grid-cols-2 gap-2">
          <div className="w-[500px] h-[250px] bg-darkblue rounded-lg"></div>

          <div className="w-[500px] h-[250px] bg-darkblue rounded-lg"></div>

          <div className="w-[500px] h-[250px] bg-darkblue rounded-lg"></div>

          <div className="w-[500px] h-[250px] bg-darkblue rounded-lg"></div>
        </div>
      </div>
    </>
  );
}
