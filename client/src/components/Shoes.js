import ShoesCard from "./ShoesCard";
import { useEffect, useState } from 'react';



function Shoes(props){
    const [items, setItems] = useState([])
    
    useEffect(() => {
        fetch("/items")
        .then((r) => r.json())
        .then((data) => {
            const itemShoes = data.filter((eachItem)=> (eachItem.clothing_type === "shoes"))
        console.log(itemShoes)
        setItems(itemShoes)
    });
        
    }, [])

    return(<>
    <h1>Shoes</h1>
    {items.map(
        (eachItem)=>{
            return(<ShoesCard
            key={(eachItem)}
            itemProp={eachItem}/>)
        } 
    )}
    
        

    </>)
}

export default Shoes