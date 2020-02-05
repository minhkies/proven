import React from 'react';
import CategoryBtn from "../comps/CategoryBtn";
import "../App.scss";

export default {
    title: 'CategoryBtn',
    component: CategoryBtn
}

export const defaultCategoryBtn = () => {
    return <CategoryBtn
    />
};

export const selectedCategoryBtn = () => {
    return <CategoryBtn
    menuIcon="FiCheck"
    name="Default Category"
    background="#729CA2"
    iconColor="white"
    fontColor="white"
    />
};

export const listCategoryBtn = () => {
    return <CategoryBtn
    menuIcon="FiX"
    name="This is going to be a long line of list"
    background="#729CA2"
    iconColor="white"
    fontColor="white"
    list="true"
    width="50%"
    />
};