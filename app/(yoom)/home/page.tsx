import MeetingCard from "@/components/Meeting";
import { Button } from "@/components/ui/button";



export default function Home() {
    return (
        <div className="grid grid-cols-2 gap-3">
           <MeetingCard title="FHFjf sjdfnsjfnsjfn sdfsf" date="2220 2323 f f3 33" users={[{}]} isPassed={false}></MeetingCard>
           <MeetingCard title="FHFjf sjdfnsjfnsjfn sdfsf" date="2220 2323 f f3 33" users={[{}]} isPassed={false}></MeetingCard>
           <MeetingCard title="FHFjf sjdfnsjfnsjfn sdfsf" date="2220 2323 f f3 33" users={[{}]} isPassed={true}></MeetingCard>
           <MeetingCard title="FHFjf sjdfnsjfnsjfn sdfsf" date="2220 2323 f f3 33" users={[{}]} isPassed={false}></MeetingCard>
        </div>
    )
}