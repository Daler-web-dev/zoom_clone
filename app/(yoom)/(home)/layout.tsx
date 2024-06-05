import NavigateLinks from "@/components/Navigate";
import StreamVideoProvider from "@/provider/StreamVideoClient";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="w-full" >
                <header
                    className="z-20 w-full py-4 px-14 bg-darkblue flex items-center justify-end relative"
                >


                    <SignedIn>
                        <UserButton
                            appearance={{
                                variables: {
                                    colorText: "#fff",
                                    colorPrimary: "red",
                                    colorBackground: "#1C1F2E",
                                }
                            }}
                        />
                    </SignedIn>
                </header>
                <aside
                    className="w-[264px] pt-[140px] px-3 fixed top-0 left-0 bottom-0 bg-darkblue z-30"
                >
                    <div
                        className="h-10 absolute top-10"
                    >
                        <Image
                            src="/logo.svg"
                            alt="logo"
                            width="200"
                            height="200"
                            className="h-full object-contain"
                        />
                    </div>
                    <NavigateLinks />
                </aside>
                <main className="ml-[249px] px-9 py-11">
                    {children}
                </main>
        </section>
    )
}