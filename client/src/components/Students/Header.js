import React from 'react'
import { Link } from 'react-router-dom'


function Header({pageTitle, userType}) {
  return (
    
<nav className="bg-blueGrayLight h-20 flex items-center px-10 py-2.5">
    
<div className="flex" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-3">
    <li className="inline-flex items-center">
      <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-white dark:text-gray-400 dark:hover:text-white">
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
        Dashboard
      </Link>
    </li>
    <li aria-current="page">
      <div className="flex items-center">
        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        <span className="ml-1 text-sm font-medium text-gray-300 md:ml-2 dark:text-gray-400">Students</span>
      </div>
    </li>
  </ol>
</div>

    
  <div className="grow"></div>
  <div className="md:order-2">
      <button type="button" className=" flex items-center font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <h1 className="text-white text-md mx-4">{userType}</h1>
        <img className="p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://xsgames.co/randomusers/avatar.php?g=male" alt="Bordered avatar"/>
      </button>

  </div>
</nav>

  )
}




export default Header