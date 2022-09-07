import { NavLink } from "react-router-dom"

function NavBar(){
    return(<>

    <nav role="navigation" className="primary-navigation">
            <ul>
                <li> <NavLink to="/"> <a href="#"> Home </a> </NavLink> </li>
                <li>  <a href="#"> Lets go shopping</a> 
                <ul className="dropdown">
                <li> <NavLink to="/item/1"> <a href="#"> Shirt </a> </NavLink> </li>
                <li> <NavLink to="/item/2"> <a href="#">Pants</a> </NavLink> </li>
                <li> <NavLink to="/item/3"> <a href="#"> Shoes</a> </NavLink> </li>
                <li> <NavLink to="/item/4"> <a href="#"> Accessories </a> </NavLink> </li>
                <li> <NavLink to="/cart/1"> <a href="#"> Shopping Cart </a> </NavLink> </li>
                
                </ul>
                </li>
                <li> <NavLink to="/users"> <a href="#"> Your Account </a> </NavLink> </li>
                <li> <NavLink to="/create"> <a href="#">Create an Account</a> </NavLink> </li>
                <li> <NavLink to="/login"> <a href="#">Already Have an Account?</a> </NavLink> </li>
            </ul>
    </nav>
    </>
    )
}
export default NavBar
