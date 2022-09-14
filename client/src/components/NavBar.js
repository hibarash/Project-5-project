import { NavLink } from "react-router-dom"
// import styled from "styled-components";


function NavBar(){
    return(
    

    <nav role="navigation" className="primary-navigation"> 
            <ul>
                <li> <NavLink to="/"> Home  </NavLink> </li>
                {/* <li>  Clothing </li> */}
                <ul className="dropdown" >
                 
                <li> <NavLink to="/item/1">  Tops </NavLink> </li>
                <li> <NavLink to="/item/2"> Pants</NavLink> </li>
                <li> <NavLink to="/item/3">  Shoes </NavLink> </li>
                <li> <NavLink to="/item/4">  Accessories </NavLink> </li>
                <li> <NavLink to="/carts"> Shopping Cart </NavLink> </li>
                
            </ul>
                
                <li> <NavLink to="/users"> Your Account  </NavLink> </li>
                <li> <NavLink to="/create"> Create an Account</NavLink> </li>
                <li> <NavLink to="/login"> Sign In </NavLink> </li>
            </ul>
    </nav>
    
    )
}
export default NavBar
