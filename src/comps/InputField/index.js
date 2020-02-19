import React from "react";
import "../font.scss"
export default function InputField({title,placeholder,width}) {
    return(
        <div className={"input-field-container"}>
            <p className={"input-title"}>{title}</p>
            <input style={{width:width}} className={"input-field"} placeholder={placeholder}/>
        </div>
        )
}

InputField.defaultProps = {
    title:"",
    placeholder:"",
    width:"100%"
};
