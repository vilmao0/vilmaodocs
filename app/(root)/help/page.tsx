"use client"
import { Button } from '@/components/ui/button'
import { redirect, usePathname } from 'next/navigation'
import React from 'react'

const HELP_RD = () => {
        const pathname = usePathname()
        return(
            <main>
                <button onClick={redirect('/help/helpx')} className='items-center text-center'>{pathname}</button>
            </main>
        )
    }

export default HELP_RD