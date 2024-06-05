"use client"
import ModalDialog from "@/components/ModalDialog";
import SettingBlocks from "@/components/SettingBlocks";
import TimeComponent from "@/components/Time";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { log } from "console";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { LuCopy } from "react-icons/lu";


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
                router.push(`/meeting/${call.id}`)
            }


        } catch(e) {
            console.log(e);
        }


    }

    return (
        <div className="pt-[30px] pr-[25px]">
            <TimeComponent />
            <div className="py-8 flex justify-start items-center gap-4">
                <button
                    onClick={createMeeting}
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
            <ModalDialog isOpen={isOpen} onClose={setIsOpen}
                buttonText="Create Meeting"
                title={isOpen ? "Meeting Created" : "Create Meeting"}
                image={isOpen ? "/icons/verified.svg" : ''}
            >
                {
                    isOpen ? (
                        <>
                            <Button
                                variant="default"
                                className="flex items-center gap-2 bg-[#0E78F9] text-white"
                            >
                                <LuCopy /> Copy Invitation
                            </Button>
                        </>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 text-black" >
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
                    )
                }
            </ModalDialog>

        </div>
    )
}
