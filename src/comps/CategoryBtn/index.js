
import React, {useState} from "react";
import * as FeatherIcon from "react-icons/fi";

export default function CategoryBtn({name, type, selected, menuIcon, onclick, phaseVendors}) {
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
    } else if (type==="list") {
        btnStyle= "list-btn-container";
        iconStyle="white-plus";
        Icon=FeatherIcon["FiX"];
    }
  
     return(
            <div className={"category-btn-container" + " " + btnStyle + " " + (removed&&"removed-category")} onClick={()=>{

                    // !select?onclick.push(name):onclick.splice(onclick.indexOf(name), 1);
                    !selected?setSelect(!select):(setRemoved(true));


                if (!select===true){
                    if (phaseVendors!==null) {
                        if (sessionStorage.getItem("currentData")) {
                            let vendors = JSON.parse(sessionStorage.getItem("currentData")).vendors;
                            let tempVendors = [];
                            for (let i = 0; i < vendors.length; i++) {
                                if (vendors[i].category.indexOf(name) !== -1) {
                                    tempVendors.push(vendors[i])
                                }
                            }
                            onclick(phaseVendors.concat(tempVendors));
                        }
                    } else {
                        onclick.push(name)
                    }
                } else {
                    if (phaseVendors!==null) {
                        let tempVendors = phaseVendors;
                        for (let i=0; i < tempVendors.length; i++){
                            tempVendors[i].category.indexOf(name)!==-1&&tempVendors.splice(i, 1)
                        }
                        onclick([].concat(tempVendors));
                    } else {
                        onclick.splice(onclick.indexOf(name), 1);
                    }

                }

            }}>
                <p>{name}</p>
                <Icon className ={"category-icon" + " " + iconStyle} size={18}/>
            </div>
            )
}

CategoryBtn.defaultProps = {
    name:"Default Category",
    type: "bubble",
    selected: false,
    onclick: ()=>{},
    phaseVendors: null
};
