"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from 'react';
import Icons from "../global/icons";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";

const Navbar = () => {


    return (
        <div className="relative w-full h-full">
            <div className="z-[99] fixed pointer-events-none inset-x-0 h-[88px]"></div>

            <header
                className={cn(
                    "fixed top-4 inset-x-0 mx-auto max-w-6xl px-2 md:px-12 z-[100] transform th"
                )}
            >
                <Wrapper className="backdrop-blur-lg rounded-xl lg:rounded-2xl border border-[rgba(124,124,124,0.2)] px- md:px-2 flex items-center justify-start">
                    <div className="flex items-center justify-between w-full sticky mt-[7px] lg:mt-auto mb-auto inset-x-0">
                        <div className="flex items-center flex-1 lg:flex-none pl-1">
                            <Link href="/" className="text-lg font-semibold text-foreground">
                                <Icons.icon className="w-auto h-5" />
                            </Link>
                            
                        </div>
                        <div className="">
                                <>
                                <Button className="h-7 gap-2 rounded-3xl bg-black text-xs text-white hover:bg-black">Placeholder</Button>
                                </>
                           
                        </div>
                    </div>
                </Wrapper>
            </header>

        </div>
    )
};

export default Navbar
