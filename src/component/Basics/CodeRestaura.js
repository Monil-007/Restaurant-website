import React,{ useState } from "react";
import "./style.css";
import Menu from "./menuAPI.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList=[
    ...new set(
    Menu.map((currElem)=>{
        return currElem.category;
    })
    ),
    "ALL",
];

const Restaurant = ()=>{

    const [menuData,setMenuData]=useState(Menu);
    const [menuList,setMenuList]=useState(uniqueList);

    const filterItem=(category)=>{
        if(category==="ALL"){
            setMenuData(Menu);
            return;
        }

        const updatedList=Menu.filter((currElem)=>{
            return currElem.category===category;
        });

        setMenuData(updatedList);
        return;
    }
    return (
    <>
        <Navbar filterItem={filterItem} menuList={menuList} />
        <MenuCard menuData={menuData} /> 
    </>
    );
};


export default Restaurant;