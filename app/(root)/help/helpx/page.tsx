"use client"
import React from 'react'
import { usePathname, redirect, useParams } from 'next/navigation'
const HELPX = () => {
    const pathname = usePathname()
  
    return (
        <div><button className='border-2 rounded-[16px]'>{pathname}</button>sd</div>
  )
}

export default HELPX