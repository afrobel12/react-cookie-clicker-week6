import { useState } from "react";
import Timer from "./components/Timer";
import TreeCard from "./components/TreeCard";
import { upgradeButtons  } from "./components/Upgrades";
import ResetButton from "./components/ResetButton";
import "./App.css"


export default function App() {
  const[cps, setCps] = useState( 
    parseInt(localStorage.getItem("cps"))
  )
  const[count, setCount] = useState(
    parseInt(localStorage.getItem("count"))
  )
  const handleBuy = (itemPrice, itemPlus) => {
    if (count >= itemPrice) {
      setCount(count - itemPrice)
      setCps(prevCount => prevCount + itemPlus) 
    } 
    else {
      alert("not enough cookies")
    }
  
  }
  return (
    <div className="mainContainer">
      <Timer count={count} setCount={setCount} cps={cps} />
      <ResetButton resetCount={setCount} resetCps={setCps}/>
      <div className="upgradeContainer">
      {upgradeButtons.map((item) => (
        <TreeCard
        key={item.id}
        name={item.name}
        price={item.price}
        plus={item.plus}
        onBuy={ () => {handleBuy(item.price, item.plus)} }
        />
        ))}
       </div>
    </div>
  )
}