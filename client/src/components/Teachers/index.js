import React from 'react'
import Sidebar from '../Sidebar'
import Header from './Header'
import Table from './Table'
import AddNewTeacher from './AddNewTeacher'
// import PopUpModal from './PopUpModal'
import Footer from '../Footer'
function Teachers() {
  return (
    <>
    <Sidebar active={"teachers"}/>
    <div className="ml-[300px]">
        <Header pageTitle="teachers" userType="Admin"/>
        <AddNewTeacher/>
        <Table/>
        <Footer />
    </div>
    </>
  )
}

export default Teachers