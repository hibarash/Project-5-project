import { useState } from "react";




function BottomsCard({setIsOpen, itemProp, users, isOpen}){
    let {clothing_type, image} = itemProp
    //console.log(toggleToCart)
    console.log((users, [users]))
    
    // const [addToCart, setAddTocart] = useState(false)
    function toggleToCart(){
    
        setIsOpen(!isOpen)
        let newItems = {
            name: clothing_type,
            cart_id: users.carts.id,
            item_id: itemProp.id,
            image_url: image
        }
        fetch("/carts",{
            method:"POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(newItems)
        })
        // add r.ok and .thens
    

    // setAddTocart(addToCart);
    // console.log(setAddTocart)    
    }
    
    // console.log("props", props.itemProp.top.id)


    return(

        <div>
            <h1>{clothing_type} </h1>
            <img src={image} alt=""/>
            <button onClick={ toggleToCart} >Add Bottoms</button>

        </div>
    )
}



export default BottomsCard; 