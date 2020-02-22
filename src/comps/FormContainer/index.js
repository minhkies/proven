import React from "react";

export default function FormContainer({col, formHeading, formSub, star, marginTop, children}){
    return(
        <div className={"form-container" + " " + "form-col-" + col}>
            <p className={"form-heading" + " " + (marginTop&&"form-heading-margin")}>{formHeading}</p>
            <div className={"child-container"}>
                {(formSub!==""&&col===1)&&<p className={"form-sub"}>{formSub}{star&&<span className={"form-star"}>*</span>}</p>}
                {children}
            </div>
        </div>
    )
}

FormContainer.defaultProps = {
    col: 2,
    formHeading: "Form heading",
    children: null,
    marginTop: true,
    formSub: "",
    star: false
};
