import React, {useState} from 'react'
import { useHistory } from "react-router-dom";

function Login({userData, setUserData}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    //const [name, setName] = useState("")
    const [errors, setErrors] = useState([])
    let history = useHistory();

    function onSubmit(e) {
        e.preventDefault()
        const user ={
            email, 
            password, 
            
        }
        fetch ('/login',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({
                email: email,
                password: password
            }),
        })
        .then(res =>{
            if (res.ok){
                res.json().then(user => {
                    setUserData(user)
                    
                })
            }
            else { res.json().then(json => setErrors(json.errors))}
        })
    }
    return(<>
        {userData.name ? 
            <h1> logged in {userData.name}</h1>
            :
        <form className='form' onSubmit={onSubmit} >
            <h1> Login </h1>
            
            <label className='label'>Email Address</label>
            <input className='text-input' placeholder='Email Address' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label className='label'>Password</label>    
            <input className='text-input' placeholder='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button className='button' type="submit">Login</button>

        </form>
            }
    </>)
}
export default Login