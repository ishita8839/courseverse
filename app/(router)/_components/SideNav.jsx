"use client"

import { useUser } from '@clerk/nextjs';
import { BadgeIcon, BookOpen, GraduationCap, LayoutGrid, Menu, NewspaperIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

function SideNav() {
  const {user} = useUser();
  const menu = [
    {
      id: 6,
      name: 'Dashboard',
      icon: LayoutGrid,
      path: '/dashboard',
      auth:user
    },
    {
      id: 1,
      name: 'All Courses',
      icon: BookOpen,
      path: '/courses',
      auth:true

    },
    {
      id: 4,
      name: 'Store',
      icon: LayoutGrid,
      path: '/store',
      auth:true
    },
    {
      id: 2,
      name: 'Membership',
      icon: BadgeIcon,
      path: '/membership',
      auth:true
    },
    {
      id: 3,
      name: 'Be Instructor',
      icon: GraduationCap,
      path: '/instructor',
      auth:true
    },
    {
      id: 5,
      name: 'Newsletter',
      icon: NewspaperIcon,
      path: '/newsletter',
      auth:true
    }
  ];

  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);
  return (
    <div className="p-5 bg-white shadow-sm border h-screen">  
      <div className="hidden sm:block">
        <Image className="p-2" src="/Group 88.png" alt="logo" width={170} height={180} />
      </div>
      <div className="block sm:hidden">
        <Menu className="p-2" width={40} height={40} />
      </div>
      <hr className="mt-5" />
      <div className="mt-5">
        {menu.map((item) => item.auth && (
          <Link key={item.id} href={item.path}>
            <div className={`group flex gap-3 mt-1 p-3 text-[14px] items-center text-gray-500 cursor-pointer hover:bg-primary hover:text-white rounded-md transition-all ease-in-out-200
              ${path.includes(item.path)&&`bg-primary text-white`}
           `}>
              <item.icon className="group-hover:animate-bounce" />
              <h2 className="hidden sm:block">{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
