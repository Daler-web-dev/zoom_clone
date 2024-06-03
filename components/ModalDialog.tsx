import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import React, { ReactNode } from "react";

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

        </Dialog>
    )
}
