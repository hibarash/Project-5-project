import ShoesCard from "./ShoesCard";
import { useEffect, useState } from 'react';



function Shoes({itemsShoes, users}){
    const [items, setItems] = useState([])
    const [isOpen, setIsOpen] = useState([])
    
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
            users={users}
            key={eachItem.id}
            itemProp={eachItem}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            />)
        } 
    )}
    
        

    </>)
}

export default Shoes