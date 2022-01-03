import React from 'react';
import { defaultCanvasSize } from '../../../../constants/constants';
import { canvasSize } from '../../../../types/types';
import style from './CanvasSize.module.css';
import CanvasSizeInput from './CanvasSizeInput/CanvasSizeInput';

const CanvasSize = () => {
    const size: canvasSize = defaultCanvasSize;
    return (
        <div className={style.canvasSize}>
            <CanvasSizeInput/>
        </div>
    );
}

export default CanvasSize;
