
function ShoesCard({setIsOpen, itemProp, users, isOpen}){
    let {clothing_type, image} = itemProp
    console.log((users, [users]))
    
    
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
    

    
    // console.log("props", props.itemProp.top.id)
    }
    return(

        <div>
            <h1>{clothing_type} </h1>
            <img src={image}  alt=""/>
            <button onClick={ toggleToCart }>Add Shoes</button>

        </div>
        //
    )
}

export default ShoesCard