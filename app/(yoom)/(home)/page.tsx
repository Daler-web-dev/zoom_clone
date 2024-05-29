"use client";
import ModalDialog from "@/components/ModalDialog";
import SettingBlocks from "@/components/SettingBlocks";
import TimeComponent from "@/components/Time";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

export default function Home() {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(true);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const handleCreateMeeting = () => {
    setIsFirstModalOpen(false);
    setIsSecondModalOpen(true);
  };

  return (
    <div className="pt-[30px] pr-[25px] ">
      <TimeComponent />
      <div className="py-8 flex justify-start items-center gap-4 ">
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
      {isFirstModalOpen && (
        <ModalDialog title={"Create Meeting"}>
          <div className="pt-6">
            <span>Add a description</span>
            <Input />
            <span>Select Date & Time</span>
            <Input />
            <Button
              className="w-full mt-5"
              onClick={() => {
                handleCreateMeeting();
              }}
            >
              Create Meeting
            </Button>
          </div>
        </ModalDialog>
      )}

      {isSecondModalOpen && (
        <ModalDialog title={"Meeting Created"}>
          <div className="pt-6">
            <span> </span>
            <Button
              className="w-full mt-5 bg-[#0E78F9]"
            >
              Copy Invitation
            </Button>

            <Button
              className="w-full mt-5"
              onClick={() => setIsSecondModalOpen(false)}
            
            >
              Close
            </Button>
          </div>
        </ModalDialog>
      )}
    </div>
  );
}
