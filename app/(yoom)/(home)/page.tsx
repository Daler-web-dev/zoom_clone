"use client"
import MeetingTypeList from "@/components/MeetingTypeList";
import ModalDialog from "@/components/ModalDialog";
import SettingBlocks from "@/components/HomeCard";
import TimeComponent from "@/components/Time";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
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
    const toast = useToast()

    const onSubmit = async (data: any) => {



        console.log(data);
    }

    return (
        <div className="pr-[25px]">
            <TimeComponent />
            <MeetingTypeList />
        </div>
    )
}