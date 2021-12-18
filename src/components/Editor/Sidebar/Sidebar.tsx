import React from 'react';
import { clickHandler } from '../../../constants/constants';
import { addRectangle } from '../../../functions/functions';
import style from './Sidebar.module.css';
import SidebarItem from './SidebarItem/SidebarItem';

const Sidebar = () => {
    return (
        <nav className={style.sidebar}>
            <SidebarItem text={'New card'} onClick={addRectangle}></SidebarItem>
            <SidebarItem text={'Save card'} onClick={clickHandler}></SidebarItem>
            <SidebarItem text={'Template'} onClick={clickHandler}></SidebarItem>
            <SidebarItem text={'Filters'} onClick={clickHandler}></SidebarItem>
        </nav>
    );
}

export default Sidebar;