import React from 'react'
import { Separator } from './ui/separator'

const HP_Footer = () => {
  var ver = process.env.VERSION;
  const date = new Date();
  const year = date.getFullYear();
  return (
    <main className='text-center text-sm text-lime-300 statitc bottom-0'>
      <Separator className='my-4' />
      Copyright &copy; {year} <a href="/info/m-c/m-c" className="hover:underline hover:text-sky-400">VilmaoGroup</a>. All rights reserved
      <br />
      This is version:{ver}:DEV
      <br />
      Made by <a href="/info/m-c/vdt" className='hover:underline hover:text-sky-500'>VilmaoDevTeam</a>

      
    </main>
  )
}

export default HP_Footer