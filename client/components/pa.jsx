import React from "react";

const Pa=({tex})=>{
    return(
        <div>
     {
        setTimeout(() => {
            <p style={{color:"black"}}>{tex}</p>
        }, 1000)
     }

        </div>
    );
}

export default Pa;