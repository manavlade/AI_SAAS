"use client"

import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import SlideBar from './slidebar';
import { useEffect, useState } from 'react';
const MobileSidebar = () => {
    // Used this extra code to remove hydration errors
    /*
    To prevent hydration mismatches, it is recommended to ensure that
     the component renders the same content server-side as it does during the 
     initial client-side render
    */
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <Sheet>
                <SheetTrigger>
                    <Button variant="ghost" size="icon" className=' md:hidden' >
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className='p-0'>
                    <SlideBar />
                </SheetContent>
            </Sheet>
        </>
    )
}
export default MobileSidebar;