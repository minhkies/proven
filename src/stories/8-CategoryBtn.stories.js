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

export const activeCategoryBtn = () => {
    return <CategoryBtn
    selected="activeBtn"
    />
};

export const listBtn = () => {
    return <CategoryBtn
    selected="listBtn"
    />
};
