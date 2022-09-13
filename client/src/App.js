import logo from './logo.svg';
import './App.css';
import { BrowserRouter} from "react-router-dom";
import {Switch, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import Tops from './components/Tops';

import Bottoms from './components/Bottoms';
import Shoes from './components/Shoes';
import Accessory from './components/Accessories';
import User from './components/User';
import NewUser from './components/NewUserForm';
import Login from './components/Login';
import Cart from './components/Carts';
import { useEffect, useState } from 'react';
import styled from 'styled-components'



function App() {
  const [items, setItems] = useState([])
  const [carts, setCarts] = useState([])
  const [users, setUsers] = useState([])
  const [newUser, setNewUser] = useState([])
  const [userData, setUserData] = useState([])
  const [itemsInCart, setItemsInCart] = useState([])
  
  useEffect(() => {
    fetch("/current")
    .then(r => r.json())
    .then((data) => setUsers(data))
    // console.log(users) //worked
  }, [])
  console.log(users)

  function deleteFromCart(id){
    fetch(`/cart_items/${id}`,{
      method:"DELETE",
    }).then((res) => res.json());
    setItemsInCart(itemsInCart.filter((itemsInCart) => itemsInCart.id !==id))
  }



  // function addNewUser(newUser){
  // setUserData([newUser, ...userData]) // is this right?
  //   fetch("/users", {
  //     method: "POST",
  //     headers: {"Content-Type": "application/json"},
  //     body: JSON.stringify(newUser)
  //   })
  //   console.log(users) i dont see this in the console
  // }
  // useEffect(() => {
  //   fetch("/items")
  //   .then(r => r.json())
  //   .then((data) => {setItems(data)
  //     console.log(data) //worked
  // })
  //   //console.log(data) //worked
  // }, [])


return (<>
  <h1> Should see navBar here</h1>

    <NavBar/>
    <Switch>

    <Route exact path="/item/1"> 
    <Tops itemTops={items} users={users}/> 
    {/* <section className="layout"><Tops itemsToMap={items} /></section>  */}
    </Route>
    <Route exact path="/item/2"> 
    <Bottoms itemBottoms={items}  /> 
    </Route>
    <Route exact path="/item/3"> 
    <Shoes /*itemShoes={items}*/  />
    </Route>
    <Route exact path="/item/4"> 
    <Accessory /*itemsToMap={items}*/  />
    </Route>
    <Route exact path="/users/">
    <User userToLog={users}  /> 
    </Route>
    
    <Route exact path="/create">
    <NewUser sendUserData={userData}/> 
    </Route>
    <Route exact path="/login"> 
    <Login userData={userData} setUserData={setUserData} />
    </Route>
    <Route exact path="/carts">
    <Cart cartsToMap={carts} 
    deleteFromCart={deleteFromCart}/>{/* is this right? */}
    </Route> 

    
    
    </Switch>
    

  

  </>);
}

export default App;
