'use client';

import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import HomeCard from './HomeCard';
import MeetingModal from './ModalDialog';
import { useRouter } from 'next/navigation';
import { useToast } from './ui/use-toast';
import { useForm } from 'react-hook-form';
import { useUser } from '@clerk/nextjs';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';

const initialValues = {
    dateTime: new Date(),
    description: '',
    link: '',
};

export default function MeetingTypeList() {

    const router = useRouter();
    const [callDetails, setCallDetails] = useState<Call>()
    const [meetingState, setMeetingState] = useState<
        'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>(undefined);
    const [values, setValues] = useState(initialValues);
    const { toast } = useToast();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data: any) => {
        console.log(data);
    }

    const { user } = useUser()
    const client = useStreamVideoClient()

    const createMeeting = async () => {
        if (!client || !user) return

        try {
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
                title: "Call created"
            })
        } catch (e) {
            toast({
                title: "Error: couldn't create a call!"
            })
        }
    }
    
    return (
        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-10 xl:grid-cols-4">
            <HomeCard
                img="/icons/Meeting.svg"
                title="New Meeting"
                description="Start an instant meeting"
                handleClick={() => setMeetingState('isInstantMeeting')}
            />
            <HomeCard
                img="/icons/Join.svg"
                title="Join Meeting"
                description="via invitation link"
                className="bg-blue-600"
                handleClick={() => setMeetingState('isJoiningMeeting')}
            />
            <HomeCard
                img="/icons/Schedule.svg"
                title="Schedule Meeting"
                description="Plan your meeting"
                className="bg-purple-600"
                handleClick={() => setMeetingState('isScheduleMeeting')}
            />
            <HomeCard
                img="/icons/View.svg"
                title="View Recordings"
                description="Meeting Recordings"
                className="bg-yellow-600"
                handleClick={() => router.push('/recordings')}
            />

            <MeetingModal
                isOpen={meetingState === 'isScheduleMeeting'}
                onClose={() => setMeetingState(undefined)}
                title="Create Meeting"
                handleClick={() => { }}
            >
                <div className="flex flex-col gap-2.5">
                    <label className="text-base font-normal leading-[22.4px] text-[#ECF0FF]">
                        Add a description
                    </label>
                    <Textarea
                        className="border-none bg-[#252a41] focus-visible:ring-0 focus-visible:ring-offset-0"
                        onChange={(e) =>
                            setValues({ ...values, description: e.target.value })
                        }
                    />
                </div>
                <div className="flex w-full flex-col gap-2.5">
                    <label className="text-base font-normal leading-[22.4px] text-[#ECF0FF]">
                        Select Date and Time
                    </label>
                    <ReactDatePicker
                        selected={values.dateTime}
                        onChange={(date) => setValues({ ...values, dateTime: date! })}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="time"
                        dateFormat="MMMM d, yyyy h:mm aa"
                        className="w-full rounded bg-[#252a41] p-2 focus:outline-none"
                    />
                </div>
            </MeetingModal>
            {/* (
            <MeetingModal
                isOpen={meetingState === 'isScheduleMeeting'}
                onClose={() => setMeetingState(undefined)}
                title="Meeting Created"
                handleClick={() => {
                    navigator.clipboard.writeText('asdasd');
                    toast({ title: 'Link Copied' });
                }}
                image={'/icons/verified.svg'}
                buttonIcon="/icons/copy.svg"
                className="text-center"
                buttonText="Copy Meeting Link"
            />
            ) */}

            <MeetingModal
                isOpen={meetingState === 'isJoiningMeeting'}
                onClose={() => setMeetingState(undefined)}
                title="Type the link here"
                className="text-center"
                buttonText="Join Meeting"
                handleClick={() => router.push(values.link)}
            >
                <Input
                    placeholder="Meeting link"
                    onChange={(e) => setValues({ ...values, link: e.target.value })}
                    className="border-none bg-[#252a41] focus-visible:ring-0 focus-visible:ring-offset-0"
                />
            </MeetingModal>

            <MeetingModal
                isOpen={meetingState === 'isInstantMeeting'}
                onClose={() => setMeetingState(undefined)}
                title="Start an Instant Meeting"
                className="text-center"
                buttonText="Start Meeting"
                handleClick={createMeeting}
            />
        </section>
    )
}
