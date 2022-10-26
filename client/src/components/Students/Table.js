import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

function Table() {
    
    const [users, setUsers] = useState([])

    useEffect(() => {
        return () => {
            axios.get("http://localhost:5000/user/all")
            .then((res) => setUsers(res.data))
            .catch((err) => console.log(err))
        };
    }, [])

    const handleEdit = (id) => {
        console.log(id)
    }

    const handleDelete = async (id) => {
        fetch(`http://localhost:5000/user/`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({userId: id}),
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))

    }


  return (
    
<div className="overflow-x-auto mx-10 mt-4 relative shadow-md ">
<h1 className="text-white text-xl mt-8 mb-4">All Students</h1>

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
                    Year
                </th>
                <th scope="col" className="py-3 px-6">
                    GPA
                </th>
                <th scope="col" className="py-3 px-6">
                    Actions
                </th>
            </tr>
        </thead>
        <tbody>
                {
                    users.map((user) => (
                        <tr key={user._id} className="bg-blueGrayExtraLight border-b border-gray-500 text-gray-200">
                            <th scope="row" className="py-4 px-6 font-medium  whitespace-nowrap">
                                {user.name}
                            </th>
                            <td className="py-4 px-6">
                                {user.email}
                            </td>
                            <td className="py-4 px-6">
                                2nd
                            </td>
                            <td className="py-4 px-6">
                                3.5
                            </td>
                            <td className="py-4 px-2 flex">
                                <button href="/" className="mx-2 font-medium text-green-400 hover:text-green-500 duration-150">Edit</button>
                                <button href="/" className="mx-2 font-medium text-red-400 hover:text-red-500 duration-150" onClick={() => handleDelete(user._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
          
        </tbody>
    </table>
</div>


  )
}

export default Table