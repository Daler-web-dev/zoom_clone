// import {
//     Dialog,
//     DialogClose,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
// } from "@/components/ui/dialog"
// import Image from "next/image";
// import { ReactNode } from "react"
// import { Button } from "./ui/button";
// import { LuCopy } from "react-icons/lu";
// import { IoClose } from "react-icons/io5";
// interface MeetingModalProps {
//     isOpen: boolean;
//     onClose: () => void;
//     title: string;
//     className?: string;
//     children?: ReactNode;
//     handleClick?: () => void;
//     buttonText?: string;
//     instantMeeting?: boolean;
//     image?: string;
//     buttonClassName?: string;
//     buttonIcon?: boolean;
//     trigger: ReactNode;
// }


// export default function ModalDialog({ title, image, children, className, buttonText, buttonIcon = false, isOpen, trigger }: MeetingModalProps) {
//     return (
//         <Dialog
//             open={isOpen}
//         >
//             <DialogTrigger className="text-white" >{trigger}</DialogTrigger>
//             <DialogContent
//                 className="bg-darkblue w-full border-none text-white"
//             >
//                 <DialogHeader
//                     className="flex items-center justify-center gap-2 flex-col"
//                 >
//                     {image && <Image src={image} alt={title} width={200} height={200} className="w-20 h-20" />}
//                     <DialogTitle>{title}</DialogTitle>
//                 </DialogHeader>
//                 {children}
//                 {/* <Button 
//                     variant="default" 
//                     className="flex items-center gap-2 bg-[#0E78F9] text-white" 
//                 > 
//                    <LuCopy/>
//                 </Button> */}

//                 <DialogClose asChild>
//                     <Button type="button" variant="default">
//                         Close
//                     </Button>
//                 </DialogClose>
//             </DialogContent>
//         </Dialog>
//     )
// }

"use client";
import { ReactNode } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Image from "next/image";

interface MeetingModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    className?: string;
    children?: ReactNode;
    handleClick?: () => void;
    buttonText?: string;
    instantMeeting?: boolean;
    image?: string;
    buttonClassName?: string;
    buttonIcon?: string;
}

const MeetingModal = ({
    isOpen,
    onClose,
    title,
    className,
    children,
    handleClick,
    buttonText,
    instantMeeting,
    image,
    buttonClassName,
    buttonIcon,
}: MeetingModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none bg-[#1c1f2e] px-6 py-9 text-white">
                <div className="flex flex-col gap-6">
                    {image && (
                        <div className="flex justify-center">
                            <Image src={image} alt="checked" width={72} height={72} />
                        </div>
                    )}
                    <h1 className={cn("text-3xl font-bold leading-[42px]", className)}>
                        {title}
                    </h1>
                    {children}
                    <Button
                        className={
                            "bg-[#0e78f9] focus-visible:ring-0 focus-visible:ring-offset-0"
                        }
                        onClick={handleClick}
                    >
                        {buttonIcon && (
                            <Image
                                src={buttonIcon}
                                alt="button icon"
                                width={13}
                                height={13}
                            />
                        )}{" "}
                        &nbsp;
                        {buttonText || "Schedule Meeting"}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default MeetingModal;
