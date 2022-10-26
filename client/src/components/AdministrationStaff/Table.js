import React from 'react'

function Table() {
  return (
    
<div className="overflow-x-auto mx-10 mt-4 relative shadow-md ">
<h1 className="text-white text-xl mt-8 mb-4">All Administration Staff</h1>

    <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-md uppercase bg-blueGrayLight  text-gray-300">
            <tr>
                <th scope="col" className="py-3 px-6">
                    Name
                </th>
                <th scope="col" className="py-3 px-6">
                    Email
                </th>
                <th scope="col" className="py-3 px-6">
                    Actions
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-blueGrayExtraLight border-b border-gray-500 text-gray-200">
                <th scope="row" className="py-4 px-6 font-medium  whitespace-nowrap">
                    Janith Madarainghe
                </th>
                <td className="py-4 px-6">
                    janith@gmail.com
                </td>
                <td className="py-4 px-2 flex">
                    <button href="/" className="mx-2 font-medium text-green-400 hover:text-green-500 duration-150">Edit</button>
                    <button href="/" className="mx-2 font-medium text-red-400 hover:text-red-500 duration-150">Delete</button>
                </td>
            </tr>
            <tr className="bg-blueGrayExtraLight border-b border-gray-500 text-gray-200">
                <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                    Achini Cathu
                </th>
                <td className="py-4 px-6">
                    achini@gmail.com
                </td>
                <td className="py-4 px-2 flex">
                    <button href="/" className="mx-2 font-medium text-green-400 hover:text-green-500 duration-150">Edit</button>
                    <button href="/" className="mx-2 font-medium text-red-400 hover:text-red-500 duration-150">Delete</button>
                </td>
            </tr>
            <tr className="bg-blueGrayExtraLight border-b border-gray-500 text-gray-200">
                <th scope="row" className="py-4 px-6 font-medium  whitespace-nowrap">
                    Janith Madarainghe
                </th>
                <td className="py-4 px-6">
                    janith@gmail.com
                </td>
                <td className="py-4 px-2 flex">
                    <button href="/" className="mx-2 font-medium text-green-400 hover:text-green-500 duration-150">Edit</button>
                    <button href="/" className="mx-2 font-medium text-red-400 hover:text-red-500 duration-150">Delete</button>
                </td>
            </tr>
            <tr className="bg-blueGrayExtraLight border-b border-gray-500 text-gray-200">
                <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                    Achini Cathu
                </th>
                <td className="py-4 px-6">
                    achini@gmail.com
                </td>
                <td className="py-4 px-2 flex">
                    <button href="/" className="mx-2 font-medium text-green-400 hover:text-green-500 duration-150">Edit</button>
                    <button href="/" className="mx-2 font-medium text-red-400 hover:text-red-500 duration-150">Delete</button>
                </td>
            </tr>
           
        </tbody>
    </table>
</div>


  )
}

export default Table