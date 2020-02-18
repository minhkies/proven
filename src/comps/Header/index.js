import React from "react";

export default function Header({headingTxt, subTxt}){
    return(
        <div className={"header-container"}>
            <p className={"heading-txt"}>{headingTxt}</p>
            <p className={"sub-txt"}>{subTxt}</p>
        </div>
    )
}

Header.defaultProps = {
    headingTxt: "Header",
    subTxt: "Sub-header",
};
