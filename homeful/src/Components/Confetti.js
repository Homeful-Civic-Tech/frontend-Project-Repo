import React, { useCallback } from "react";
//import Confetti from "https://cdn.skypack.dev/canvas-confetti@1";



export default function ConfettiAnim(){
    // const onClick = useCallback(() => {
    //     Confetti({
    //       particleCount: 150,
    //       spread: 60
    //     });
    //   }, []);onClick

    return(
     <div className="button-submit" style=   {{textAlign: "center"}}>
        <button className="confetti-button"  style={{
        height: "30px",
        border: "0",
        outline: "0",
        color: "white",
        fontSize: "15px",
        fontWeight: "400",
        position: "relative",
        zIndex: "3",
        background: "#00274E",
        fontFamily: "Source Sans Pro, sans-serif",
        cursor: "pointer"
        }}>Book Reservation
       </button>
     </div>
    )
}