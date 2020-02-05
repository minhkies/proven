import React from "react";
import "../font.scss"
export default function CategoryBtn({name,width,img,active}) {
    return(
        <div className={"categorybtn-container"}>
        <button style={{width,width}} type="button">{name}</button>
        </div>
        )
}

CategoryBtn.defaultProps = {
    name:"Demolition",
    width:"auto"
};
