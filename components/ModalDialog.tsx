import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image";
import { ReactNode } from "react"
import { Button } from "./ui/button";
import { LuCopy } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

interface MeetingModalProps {
    isOpen: boolean;
    onClose: (arg:boolean) => void;
    title: string;
    className?: string;
    children?: ReactNode;
    handleClick?: () => void;
    buttonText?: string;
    instantMeeting?: boolean;
    image?: string;
    buttonClassName?: string;
    buttonIcon?: boolean;
}



export default function ModalDialog({ title, image, children, className, buttonText, isOpen, buttonIcon = false }: MeetingModalProps) {
    return (
        <Dialog>
            <DialogTrigger className="text-white" >Open</DialogTrigger>
            <DialogContent
                className="bg-darkblue w-full border-none text-white"
            >
                <DialogHeader
                    className="flex items-center justify-center gap-2 flex-col"
                >
                    {image && <Image src={image} alt={title} width={200} height={200} className="w-20 h-20" />}
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                {children}
                

                <DialogClose asChild>
                    <Button type="button" variant="default">
                        Close
                    </Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    )
}
