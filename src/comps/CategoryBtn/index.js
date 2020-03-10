
import React, {useState} from "react";
import * as FeatherIcon from "react-icons/fi";

export default function CategoryBtn({name, type, selected, menuIcon, onclick, phaseVendors, category, setCategory, currentInp}) {
    let [removed, setRemoved] = useState(false);
    let [select, setSelect] = useState(false);

    let Icon, btnStyle, iconStyle = null;

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
    } else if (type==="view"){
        btnStyle= "category-btn-container-select";
    }
  
     return(
            <div className={"category-btn-container" + " " + btnStyle + " " + (removed&&"removed-category") + " " + ((type!=="bubble"&&type!=="list")&&"even-padding-btn")} onClick={()=>{

                if (type==="list"||type==="bubble"){
                    // !select?onclick.push(name):onclick.splice(onclick.indexOf(name), 1);
                    !selected?setSelect(!select):(setRemoved(true));

                    if (!select===true){
                        if (phaseVendors!==null) {
                            if (sessionStorage.getItem("currentData")) {
                                let vendors = JSON.parse(sessionStorage.getItem("currentData")).vendors;
                                let tempVendors = phaseVendors;
                                for (let i = 0; i < vendors.length; i++) {
                                    if (vendors[i].category.indexOf(name) !== -1) {
                                        let count = 0;
                                        for (let x = 0; x < tempVendors.length; x++){
                                            if (vendors[i].name === tempVendors[x].name){
                                                count++
                                            }
                                        }
                                        if (count===0){
                                            tempVendors.push(vendors[i])
                                        }

                                    }
                                }
                                onclick([].concat(tempVendors));
                            }
                        } else {
                            onclick.push(name);
                        }
                        if (setCategory){
                            setCategory({...currentInp, category: category.concat(name)});
                        }

                    } else {
                        if (phaseVendors!==null) {
                            let tempVendors = phaseVendors;
                            let pos = [];
                            for (let i=0; i < phaseVendors.length; i++){
                                console.log("herrrre",i, phaseVendors.length, tempVendors);
                                if (tempVendors[i].category.indexOf(name)!==-1){
                                    pos.push(i);
                                }
                            }
                            if (pos!==[]){
                                for (let i=pos.length-1; i>=0; i--){
                                    tempVendors.splice(pos[i], 1);
                                }
                            }
                            onclick([].concat(tempVendors));
                        } else {
                            onclick.splice(onclick.indexOf(name), 1);
                        }

                        if (setCategory){
                            setCategory({...currentInp, category: category.splice(category.indexOf(name), 1)});
                        }

                    }
                }
            }}>
                <p>{name}</p>
                {(type==="bubble"||type==="list")&&<Icon className ={"category-icon" + " " + iconStyle} size={18}/>}
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
