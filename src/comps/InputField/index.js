import React from "react";
import "../font.scss"
export default function InputField({title,placeholder,width,required,star}) {
    return(
        <div className={"input-field-container"}>
            <p className={"input-title"}>{title} {star?<span className={(star&&"input-field-star")}>*</span>:""}</p>
            <input style={{width:width}} className={"input-field" + " " + (required&&"input-field-required")} placeholder={placeholder}/>
        </div>
        )
}

InputField.defaultProps = {
    title:"",
    placeholder:"",
    width:"100%",
    required:false,
    star:false
};
