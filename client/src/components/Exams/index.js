import React from 'react'

import Sidebar from '../Sidebar'

function Exams() {
  return (
    <>
    <Sidebar active={"exams"}/>
    <div className="ml-[300px]">
        <div className="h-screen flex justify-center items-center">Exams</div>
    </div>
    </>
  )
}

export default Exams