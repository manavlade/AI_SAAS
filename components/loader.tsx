import Image from "next/image"

export const Loading = () => {
    return (
        <>
        <div className=" h-full flex flex-col items-center justify-center gap-y-4" >
            <div className=" w-10 h-10 animate-ping relative" >
                <Image
                alt="Loading"
                fill
                src= "/logo.png"
                />
            </div>
            <p className=" text-md text-muted-foreground pt-3" >
                Genius is thinking...
            </p>
        </div>
        </>
    )
}