import NavigateLinks from "@/components/Navigate";
import StreamVideoProvider from "@/provider/StreamVideoClient";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="w-full" >
            <StreamVideoProvider>
                <header
                    className="z-20 w-full py-8 px-6 bg-darkblue flex items-center justify-between relative"
                >
                    <div
                        className="h-10"
                    >
                        <Image
                            src="/logo.svg"
                            alt="logo"
                            width="200"
                            height="200"
                            className="h-full object-contain"
                        />
                    </div>

                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </header>
                <aside
                    className="w-[264px] pt-[140px] px-3 fixed  top-0 left-0 bottom-0 bg-darkblue z-10"
                >
                    <NavigateLinks />
                </aside>

                <main className="ml-[264px] px-9 py-11">
                    {children}
                </main>
            </StreamVideoProvider>
        </section>
    )
}