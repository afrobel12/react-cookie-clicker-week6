import "./Treecard.css"
export default function TreeCard(props) {
    return (
        <div className="treeCardContainer">
            <p>{props.id}</p>
            <h2>{props.name}</h2>
            <p>Price${props.price} Cookies</p>
            <p> + {props.plus}  CPS</p>
            <button className="buyBtn" onClick={props.onBuy}>Buy</button>
            
        </div>
    )
}