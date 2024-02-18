import { useEffect } from "react";
import "./Timer.css"

export default function Timer({count, setCount, cps}) {
    useEffect(() => {
        
        let interval = setInterval(() => {
            setCount(prevCount => prevCount + cps)
    
            
        }, 1000);

    localStorage.setItem("count", count.toString())
    localStorage.setItem("cps", cps.toString())

        return () => clearInterval(interval)
    }, [count, setCount]
    )

    const handleClick = () => {
        setCount(count + cps)
    }

    return (
        <>
        <div className="timerContainer">
        <h2 className="counter">{count}</h2>
        <button className="timerBtn" onClick={handleClick}>Click!</button>
        </div>
        </>
    )
}