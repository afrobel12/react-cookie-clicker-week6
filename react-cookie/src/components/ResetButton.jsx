import "./ResetButton.css"
export default function ResetButton({resetCount, resetCps}) {
    return (
        <div className="resetBtnContainer">
        <button className="resetBtn" onClick={() => {resetCount(0), resetCps(1)}}>Reset</button>
        </div>
    )
}