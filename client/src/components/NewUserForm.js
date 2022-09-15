import { useState } from 'react'


function NewUserForm({setNewUser}) {
    const [userName, setUserName] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [userEmail, setUserEmail] = useState("")
    // const [user, setUser] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        console.log(e)
        fetch("/signup", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: userName,
                email: userEmail,
                password: userPassword,
            }),
        }).then((res) => {
            if (res.ok) {
                res.json().then((newUser) => setNewUser(newUser));
            }
        })
    }
    return(
        
        <form className='form' onSubmit={handleSubmit}>
            <h1> Welcome To Ilya & Co. </h1>
            
            <h4 className="create-account">  Create Account</h4>
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
            <button className='add-new-user-button' type="submit"> Add User </button>

        </form>
    )
}
export default NewUserForm