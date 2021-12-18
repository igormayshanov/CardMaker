import React, { FC } from 'react';
import style from './ColorPicker.module.css';

const ColorPicker: FC = () => {
    
    return (
        <div className={style.colorPicker}>
            <input className={style.activeColors} type="color"/>
        </div>
    );
}

export default ColorPicker;