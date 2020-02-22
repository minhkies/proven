import React, {useState} from "react";
import * as FeatherIcon from "react-icons/fi";
import "../font.scss"
export default function CategoryBtn({name, type, selected, menuIcon}) {
    let [removed, setRemoved] = useState(false);
    let [select, setSelect] = useState(false);

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
            <div className={"category-btn-container" + " " + btnStyle + " " + (removed&&"removed-category")} onClick={()=>{
                !selected?setSelect(!select):(setRemoved(true));
            }}>
                <p>{name}</p>
                <Icon className ={"category-icon" + " " + iconStyle} size={22}/>
            </div>
            )
}

CategoryBtn.defaultProps = {
    name:"Default Category",
    type: "bubble",
    selected: false
};
