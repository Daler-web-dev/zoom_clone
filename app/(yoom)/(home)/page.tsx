import ModalDialog from "@/components/ModalDialog";
import SettingBlocks from "@/components/SettingBlocks";
import TimeComponent from "@/components/Time";
import { Button } from "@/components/ui/button";



export default function Home() {
    return (
        <div className="pt-[30px] pr-[25px]">
            <TimeComponent />
            <div className="py-8 flex justify-start items-center gap-4">
                <SettingBlocks bg="#FF742E" desc="Setup a new recording" title="New Meeting" src="/icons/Meeting.svg" />
                <SettingBlocks bg="#0E78F9" desc="via invitation link" title="Join Meeting" src="/icons/Join.svg" />
                <SettingBlocks bg="#830EF9" desc="Plan your meeting" title="Schedule Meeting" src="/icons/Schedule.svg" />
                <SettingBlocks bg="#F9A90E" desc="Meeting recordings" title="View Recordings" src="/icons/View.svg" />
            </div>
            <ModalDialog
                isOpen={false}
                onClose={() => false}
                title={"Create Meeting"}
            >
                <div className="flex flex-col justify-start text-white items-start gap-2.5">
                    <label className="text-base font-normal" htmlFor="desc">Add a description</label>
                    <input className="w-[470px] h-[70px] rounded bg-[#252A41] p-2.5 font-normal text-gray-400" type="text" name="desc" placeholder="Description" />
                </div>
                <div className="flex flex-col justify-start text-white items-start gap-2.5 py-[24px]">
                    <label className="text-base font-normal" htmlFor="date">Select Date & Time</label>
                    <input className="w-[470px] h-[70px] rounded bg-[#252A41] p-2.5 font-normal text-gray-400" type="date" name="date" placeholder="Choose your meeting date" />
                </div>
                <Button className="bg-[#0E78F9] h-10">Create Meeting</Button>
            </ModalDialog>
        </div>
    )
}