"use client";

import MeetingTypeList from "@/components/MeetingTypeList";
import TimeComponent from "@/components/Time";
import React from "react";

export default function Home() {


    return (
        <div>
            <TimeComponent />
                
            <MeetingTypeList />
        </div>
    )
}
