import React, {useState} from "react";

export default function FormContainer({col, formHeading, formSub, star, marginTop, children, onclick, edit, pos}){
    let [editTxt, setEditTxt] = useState(false);
    return(
        <div className={"form-container" + " " + "form-col-" + col}>
            <p className={"form-heading" + " " + (marginTop&&"form-heading-margin")}>{formHeading}</p>
            <div className={"child-container"}>
                {(formSub!==""&&col===1)&&<p className={"form-sub"}>{formSub}{star&&<span className={"form-star"}>*</span>}</p>}
                {children}
            </div>
            {col===3&&<p className={"edit-btn"} onClick={()=>{
                let tempArr = edit;
                tempArr[pos] = !tempArr[[pos]];
                onclick([].concat(tempArr));
                setEditTxt(!editTxt);
            }}>
                {
                    editTxt?"Done":"Edit"
                }
            </p>}
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
