import React, { useCallback } from "react";
import confetti from "https://cdn.skypack.dev/canvas-confetti@1";



export default function ConfettiAnim(){
    const onClick = useCallback(() => {
        confetti({
          particleCount: 150,
          spread: 60
        });
      }, []);

    return(
     <div className="button-submit" style=   {{textAlign: "center"}}>
        <button className="confetti-button" onClick={onClick} style={{
        height: "30px",
        border: "0",
        outline: "0",
        color: "white",
        fontSize: "15px",
        fontWeight: "400",
        position: "relative",
        zIndex: "3",
        background: "#8288ff",
        fontFamily: "Source Sans Pro, sans-serif",
        cursor: "pointer"
        }}>Book Reservation
       </button>
     </div>
    )
}