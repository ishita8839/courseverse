"use client";
import React from 'react'
import WelcomeBanner from './_components/WelcomeBanner'
import CourseList from './_components/CourseList'
import SideBanners from './_components/SideBanners';

function Courses() {
  return (
    <div className='grid md:grid-cols-4 grid-cols-1 p-5 gap-5'>
     <div className='col-span-3'>
      <WelcomeBanner/>
      <CourseList/>
     </div>
     <div>
    <SideBanners/>
     </div>
    </div>
  )
}

export default Courses
