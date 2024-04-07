import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
        <div>
            Landing Page (unprotected)
            <div>
              
                    <Link href="/sign-in">
                        <Button >
                            Log In
                        </Button>
                    </Link>
                    <Link href="/sign-up">
                        <Button >
                            Sign Up
                        </Button>
                    </Link>
            </div>
            
        </div>
        </>
    );
}
