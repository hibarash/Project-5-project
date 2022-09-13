<Route exact path="/item/2"> 
    <section className="layout"><Bottoms /*itemsToMap={items}*/  /></section> 
    </Route>
    <Route exact path="/item/3"> 
    <section className="layout"><Shoes /*itemsToMap={items}*/  /></section> 
    </Route>
    <Route exact path="/item/4"> 
    <section className="layout"><Accessory /*itemsToMap={items}*/  /></section> 
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
