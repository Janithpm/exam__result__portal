import React from 'react'
import Sidebar from '../Sidebar'
import Header from './Header'
import Table from './Table'
import AddNewAdminStaff from './AddNewAdminStaff'
// import PopUpModal from './PopUpModal'
import Footer from '../Footer'
function Administration() {
  return (
    <>
    <Sidebar active={"administrationStaff"}/>
    <div className="ml-[300px]">
        <Header pageTitle="students" userType="admin"/>
        <AddNewAdminStaff/>
        <Table/>
        <Footer />
    </div>
    </>

  )
}

export default Administration