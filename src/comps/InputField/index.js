import React,{useState} from "react";
import "../font.scss";
import * as FeatherIcon from "react-icons/fi";
const allowedChars = "1234567890()$,- ";
export default function InputField({onChange,title,placeholder,width,required,star,number,addButton, marginTop, paddingBottom, setValue, onclick, scope, currentInp}) {
    let Icon=FeatherIcon["FiPlus"];
    const [inp, setInp] = useState("");

   let formattedNumber = (event) =>{
        let val = event.target.value;
       if (number){
        let char = val[val.length-1];
        if (val.length===10){
            val = val.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
        }
        if (allowedChars.indexOf(char)!==-1|| val.length===0){
            setInp(val);
        }
       }
        else {
            setInp(val);
        }
    };

    return(
        <div className={"input-field-container"}>
            <p className={"input-title" + " " + (!marginTop&&"remove-title-margin-top")}>{title}{star?<span className={(star&&"input-field-star")}>*</span>:""}</p>
            <div className = {"input-icon-cont"}>
            <input
                maxLength={number?14:255}
                pattern={number&&"[0-9 ]+"}
                onChange={e=>{
                    formattedNumber(e);
                    onChange(e);
                }}
                value={inp}
                type="text"
                style={{width,paddingBottom}}
                className={"input-field" + " " + (required&&"input-field-required")}
                placeholder={placeholder}/>
                {addButton&&<Icon size={22} color={"white"} className={"icon-style"} onClick={(e)=>{
                    onclick({...currentInp, scope: scope.concat(inp)});
                }}/>}
            </div>
        </div>
        )
}

InputField.defaultProps = {
    title:"",
    placeholder:"",
    width:"100%",
    paddingBottom:"",
    required:false,
    star:false,
    number:false,
    addButton:false,
    marginTop: true,
    onChange: ()=>{},
    onclick: ()=>{},
    scope: []
};
