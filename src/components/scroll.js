import React from "react";

export const Scroll  = (props) => {
    return (
        <div style={{ overflowY : 'scroll' , border : '1px solid black' , height : '600px' }}>
            {props.children}
        </div>
    )
}
