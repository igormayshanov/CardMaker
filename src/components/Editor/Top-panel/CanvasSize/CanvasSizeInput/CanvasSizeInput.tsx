import React, { FC } from 'react';
import { canvasSize } from '../../../../../types/typesTS';
import style from './CanvasSizeInput.module.css'

type CanvasSizeProps = {
    size: canvasSize,
}

const CanvasSizeInput: FC<CanvasSizeProps> = ({ size }) => {
    return (
        <div className={style.canvasSize}>
            <input className={style.canvasSize__item} type="number" step="1" min={size.minWidth} max={size.maxWidth} value={size.width} />
            <input className={style.canvasSize__item} type="number" step="1" min={size.minHeight} max={size.maxHeight} value={size.height} />
        </div>
    );
}

export default CanvasSizeInput;