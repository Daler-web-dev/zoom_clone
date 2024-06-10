"use client"
import MeetingTypeList from "@/components/MeetingTypeList";
import TimeComponent from "@/components/Time";
import { useToast } from "@/components/ui/use-toast";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Home() {

    return (
        <div>
            <TimeComponent />
            <MeetingTypeList />
        </div>
    )
}
