import React from "react";

export default function FormContainer({col, formHeading, children}){
    return(
        <div className={"form-container" + " " + "form-col-" + col}>
            <p className={"form-heading"}>{formHeading}</p>
            <div className={"child-container"}>
                {children}
            </div>
        </div>
    )
}

FormContainer.defaultProps = {
    col: 2,
    formHeading: "Form heading",
    children: null
};
