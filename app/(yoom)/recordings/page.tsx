import Recordings from "@/components/Recordings";




export default function Home() {
  return (
    <>
    <div className="items-center pl-[20%]">
      <h1 className="text-start  pt-[47px] text-white font-bold text-3xl">
      Meeting Recordings
      </h1>
      <div className="grid grid-cols-2 gap-6 pt-7">
    <Recordings title="#f23cv1d" beginning="1hr 33mins" ending="33mins" />
    <Recordings title="#f23cv1d" beginning="1hr 33mins" ending="33mins" />
    <Recordings title="#f23cv1d" beginning="1hr 33mins" ending="33mins" />
    <Recordings title="#f23cv1d" beginning="1hr 33mins" ending="33mins" />

    </div>
    </div>
    </>
  );
}
