<<<<<<< HEAD
import React,{useState} from "react";
import * as FeatherIcon from "react-icons/fi";
import "../font.scss"
export default function CategoryBtn({name,selected,menuIcon,onClick}) {
    const [state,setState] = useState(false);
        if (!state){
            selected="inactiveBtn"
            setState(true);
        }
        else {
            selected="activeBtn"
            setState(false);
        }
    
=======
import React, {useState} from "react";
import * as FeatherIcon from "react-icons/fi";
import "../font.scss"
export default function CategoryBtn({name, type, selected, menuIcon}) {
    let [removed, setRemoved] = useState(false);
    let [select, setSelect] = useState(false);

>>>>>>> b23894e7bae829192104c5b7ab6a28004a7f7c01
    let Icon = FeatherIcon[menuIcon];
    let btnStyle = null;
    let iconStyle = null;

    if (type==="bubble"){
        if (select===true || selected===true){
            btnStyle= "category-btn-container-select";
            iconStyle="white-plus";
            Icon=FeatherIcon["FiCheck"];
        }
        else {
            btnStyle= "category-btn-container-no-select";
            iconStyle="gray-plus";
            Icon=FeatherIcon["FiPlus"];
        }
    } else {
        btnStyle= "list-btn-container";
        iconStyle="white-plus";
        Icon=FeatherIcon["FiX"];
    }
  
     return(
<<<<<<< HEAD
            <div className={"category-btn-container" + " " + btnStyle} onClick={()=>setState(!state)}>
=======
            <div className={"category-btn-container" + " " + btnStyle + " " + (removed&&"removed-category")} onClick={()=>{
                !selected?setSelect(!select):(setRemoved(true));
            }}>
>>>>>>> b23894e7bae829192104c5b7ab6a28004a7f7c01
                <p>{name}</p>
                <Icon className ={"category-icon" + " " + iconStyle} size={22}/>
            </div>
            )
}

CategoryBtn.defaultProps = {
    name:"Default Category",
<<<<<<< HEAD
    selected:"inactiveBtn",
    onClick: ()=>{}
=======
    type: "bubble",
    selected: false
>>>>>>> b23894e7bae829192104c5b7ab6a28004a7f7c01
};
