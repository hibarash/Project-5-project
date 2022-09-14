import { useState } from "react";




function BottomsCard({setIsOpen, itemProp, users, isOpen}){
    let {clothing_type, image, price} = itemProp
    //console.log(toggleToCart)
    console.log((users, [users]))
    
    // const [addToCart, setAddTocart] = useState(false)
    function toggleToCart(){
    
        setIsOpen(!isOpen)
        let newItems = {
            // name: clothing_type,
            cart_id: users.carts[0].id,
            item_id: itemProp.id,
            // image_url: image
        }
        fetch("/cart_items",{
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
        <section className="layout">
        <div>
            
            <img src={image} alt=""/>
            <div class="container">
            <h1>Bottoms </h1>
            <h2> ${price}</h2>
            <button onClick={ toggleToCart} >Add To Cart</button>
            </div>
        </div>
        </section>
    )
}



export default BottomsCard; 
{/* <section className="layout">
<div className="card">

    <img src={image} alt=""/>
    <div class="container">
        <h4>{clothing_type} </h4>
        <p> ${price}</p>
        <button onClick={ toggleToCart }>Add Top</button>
    </div>
    
</div>
</section> */}