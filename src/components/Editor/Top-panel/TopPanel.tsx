import React from 'react';
import style from './TopPanel.module.css';
import DropdownList from './DropdownList/DropdownList';
import ColorPicker from './ColorPicker/ColorPicker';
import HistoryButton from './History/History';
import { font, fontSize, icons } from '../../../constants/constants';
import CanvasSize from './CanvasSize/CanvasSize';
import InsertBlockList from './InsertBlock/InsertBlockList';

const TopPanel = () => (
    <div className={style.topPanel}>
        <HistoryButton text='&#8634;'></HistoryButton>
        <HistoryButton text='&#8635;'></HistoryButton>
        <CanvasSize />
        <InsertBlockList icons={icons} />
        <div className={style.textProperties}>
            <DropdownList items={font}></DropdownList>
            <DropdownList items={fontSize}></DropdownList>
            <ColorPicker />
        </div>
        <ColorPicker />
    </div>
)

export default TopPanel;