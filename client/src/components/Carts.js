import { useEffect, useState } from 'react';
import CartCard from './CartCard';




function Carts(props) {
    const [cart, setCart] = useState([])
    // console.log(cart)
    const [cartItems, setCartItems] = useState([])
    console.log("yay items showed:", cartItems)
    
    
    // const [addItems, setAddItems] = useState([])
    useEffect(() => {
        fetch("/carts")
        .then(res => res.json())
        .then(arrayWithOneCartObj =>{
            setCart(arrayWithOneCartObj[props.id])
            setCartItems(arrayWithOneCartObj[0].items)
            // console.log("get items in cart:", arrayWithOneCartObj[0].items)
            
    })
        
    },[])
    

    return(<>
    <h1>Shopping cart</h1>
    {/* array of obj that were added to the cart  */}
    <div>
    {cartItems.map( 
        (eachItem) => {
            return(<CartCard
            key={eachItem.id}
            setCartItems={setCartItems}
            itemProp={eachItem}
            deleteFromCart={props.deleteFromCart}
            />)
        }
    )
}

    </div>


    
    
    </>)
}

export default Carts