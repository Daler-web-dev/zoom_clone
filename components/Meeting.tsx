import { GrSchedulePlay } from "react-icons/gr";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { FaRegCopy } from "react-icons/fa";

type meeting = {
    title: string,
    date: string,
    users: Array<any>,
    isPassed: boolean
}

function MeetingCard({ title, date, users, isPassed }: meeting) {
    return (
        <div className="bg-darkblue rounded-lg px-6 py-8 text-[#F5FCFF] ">
            <GrSchedulePlay size={24} />
            <h3 className="mt-4 font-bold text-2xl">{title}</h3>
            <p className="mt-3 text-base font-extralight">{ date }</p>
            <div className="mt-9 flex items-center justify-between">
                <div className="flex">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>

                {
                    !isPassed ? (
                        <div className="flex items-center gap-2">
                            <Button className="bg-[#0e78f9]">
                                Start
                            </Button>
                            <Button className="flex items-center gap-1 text-[#C9DDFF] bg-[#252A41]">
                                <FaRegCopy />
                                Copy invation
                            </Button>
                        </div>
                    ) : null
                }
            </div>
        </div>
    );
}

export default MeetingCard;