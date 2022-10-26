import React, {useState} from 'react'

const UITextField = ({name, label, placeholder, type, value, onChange}) => (
    <div className="relative z-0 mb-6 w-full group">
        <input 
        type={type} 
        name={name} 
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder} 
        required=""
        autoComplete="off"
        className="block py-2.5 px-0 w-full text-md text-gray-200 bg-transparent border-0 border-b border-gray-300 appearance-non dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-teal-400 peer" 
        />
        <label 
        for={name} 
        className="peer-focus:font-medium absolute text-md text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-400 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">
            {label}
        </label>
    </div>
)


function AddNewAdminStaff() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

  return (
<form className="mx-10 mt-4 px-8 py-4 rounded bg-blueGrayLight">
    <h1 className="text-white text-xl mb-8">Add New Administration Staff</h1>
    
    <div className="grid md:grid-cols-2 md:gap-6">
        <UITextField name="firstName" label="Fisrt Name" placeholder=" " type="text" value={firstName} onChange={e => setFirstName(e.target.value)}/>
        <UITextField name="lastName" label="Last Name" placeholder=" " type="text" value={lastName} onChange={e => setLastName(e.target.value)}/>
    </div>
    <div className="grid md:grid-cols-2 md:gap-6">
        <UITextField name="email" label="Email" placeholder=" " type="email" value={email} onChange={e => setEmail(e.target.value)}/>
    </div>
    
    <div className="grid md:grid-cols-2 md:gap-6">
        <UITextField name="password" label="Password" placeholder=" " type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        <UITextField name="confirmPassword" label="Confirm Password" placeholder=" " type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
    </div>
    <button type="submit" className="focus:outline-none text-white bg-green-700 duration-200 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Save</button>
</form>

  )
}

export default AddNewAdminStaff