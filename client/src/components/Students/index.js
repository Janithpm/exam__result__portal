import React from 'react'
import Sidebar from '../Sidebar'
import Header from './Header'
import Table from './Table'
import AddNewStudent from './AddNewStudent'
// import PopUpModal from './PopUpModal'
import Footer from '../Footer'
function Students() {
  return (
    <>
    <Sidebar active={"students"}/>
    <div className="ml-[300px]">
        <Header pageTitle="students" userType="admin"/>
        <AddNewStudent/>
        <Table/>
        <Footer />
    </div>
    </>

  )
}

export default Students