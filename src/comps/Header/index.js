import React from "react";

export default function Header({headingTxt, subTxt, font}){
    return(
        <div className={"header-container"}>
            <p style={{fontSize:font}} className={"heading-txt"}>{headingTxt}</p>
            <p className={"sub-txt"}>{subTxt}</p>
        </div>
    )
}

Header.defaultProps = {
    headingTxt: "Header",
    subTxt: "",
    font:"30px"
};
