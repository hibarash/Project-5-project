import { useState } from "react";



function CartCard( props ){
    // console.log("cart props:", props)
    const [itemsInCart, setItemsInCart] = useState([])
    // const {deleteFromCart} = props
    // console.log(deleteFromCart)
    // function deleteFromCart(id){
    //     fetch(`/cart_items/${id}`,{
    //     method:"DELETE",
    //     }).then((res) => res.json());
    //     setItemsInCart(itemsInCart.filter((itemsInCart) => itemsInCart.id !==id))
    // }
    

    



    return(<>
    
    <div class="item">

        <div className="description">
        <h1>{props.itemProp.clothing_type}</h1>
        </div>

        <div className="image" > 
            <img src={props.itemProp.item_in_cart_to_delete.image}/>
        </div>

        <div className="button">
            <button onClick={(synthEvent) => {props.deleteFromCart(props.itemProp.id_to_delete)}}> X </button> 
        </div>

        <div className="total-price">
        <h2>${props.itemProp.item_in_cart_to_delete.price}</h2>
        </div>

    </div>

    
    </>)
}
export default CartCard
//{props.itemProp.image_url}