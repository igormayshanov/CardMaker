import React from 'react';
import style from './TopPanel.module.css';
import DropdownList from './DropdownList/DropdownList';
import ColorPicker from './ColorPicker/ColorPicker';
import HistoryButton from './History/History';
import { fontFamily, fontSize, fontWeights } from '../../../constants/constants';
import CanvasSize from './CanvasSize/CanvasSize';
import InsertBlockList, { icons } from './InsertBlock/InsertBlockList';
import { connect } from 'react-redux';
import InputFile from './InputFile/InputFile';



const TopPanel = () => (
    <div className={style.topPanel}>
        <HistoryButton text='&#8634;'></HistoryButton>
        <HistoryButton text='&#8635;'></HistoryButton>
        <CanvasSize />
        <InputFile />
        <InsertBlockList icons={icons} />
        <div className={style.textProperties}>
            <DropdownList items={fontFamily}></DropdownList>
            <DropdownList items={fontSize}></DropdownList>
            <DropdownList items={fontWeights}></DropdownList>
            <ColorPicker />
        </div>
        <ColorPicker />
    </div>
)

export default connect()(TopPanel);