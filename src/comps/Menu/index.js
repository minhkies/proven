import React, {useState} from 'react';
import MenuItem from "./MenuItem";

export default function Menu({menuItems, collapsed, selected}) {
    let [select, setSelect] = useState(selected);
    return(
        <div className={'menu-wrapper'}>
            {menuItems.map((o, i) => {
                select===o.menuTxt?o.active=true:o.active=false;
                return <MenuItem
                    {...o}
                    setSelect={setSelect}
                    collapsed={collapsed}
                />
            })}
        </div>
    )
}

Menu.defaultProps = {
    menuItems:[{
        menuIcon: "FiGrid",
        menuTxt: "Item 1"
    },{
        menuIcon: "FiFolder",
        menuTxt: "Item 2"
    }]
};
