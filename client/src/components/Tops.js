import TopsCard from "./TopsCard";
import { useEffect, useState } from 'react';



// function Tops(props){
    function Tops({itemTops, users}){
    const [items, setItems] = useState([])
    const [isOpen, setIsOpen] = useState([])
    
    useEffect(() => {
        fetch("/items")
        .then((r) => r.json())
        .then((data) => {
            const itemTops = data.filter((eachItem)=> (eachItem.clothing_type === "top"))
        console.log(itemTops)
        setItems(itemTops)
    });
        
    }, [])

    return(<>
    <h1>Tops</h1>
    {items.map(
        (eachItem)=>{
            return(<TopsCard
            users={users}
            key={eachItem.id}
            itemProp={eachItem}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            />)
        } 
    )}
    {/* <button onClick={() => setIsOpen(true)}>Added to Cart</button> */}

    
        

    </>)
}
export default Tops