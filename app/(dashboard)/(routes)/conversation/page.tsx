"use client"

import * as z from "zod"
import Heading from "@/components/headers";
import { MessageSquare } from "lucide-react";

import { useForm } from "react-hook-form";
import { formSchema } from "./constants";

import { zodResolver } from "@hookform/resolvers/zod"

const Conversation = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        }
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }
    return (
        <div>
            <div>
                <Heading
                    title="Conversation"
                    description="Our most advanced AI model for conversation"
                    icon={MessageSquare}
                    iconColor="text-violet-500"
                    bgColor="bg-violet-500/10"
                />
            </div>
            <div className=" px-4 lg:px-8">

            </div>
        </div>
    )
}

export default Conversation;