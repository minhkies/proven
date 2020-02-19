import React from "react";
import "../font.scss"
export default function InputField({title,placeholder,width,required,asterix}) {
    return(
        <div className={"input-field-container"}>
            <p className={"input-title"}>{title} {asterix?<span className={(asterix&&"input-field-asterix")}>*</span>:""}</p>
            <input style={{width:width}} className={"input-field" + " " + (required&&"input-field-required")} placeholder={placeholder}/>
        </div>
        )
}

InputField.defaultProps = {
    title:"",
    placeholder:"",
    width:"100%",
    required:false,
    asterix:false
};
