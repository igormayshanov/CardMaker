import React from 'react';
import style from './InsertBlock.module.css';
import { ReactComponent as InsertImageIcon } from "../../../../img/insertImage.svg";
import { ReactComponent as CircleIcon } from "../../../../img/insertCircle.svg";
import { ReactComponent as RectangleIcon } from "../../../../img/insertRectangle.svg";
import { ReactComponent as TriangleIcon } from "../../../../img/insertTriangle.svg";
import { ReactComponent as TextIcon } from "../../../../img/insertText.svg";
import InsertBlockElement from './InsertBlockElement/InsertBlockElement';

const InsertBlock = () => {
    return (
            <div className={style.InsertBlock}>
                <div className={style.InsertBlockElements}>
                    <InsertBlockElement icon={InsertImageIcon} onClick={() => { }} />
                    <InsertBlockElement icon={CircleIcon} onClick={() => { }} />
                    <InsertBlockElement icon={TriangleIcon} onClick={() => { }} />
                    <InsertBlockElement icon={RectangleIcon} onClick={() => { }} />
                    <InsertBlockElement icon={TextIcon} onClick={() => { }} />
                </div>
            </div>
    );
}

export default InsertBlock;
