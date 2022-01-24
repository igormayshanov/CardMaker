import React from 'react';
import style from './HistoryButton.module.css';

type HistoryButtonProps = {
    text: string,
}
const HistoryButton = (props: HistoryButtonProps) => {
    return (
        <a href="#" className={style.historyButton}>{props.text}</a>
    );

}

export default HistoryButton;