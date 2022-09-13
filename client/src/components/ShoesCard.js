
function ShoesCard(props){
    
    // console.log("props", props.itemProp.top.id)

    return(

        <div>
            <h1>{props.itemProp.clothing_type} </h1>
            <img src={props.itemProp.image} alt=""/>
            <button>Add Shoes</button>

        </div>
    )
}
export default ShoesCard;