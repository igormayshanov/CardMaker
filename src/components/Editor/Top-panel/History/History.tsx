
import style from './History.module.css';
import HistoryButton from './HistoryButton/HistoryButton';

export const History = () => {
    return (
        <div className={style.historyBlock}>
            <HistoryButton text='&#8634;'></HistoryButton>
            <HistoryButton text='&#8635;'></HistoryButton>
        </div>
    )
}