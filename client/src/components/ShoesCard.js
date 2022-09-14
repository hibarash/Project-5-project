// import styled from "styled-components";

function ShoesCard({setIsOpen, itemProp, users, isOpen}){
    let {clothing_type, image, price} = itemProp
    console.log((users, [users]))
    
    
    function toggleToCart(){

        // console.log(toggleToCart)
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
    

    
    // console.log("props", props.itemProp.top.id)
    }
    return(
        <section className="layout">
        <div className="card">
        <div class="container">
            <h1>{clothing_type} </h1>
            <h2> ${price}</h2>
            <img src={image}  alt=""/>
            <button onClick={ toggleToCart }>Add To Cart</button>
        </div>
        </div>
        </section>
    
    )
}


export default ShoesCard