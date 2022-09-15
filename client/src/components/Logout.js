import { useHistory } from "react-router-dom";


function Logout({setUsers, users, handleLogout}){
    console.log(users)
    const history = useHistory()

    function handleLogout(){
        
        fetch('/logout', {
            method: 'DELETE',
        })
        .then((r) => r.json())
        .then(() => {setUsers(null)
        history.push('/login')
        });
        
    }



return(<>
{users ? (

    <h1 onClick={(e) => handleLogout()}> Click to logout  </h1>
    ) :(
    // <a href="http://localhost:3001/signup"> Byeeee</a>
    <h1> no user</h1>
)}

{/* <button>{(e) => handleLogout(e)} You are now logged off! </button> */}
</>




)
}
export default Logout