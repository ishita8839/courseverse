import React from 'react'
import SideNav from './_components/SideNav'
import Header from './_components/Header'

function layout({children}) {
  return (
    <div>
        <div className='sm:w-56 sm:block fixed'>
            <SideNav/>
        </div>
     <div className='sm:ml-56 ml-24'>
      <Header/>
     {children}
     </div>
    </div>
  )
}

export default layout
