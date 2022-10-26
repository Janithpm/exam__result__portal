import React from 'react'

import Sidebar from '../Sidebar'

function Results() {
  return (
    <>
    <Sidebar active={"results"}/>
    <div className="ml-[300px]">
        <div className="h-screen flex justify-center items-center">Results</div>
    </div>
    </>
  )
}

export default Results