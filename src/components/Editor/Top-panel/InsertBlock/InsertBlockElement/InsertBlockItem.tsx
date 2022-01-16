import React, { FC } from 'react';
import SvgSelector from '../SvgSelector';
import style from './InsertBlockElement.module.css';

type InsertBlockItemProps = {
    value: string;
    onClick: any;
}

const InsertBlockItem: FC<InsertBlockItemProps> = ({ value, onClick}) => {
    return (
        <div className={style.InsertBlockElement}>
            <div className={style.InsertBlockElementIcon} onClick = {onClick}>
               <SvgSelector id={value} />
            </div>
        </div>
    );
}

export default InsertBlockItem;