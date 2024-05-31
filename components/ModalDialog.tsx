import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ReactNode } from "react"

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


export default function ModalDialog({ title, children }: { title: string, children: ReactNode }) {
    return (
        <Dialog>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {children}
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
