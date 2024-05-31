"use client"

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
    }

    return (
        <div>
            <TimeComponent />
            <div className="py-8 flex justify-start items-center gap-4">
                <button
                >
                    <SettingBlocks bg="#FF742E" desc="Setup a new recording" title="New Meeting" src="/icons/Meeting.svg" />
                </button>
                <button>
                    <SettingBlocks bg="#0E78F9" desc="via invitation link" title="Join Meeting" src="/icons/Join.svg" />
                </button>
                <button>
                    <SettingBlocks bg="#830EF9" desc="Plan your meeting" title="Schedule Meeting" src="/icons/Schedule.svg" />
                </button>
                <button>
                    <SettingBlocks bg="#F9A90E" desc="Meeting recordings" title="View Recordings" src="/icons/View.svg" />
                </button>
            </div>
            <ModalDialog
                isOpen={false}
                onClose={() => false}
                buttonText="Create Meeting"
                title={"Create Meeting"}
            >
                <form onSubmit={handleSubmit(onSubmit)} >
                    <Textarea
                        {...register('description', { required: true })}
                    />
                    <Input
                        type="date"
                        className="text-black"
                        {...register('date', { required: true })}
                    />
                    <Button
                        variant="default"
                        className="flex items-center gap-2 bg-[#0E78F9] text-white"
                        type="submit"
                    >
                        Create Meeting
                    </Button>
                </form>
            </ModalDialog>

        </div>
    )
}