import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FC, ReactNode } from "react"

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

const ModalDialog: FC<MeetingModalProps> = ({ isOpen, onClose, title, children, handleClick, buttonText, instantMeeting, image, buttonClassName, buttonIcon }) => {
    return (
        <Dialog>
            <DialogTrigger className="text-white">Open</DialogTrigger>
            <DialogContent className="bg-darkblue border-none">
                <DialogHeader>
                    <DialogTitle className="font-bold text-3xl text-white pb-2.5">{title}</DialogTitle>
                    {children}
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
export default ModalDialog