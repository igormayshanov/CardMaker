import React, { FC } from 'react';
import SvgSelector from '../SvgSelector';
import style from './InsertBlockElement.module.css';
type InsertBlockItemProps = {
    value: string;
    onClick: (e: React.MouseEvent<HTMLOrSVGElement>) => void;
}

const InsertBlockItem: FC<InsertBlockItemProps> = ({ value, onClick }) => {
    return (
        <div className={style.InsertBlockElement}>
            <div className={style.InsertBlockElementIcon}>
                <SvgSelector id={value}/>
                onClick = {onClick}
            </div>
        </div>
    );
}

export default InsertBlockItem;