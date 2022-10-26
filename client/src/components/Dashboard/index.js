import React from 'react'

import Sidebar from '../Sidebar'

function Dashboard() {
  return (
    <>
    <Sidebar active={"dashborad"}/>
    <div className="ml-[300px]">
        <div className="h-screen flex justify-center items-center">Dashboard</div>
    </div>
    </>
  )
}

export default Dashboard