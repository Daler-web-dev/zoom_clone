import { Button } from "@/components/ui/button";
import { SlCamrecorder } from "react-icons/sl";
import { CiPlay1 } from "react-icons/ci";
import { PiShare } from "react-icons/pi";
import React from "react";

type IRecord = {
  title: string;
  beginning: string;
  ending: string;
};

const Recordings: React.FC<IRecord> = ({ beginning, ending, title }) => {
  return (
        <div className="w-full h-[250px] bg-darkblue rounded-lg">
          <div className="py-7 px-6">
            <SlCamrecorder size={30} color="white" />
            <div className="pt-3">
              <span className=" font-bold text-[#F5FCFF] text-2xl">
              {title}
              </span>
            </div>

            <div className="flex gap-5 pt-[30px]">
              <span className="font-normal text-[#F5FCFF] text-base">
                Start Time: {beginning}
              </span>
              <span className="font-normal text-[#F5FCFF] text-base">
                End Time: {ending}
              </span>
            </div>

            <div className="flex pt-8 gap-2 items-center">
              <button className="flex items-center gap-[6px] justify-center whitespace-nowrap py-[9px] w-[239px] rounded-sm bg-[#0E78F9] text-white">
                <CiPlay1 />
                <span>Play</span>
              </button>

              <button className="flex items-center gap-[6px] justify-center whitespace-nowrap py-[9px] w-[239px] rounded-sm bg-[#252A41] text-white">
                <PiShare />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      
  );
};

export default Recordings;
