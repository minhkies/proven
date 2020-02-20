import React,{useState} from "react";
import "../font.scss";
import * as FeatherIcon from "react-icons/fi";
export default function InputField({title,placeholder,width,required,asterix,number,addbutton}) {
    let Icon=FeatherIcon["FiPlus"];
    const [phone, setPhone] = useState("");
   var formatedNumber = (event) =>{
       if (number){
        let val = event.target.value;
        val = val.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
       setPhone(val);
       }
        else {
            setPhone("");
        }
    }
    
    return(
        <div className={"input-field-container"}>
            <p className={"input-title"}>{title} {asterix?<span className={(asterix&&"input-field-asterix")}>*</span>:""}</p>
            <div className = {"input-icon-cont"}>
            <input
            maxLength={number?15:255}
            pattern={number&&"[0-9 ]+"}
            onChange={formatedNumber}
            value={number?phone:undefined}
            type="text"
            style={{width}} 
            className={"input-field" + " " + (required&&"input-field-required")}
            placeholder={placeholder}/>
            {addbutton&&<Icon size={22} color={"white"} className={"icon-style"}/>}
            </div>
        </div>
        )
}

InputField.defaultProps = {
    title:"",
    placeholder:"",
    width:"100%",
    required:false,
    asterix:false,
    number:true,
    addbutton:false
};
