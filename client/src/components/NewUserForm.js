import { useState } from 'react'


function NewUser() {
    const [userName, setUserName] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [userEmail, setUserEmail] = useState("")

    function addNewUser(newUser){

        fetch("/users", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newUser),
        })
    }
    return(
        <form className='form' onSubmit={(synthEvent) => {
            synthEvent.preventDefault()

            let newUser={
                name: userName,
                password: userPassword,
                email: userEmail
            }
            addNewUser(newUser)
        }}>
            <h4> Create Account</h4>
            <p className='field required'>
                <label className='label'>Full Name</label>
                <input className='text-input' type="text" placeholder='Full Name' value={userName} onChange={(synthEvent)=>{setUserName(synthEvent.target.value)}}/>
            </p>
            <p className='field required half'>
                <label className='label'>Email Address</label>
                <input className='text-input' type="text" placeholder='Email' value={userEmail} onChange={(synthEvent)=>setUserEmail(synthEvent.target.value)}/>
            </p>
            <p className='field required half'>
                <label className='label'>Password</label>
                <input className='text-input' type="password" placeholder='Password' value={userPassword} onChange={(synthEvent)=>setUserPassword(synthEvent.target.value)}/>
            </p>
            <button className='button' type="submit"> Add User </button>

        </form>
    )
}
export default NewUser