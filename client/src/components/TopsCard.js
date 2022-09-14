import styled from "styled-components";



function TopsCard({setIsOpen, itemProp, users, isOpen}){
    let {clothing_type, image} = itemProp
    // console.log(itemProp)
    
    // console.log(items)
// console.log("what is this", props.item.clothing_type)
    console.log(users)
    function toggleToCart(){

        // console.log(toggleToCart)
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
    // .then((res) => {
    //     if (res.ok) {
    //         res.json().then((newItems) => )
    //     }
    // })
    // add r.ok and .thens
    
    }
    return(
        <div className="image-container">
            <h1>{clothing_type} </h1>
            <img src={image} alt=""/>
            <button onClick={ toggleToCart }>Add Top</button>

        </div>
    )

}
export default TopsCard