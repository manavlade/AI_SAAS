"use client"
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { SignIn } from "@clerk/nextjs";
import { useEffect } from "react";

export default function Page() {
    const router = useRouter();
    const user = useUser();

    useEffect(() => {
        if (user && user.isSignedIn) {
            router.push('/dashboard')
        }
    }, [user])

    if (!user || !user.isSignedIn) {
        return <SignIn />;
    }

    return <div>Welcome</div>;
}