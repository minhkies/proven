import React from "react";

export default function FormContainer({col, formHeading, marginTop, children}){
    return(
        <div className={"form-container" + " " + "form-col-" + col}>
            <p className={"form-heading" + " " + (marginTop&&"form-heading-margin")}>{formHeading}</p>
            <div className={"child-container"}>
                {children}
            </div>
        </div>
    )
}

FormContainer.defaultProps = {
    col: 2,
    formHeading: "Form heading",
    children: null,
    marginTop: true
};
