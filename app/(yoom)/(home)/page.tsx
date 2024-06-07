"use client"
import MeetingTypeList from "@/components/MeetingTypeList";
import TimeComponent from "@/components/Time";
import { useToast } from "@/components/ui/use-toast";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { log } from "console";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";


export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter()
    const [callDetails, setCallDetails] = useState<Call>()
    const [values, setValues] = useState({
        dateTime: new Date().toISOString(),
        description: '',
        link: ''
    })


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data: any) => {
        console.log(data);
        setIsOpen(!isOpen)
    }

    const {user} = useUser()
    const client = useStreamVideoClient()

    const createMeeting = async () => {
        if(!client || !user) return 

        try {
            const id = crypto.randomUUID()
            const call = client.call('default', id)

            if(!call) throw new Error('Failed to create a call')

            const startsAt = values.dateTime || new Date(Date.now()).toISOString()
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

            if(!values.description) {
                // router.push(`/meeting/${call.id}`)
                console.log(call.id);
            }


        } catch(e) {
            console.log(e);
        }


    }

    return (
        <div className="pr-[25px]">
            <TimeComponent />
            <MeetingTypeList />
        </div>
    )
}
