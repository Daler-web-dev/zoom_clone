"use client"

import React, { useState } from "react"
import HomeCard from "./HomeCard"
import { useRouter } from "next/navigation"
import MeetingModal from "./MeetingModal"
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useToast } from "@/components/ui/use-toast"

const MeetingTypeList = () => {
    const router = useRouter()
    const [meetingState, setMeetingState] = useState<"isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined>()

    const { toast } = useToast()
    const [values, setValues] = useState({
        dateTime: new Date(),
        description: '',
        link: ''
    })
    const [callDetails, setCallDetails] = useState<Call>()

    const { user } = useUser()
    const client = useStreamVideoClient()

    const createMeeting = async () => {
        if (!client || !user) return

        try {
            if (!values.dateTime) {
                toast({
                    title: "Please select a date and time",
                })
                return
            }

            const id = crypto.randomUUID()
            const call = client.call('default', id)

            if (!call) throw new Error('Failed to create a call')

            const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString()
            const description = values.description || "Instant meeting"

            await call.getOrCreate({
                data: {
                    starts_at: startsAt,
                    custom: {
                        description
                    }
                }
            })


            setCallDetails(call)

            if (!values.description) {
                router.push(`/meeting/${call.id}`)
            }

            toast({
                title: "Meeting Created"
            })
        } catch (e) {
            console.log(e);
            toast({
                title: "Failed to create meeting"
            })
        }


    }

    return (
        <section className="flex justify-start items-start flex-wrap gap-5 py-8">
            <HomeCard
                img="/icons/Meeting.svg"
                title="New Meeting"
                description="Start an instant meeting"
                handleClick={() => setMeetingState("isInstantMeeting")}
                className="bg-[#FF742E]"
            />
            <HomeCard
                img="/icons/Join.svg"
                title="Join Meeting"
                description="Via invitation link"
                handleClick={() => setMeetingState("isJoiningMeeting")}
                className="bg-[#0E78F9]"
            />
            <HomeCard
                img="/icons/Schedule.svg"
                title="Schedule Meeting"
                description="Plan your meeting"
                handleClick={() => setMeetingState("isScheduleMeeting")}
                className="bg-[#830EF9]"
            />
            <HomeCard
                img="/icons/View.svg"
                title="View Meeting"
                description="Meeting recordings"
                handleClick={() => setMeetingState("isInstantMeeting")}
                className="bg-[#F9A90E]"
            />

            <MeetingModal
                isOpen={meetingState === "isInstantMeeting"}
                onClose={() => setMeetingState(undefined)}
                title="Start an Instant Meeting"
                className="text-center"
                buttonText="Start Meeeting"
                handleClick={createMeeting}
            />
        </section>
    )
}

export default MeetingTypeList