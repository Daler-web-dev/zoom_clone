import Recordings from "@/components/Recordings";

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col items-start justify-start">
        <h1 className="text-start text-white font-bold text-3xl">
          Meeting Recordings
        </h1>
        <div className="w-full grid grid-cols-2 gap-6 pt-7">
          <Recordings title="#f23cv1d" beginning="1hr 33mins" ending="33mins" />
          <Recordings title="#f23cv1d" beginning="1hr 33mins" ending="33mins" />
          <Recordings title="#f23cv1d" beginning="1hr 33mins" ending="33mins" />
          <Recordings title="#f23cv1d" beginning="1hr 33mins" ending="33mins" />
        </div>
      </div>
    </>
  );
}
