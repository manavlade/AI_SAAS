"use client"

import Image from "next/image"

import emp from "@/public/emp.jpg"

interface EmptyProps {
    label: string
}

export const Empty = ({
    label
}: EmptyProps) => {
    return (
        <>
        <div className=" h-full p-20 justify-center items-center flex flex-col" >
            <div className=" relative h-64 w-72" >
                <Image
                alt="Empty.jpg"
                fill
                src={emp}
                />
            </div>
            <p className=" text-muted-foreground text-sm text-center" >
                {label}
            </p>
        </div>
        </>
    )
}
