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
                title={"Are you ready?"}
                isMeeting
                isOpen={false}
                onClose={() => {}}
                buttonText="Click"
            >
                <Button>Yes</Button>
            </ModalDialog>
        </div>
    )
}