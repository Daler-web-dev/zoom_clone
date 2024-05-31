"use client";

import ModalDialog from "@/components/ModalDialog";
import SettingBlocks from "@/components/SettingBlocks";
import TimeComponent from "@/components/Time";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { LuCopy } from "react-icons/lu";

export default function Home() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data: any) => {
    reset()
    console.log(data);
    setIsOpen(!isOpen)
  };

  return (
    <div>
      <TimeComponent />
      <div className="py-8 flex justify-start items-center gap-4">
          <SettingBlocks
            bg="#FF742E"
            desc="Setup a new recording"
            title="New Meeting"
            src="/icons/Meeting.svg"
          />
          <SettingBlocks
            bg="#0E78F9"
            desc="via invitation link"
            title="Join Meeting"
            src="/icons/Join.svg"
          />
          <SettingBlocks
            bg="#830EF9"
            desc="Plan your meeting"
            title="Schedule Meeting"
            src="/icons/Schedule.svg"
          />
          <SettingBlocks
            bg="#F9A90E"
            desc="Meeting recordings"
            title="View Recordings"
            src="/icons/View.svg"
          />
      </div>
      <ModalDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
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
