"use client"
import React from 'react'
import Link from 'next/link'
import { BackgroundGradient } from '@/components/ui/background-gradient'
function page() {
    return (
        <div className="py-12 bg-gray-900 mt-40">
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Order Confirmed</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Congratulations🎁</p>
                </div>
            </div>
            <div className="mt-10 mx-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                <BackgroundGradient
                            className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">Your shipment is on the way</p>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">Thanking for shopping with us</p>
                                    <Link href={"/"}>
                                    Explore More Products
                                    </Link>
                                </div>
                </BackgroundGradient>
                </div>
            </div>
           
        </div>
      )
}

export default page
