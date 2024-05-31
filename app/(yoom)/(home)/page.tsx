"use client";

import ModalDialog from "@/components/ModalDialog";
import SettingBlocks from "@/components/SettingBlocks";
import TimeComponent from "@/components/Time";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { LuCopy } from "react-icons/lu";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);

    // data.length > 0 ? (
    //     <ModalDialog
    //         isOpen={false}
    //         onClose={() => false}
    //         buttonText="Meeting Created"
    //         title={"Meeting Created"}
    //         image="/icons/verified.svg"
    //     >
    //     <Button>
    //         <LuCopy /> Copy Invitation
    //     </Button>
    //     </ModalDialog>
    // ) : null;
  };

  return (
    <div>
      <TimeComponent />
      <div className="py-8 flex justify-start items-center gap-4">
        <button>
          <SettingBlocks
            bg="#FF742E"
            desc="Setup a new recording"
            title="New Meeting"
            src="/icons/Meeting.svg"
          />
        </button>
        <button>
          <SettingBlocks
            bg="#0E78F9"
            desc="via invitation link"
            title="Join Meeting"
            src="/icons/Join.svg"
          />
        </button>
        <button>
          <SettingBlocks
            bg="#830EF9"
            desc="Plan your meeting"
            title="Schedule Meeting"
            src="/icons/Schedule.svg"
          />
        </button>
        <button>
          <SettingBlocks
            bg="#F9A90E"
            desc="Meeting recordings"
            title="View Recordings"
            src="/icons/View.svg"
          />
        </button>
      </div>
      <ModalDialog
        isOpen={false}
        onClose={() => false}
        buttonText="Create Meeting"
        title={"Create Meeting"}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-start justify-start">
            <label className="text-base font-normal" htmlFor="description">
              Add a description
            </label>
            <Textarea
              className="font-normal text-base text-black"
              {...register("description", { required: true })}
            />
          </div>
          <div className="flex flex-col items-start justify-start py-2.5">
            <label className="text-base font-normal" htmlFor="date">
              Select Date & Time
            </label>
            <Input
              type="date"
              className="text-black font-normal text-base"
              {...register("date", { required: true })}
            />
          </div>
          <Button
            variant="default"
            className="w-full flex items-center gap-2 bg-[#0E78F9] text-white"
            type="submit"
          >
            Create Meeting
          </Button>
        </form>
      </ModalDialog>
    </div>
  );
}
