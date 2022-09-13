import { useState } from "react";



function CartCard( props ){
    console.log("cart props:", props)
    const [itemsInCart, setItemsInCart] = useState([])
    // const {deleteFromCart} = props
    // console.log(deleteFromCart)
    function deleteFromCart(id){
        fetch(`/cart_items/${id}`,{
        method:"DELETE",
        }).then((res) => res.json());
        setItemsInCart(itemsInCart.filter((itemsInCart) => itemsInCart.id !==id))
    }
    

    



    return(<>
    <div>
        <h1>{props.itemProp.clothing_type}</h1>
        <h2>{props.itemProp.price}</h2>
        <img src={props.itemProp.image}/>
        <button onClick={deleteFromCart}> Delete Item </button> 
    </div>

    
    </>)
}
export default CartCard
//{props.itemProp.image_url}