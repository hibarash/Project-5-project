import React, {useState} from 'react'
import { useParams } from 'react-router-dom'

function User({userToLog}){
    console.log(userToLog)

    const [userToUpdate, setUserToUpdate] = useState("")
    const [userToDelete, setUserToDelete] = useState("")
    const [nameToUpdate, setNameToUpdate] = useState("")
    const [emailUpdate, setEmailUpdate] = useState("")
    const params = useParams()

    function updateUser(updatedInfo){
        fetch(`/users/${userToUpdate}`, {
            method:'PATCH',
            headers:{'Content-Type': "application/json"},
            body:JSON.stringify(updatedInfo)
        })
        .then(resp => {
            if (resp.ok){
                resp.json()
                .then (setUserToUpdate)
            }
        })
    }
    function handleDelete(id) {
        console.log(id)
        fetch(`/users/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
            if (res.ok) {
                userToLog(id)
            }
        })
        
    }

    return( <>
        <form className='form' onSubmit={(synthEvent) => {
            synthEvent.preventDefault()

            let updatedInfo ={
                name: nameToUpdate,
                email: emailUpdate
            
            }
        updateUser(updatedInfo)
        }}>
        <h1> Account Details</h1>
        <p className='field required'>
            <label className='label'> Name </label>
            <input className='text-input' type="text" placeholder="name" value={nameToUpdate} onChange={(synthEvent)=>{setNameToUpdate(synthEvent.target.value)}} />
        </p>
        <p className='field required'>
            <label className='label'>Email</label>
            <input className='text-input' type="text" placeholder="email" value={emailUpdate} onChange={(synthEvent)=>{setEmailUpdate(synthEvent.target.value)}} />
        </p>
        <button className='button' type='submit'> Edit </button>

        <button className='button' type='button' onClick={handleDelete()}> Delete Account </button>
    </form>
    </>)

}
export default User;