import React,{useState} from "react";
import "../font.scss";
import * as FeatherIcon from "react-icons/fi";
const allowedChars = "1234567890()- ";
export default function InputField({title,placeholder,width,required,star,number,addButton, marginTop}) {
    let Icon=FeatherIcon["FiPlus"];
    const [phone, setPhone] = useState("");

   let formatedNumber = (event) =>{
        let val = event.target.value;
       if (number){
        let char = val[val.length-1];
        console.log(char);
        if (val.length===10){
            val = val.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
        }
        if (allowedChars.indexOf(char)!==-1|| val.length===0){
            setPhone(val);
        }
       }
        else {
            setPhone(val);
        }
    };

    return(
        <div className={"input-field-container"}>
            <p className={"input-title" + " " + (!marginTop&&"remove-title-margin-top")}>{title}{star?<span className={(star&&"input-field-star")}>*</span>:""}</p>
            <div className = {"input-icon-cont"}>
            <input
                maxLength={number?14:255}
                pattern={number&&"[0-9 ]+"}
                onChange={formatedNumber}
                value={phone}
                type="text"
                style={{width}}
                className={"input-field" + " " + (required&&"input-field-required")}
                placeholder={placeholder}/>
                {addButton&&<Icon size={22} color={"white"} className={"icon-style"}/>}
            </div>
        </div>
        )
}

InputField.defaultProps = {
    title:"",
    placeholder:"",
    width:"100%",
    required:false,
    star:false,
    number:true,
    addButton:false,
    marginTop: true
};
