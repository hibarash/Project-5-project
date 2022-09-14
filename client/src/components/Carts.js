import { useEffect, useState } from 'react';
import CartCard from './CartCard';

function Carts(props) {
    const [cart, setCart] = useState([])
    // console.log(cart)
    const [cartItems, setCartItems] = useState([])
    const [serializedCartItems, setSerializedCartItems] = useState([])
    // console.log("yay items showed:", serializedCartItems)
    const [newCartItems, setNewCartItems] = useState([])
    const [errors, setErrors] = useState([])
    
    
    // const [addItems, setAddItems] = useState([])
    useEffect(() => {
        fetch("/carts")
        .then(res => res.json())
        .then(arrayWithOneCartObj =>{
            setCart(arrayWithOneCartObj[props.id])
            setCartItems(arrayWithOneCartObj[0].items)
            setSerializedCartItems(arrayWithOneCartObj[0].formatted_cart_items)
            console.log("get items in cart:", arrayWithOneCartObj[0].items) 
    })
    },[])
    function deleteFromCart(id){
        console.log("success:", id)
        fetch(`/cart_items/${id}`,{
            method:"DELETE",
        }).then((res) => res.json());
        const filterItems = serializedCartItems.filter((itemInCart) => (itemInCart.id_to_delete !==id))
        
        setSerializedCartItems(filterItems)
        console.log("filtered stuff:", filterItems)
    }
    // function deleteFromCart(id){
    //     console.log("success:", id)
    //     fetch(`/cart_items/${id}`,{
    //         method:"DELETE",
    //     }).then((res) => {
    //         if (res.ok){
    //             setSerializedCartItems((serializedCartItems) => 
    //             serializedCartItems.filter((itemsInCart) => itemsInCart.id !==id)
    //             )
    //         } else {
    //             res.json().then((err) => 
    //             setSerializedCartItems({data: null, error: err.error, status: "rejected"})
    //             )
    //         }
    //         setErrors([])
            
    //     })
    // }

        // const filterItems = serializedCartItems.filter((itemsInCart) => itemsInCart.id !==id)
      
        // setSerializedCartItems(filterItems)
        
    //}

    // const filterItems = serializedCartItems.filter((itemsInCart) => itemsInCart.id !==id)
    // setSerializedCartItems(filterItems)
    // console.log("filtered stuff:", filterItems)

    return(<>
    <h1>Shopping cart</h1>
    {/* array of obj that were added to the cart  */}
    <div>
    {/* {cartItems.map( 
        (eachItem) => {
            return(<CartCard
            key={eachItem.id}
            setCartItems={setCartItems}
            itemProp={eachItem}
            deleteFromCart={props.deleteFromCart}
            />)
        }
    )
    } */}
    {serializedCartItems.map(
        (eachFormattedCartItem) => {
            return (<CartCard
            key={eachFormattedCartItem.id}
            setSerializedCartItems={setSerializedCartItems}
            itemProp={eachFormattedCartItem}
            deleteFromCart={deleteFromCart}

            
            />)
        }
    )}

    </div>


    
    
    </>)
}


export default Carts;