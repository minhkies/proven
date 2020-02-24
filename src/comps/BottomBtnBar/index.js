import React from "react";
import {Link} from "react-router-dom";

export default function BottomBtnBar({leftBtnTxt, leftBtnOnClick, rightBtn1Txt, rightBtn1OnClick, rightBtn2Txt, rightBtn2OnClick,nextStep}) {
    return(
        <div className={"bottom-bar-container"}>
            <div className={"left-btn-container"}>
                <div className={leftBtnTxt&&"left-btn"} onClick={leftBtnOnClick}>
                    <p>{leftBtnTxt}</p>
                </div>
            </div>
            <div className={"right-btn-container"}>
                <div className={"right-btn-1"} onClick={rightBtn1OnClick}>
                    <p>{rightBtn1Txt}</p>
                </div>
                <Link to={nextStep} className={"right-btn-2"} onClick={rightBtn2OnClick}>
                    <p>{rightBtn2Txt}</p>
                </Link>
            </div>
        </div>
    )
}


BottomBtnBar.defaultProps = {
    leftBtnTxt: "",
    leftBtnOnClick: ()=>{},
    rightBtn1Txt: "Cancel",
    rightBtn1OnClick: ()=>{},
    rightBtn2Txt: "Next Step",
    rightBtn2OnClick: ()=>{},

};
