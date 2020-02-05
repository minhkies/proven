import React from "react";
import "../font.scss"
export default function InputField({title,placeholder}) {
    return(
        <div>
            <p className={"input-title"}>{title}</p>
            <input className={"input-field"} placeholder={placeholder}/>
        </div>
        )
}

InputField.defaultProps = {
    title:"",
    placeholder:""
};
