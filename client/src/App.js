import logo from './logo.svg';
import './App.css';
import { BrowserRouter} from "react-router-dom";
import {Switch, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import Tops from './components/Tops';
import Bottoms from './components/Bottoms';
import Shoes from './components/Shoes';
import Accessories from './components/Accessories';
import User from './components/User';
import NewUser from './components/NewUserForm';
import Login from './components/Login';
import Cart from './components/Carts';
import { useEffect, useState } from 'react';



function App() {
  const [items, setitems] = useState([])
  const [carts, setCarts] = useState([])
  const [users, setUsers] = useState([])
  const [newUser, setNewUser] = useState([])
  const [userData, setUserData] = useState([])
  
  
  useEffect(() => {
    fetch("/users")
    .then(r => r.json())
    .then((data) => setUsers(data))
    //console.log(data) worked
  }, [])

  function addNewUser(newUser){
  setUserData([newUser, ...userData]) // is this right?
    fetch("/users", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newUser)
    })
    //console.log(users) i dont see this in the console
  }


return (<>
  <h1> Should see navBar here</h1>

    <NavBar>
    <Switch>

    <Route exact path="/item/1"> 
    <section className="layout"><Tops itemsToMap={items} /></section> 
    </Route>
    <Route exact path="/item/2"> 
    <section className="layout"><Bottoms itemsToMap={items}  /></section> 
    </Route>
    <Route exact path="/item/3"> 
    <section className="layout"><Shoes itemsToMap={items} /></section> 
    </Route>
    <Route exact path="/item/4"> 
    <section className="layout"><Accessories itemsToMap={items} /></section> 
    </Route>
    <Route exact path="/users/">
      <section> <User userToLog={users}  /> </section>
    </Route>
    <Route exact path="/create">
      <section> <NewUser sendUserData={userData}/> </section>
    </Route>
    <Route exact path="/login">
      <section> <Login sendLogin={userData} /></section>
    </Route>
    <Route exact path="/cart/1">
      <section> <Cart cartsToMap={carts} /></section> {/* is this right? */}
    </Route>

    
    </Switch>
    </NavBar>

  

  </>);
}

export default App;
