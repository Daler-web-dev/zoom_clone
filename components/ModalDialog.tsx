import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import React, { MouseEventHandler, ReactNode } from "react";
import { Button } from "./ui/button";
import { LuCopy } from "react-icons/lu";
interface MeetingModalProps {
    isOpen: boolean;
    setIsOpen: (arg: boolean) => void;
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

export default function ModalDialog({
    title,
    image,
    children,
    className,
    buttonText,
    buttonIcon = false,
    isOpen,
    setIsOpen
}: MeetingModalProps) {

    return (
        <Dialog>
            <DialogTrigger className="text-white">Open</DialogTrigger>
            <DialogContent className="bg-darkblue w-full border-none text-white">
                <DialogHeader className="flex items-center justify-center gap-2 flex-col">
                    {isOpen ? (
                        <Image
                            src="/icons/verified.svg"
                            alt={title}
                            width={200}
                            height={200}
                            className="w-20 h-20"
                        />
                    ) : null}
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                {!isOpen ? children : <Button className="flex items-center justify-center gap-1"><LuCopy /> Copy Invitation</Button>}
                {isOpen ? (
                    <DialogClose asChild>
                        <Button
                            onClick={() => {
                                setIsOpen(!isOpen)
                            }}
                            type="button"
                            variant="default"
                        >
                            Close
                        </Button>
                    </DialogClose>
                ) : null}
            </DialogContent>
        </Dialog>
    );
}
