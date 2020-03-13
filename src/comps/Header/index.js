import React from "react";

export default function Header({headingTxt, subTxt, font, margin}){
    return(
        <div className={"header-container"}>
            <p style={{fontSize:font}} className={"heading-txt" + " " + (!margin&&"remove-bot")}>{headingTxt}</p>
            {subTxt!==""&&<p className={"sub-txt"}>{subTxt}</p>}
        </div>
    )
}

Header.defaultProps = {
    headingTxt: "Header",
    subTxt: "",
    font:"30px",
    margin: true
};
