import React from 'react';
import { isPropertySignature } from 'typescript';
import style from './SidebarItem.module.css';

type ButtonProps = {
    text: string,
    onClick: (e: React.MouseEvent<HTMLElement>) => void,
}

const SidebarItem = (props: ButtonProps) => {
    return (
            <a className={style.SidebarItem} href="" onClick={props.onClick}>{props.text}</a>
    );
}

export default SidebarItem;