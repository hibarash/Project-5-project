import BottomsCard from "./BottomsCard";
import { useEffect, useState } from 'react';



function Bottoms({itemBottoms, users}){
    const [items, setItems] = useState([])
    const [isOpen, setIsOpen] = useState([])
    
    useEffect(() => {
        fetch("/items")
        .then((r) => r.json())
        .then((data) => {
            const itemBottoms = data.filter((eachItem)=> (eachItem.clothing_type === "bottoms"))
        console.log(itemBottoms)
        setItems(itemBottoms)
    });
        
    }, [])

    return(<>
    <h1>Bottoms</h1>
    {items.map(
        (eachItem)=>{
            return(<BottomsCard
            users={users}
            key={(eachItem.id)}
            itemProp={eachItem}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            />)
        } 
    )}
    
        

    </>)
}


export default Bottoms