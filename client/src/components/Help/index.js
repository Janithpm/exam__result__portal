import React from 'react'

import Sidebar from '../Sidebar'

function Help() {
  return (
    <>
    <Sidebar active={"help"}/>
    <div className="ml-[300px]">
        <div className="h-screen flex justify-center items-center">Help</div>
    </div>
    </>
  )
}

export default Help