import React, { FC } from 'react';
import style from './InsertBlockElement.module.css'; 
type InsertBlockElementProps = {
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
    onClick: () => void,
}

const InsertBlockElement: FC<InsertBlockElementProps> = ({icon: Icon, onClick}) => {
    return (
        <div className={style.InsertBlockElement}>
            <div className={style.InsertBlockElementIcon}>
                <Icon />
            </div>
        </div>
    );
}

export default InsertBlockElement;