import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4'>
      {/* search bar */}
      <div className="hidden md:flex items-center gap-2 text-sm rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image className='' src={"/search.png"} width={14} height={14} alt=''/>
        <input className="p-2 bg-transparent outline-none" type="text" placeholder="Search..."/>
      </div>
      {/* icon and user */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src={"/message.png"} width={20} height={20} alt=''/>
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src={"/announcement.png"} width={20} height={20} alt=''/>
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center text-white bg-purple-500 rounded-full text-sm">2</div>
        </div>
        <div className="flex flex-col">
          <div className="text-sm leading-3 text-gray-500 font-medium">John Doe</div>
          <div className="text-[10px] text-gray-400 text-right">Admin  </div>
        </div>
        <Image src={"/avatar.png"} width={24} height={24} alt='' className='rounded-full'/>
      </div>
    </div>
  )
}

export default Navbar