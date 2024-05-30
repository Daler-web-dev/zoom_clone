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
    buttonText: string;
    isMeeting: boolean;
    image?: string;
    buttonClassName?: string;
    buttonIcon?: string;
  }
  

export default function ModalDialog(props: MeetingModalProps)  {
    return (
        <Dialog>
            {
                
                 props.isMeeting ? (
                    <>
                        <DialogTrigger className={props.className}>
                            {
                                props.buttonIcon ? <img src={props.buttonIcon} alt={props.title} /> : null
                            }
                            {props.buttonText}
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>{props.title}</DialogTitle>
                            </DialogHeader>
                            {props.children}
                        </DialogContent>
                    </>
                ) : (
                    <>
                        <DialogTrigger>Open</DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>{props.title}</DialogTitle>
                            </DialogHeader>
                            {props.children}
                        </DialogContent>
                    </>
                )
            }
        </Dialog>
    )
}
