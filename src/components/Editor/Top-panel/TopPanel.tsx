import React from 'react';
import style from './TopPanel.module.css';
import DropdownList from './DropdownList/DropdownList';
import ColorPicker from './ColorPicker/ColorPicker';
import HistoryButton from './History/History';
import { fontFamily, fontSize, fontWeights } from '../../../constants/constants';
import CanvasSize from './CanvasSize/CanvasSize';
import InsertBlockList from './InsertBlock/InsertBlockList';
import { connect } from 'react-redux';


const TopPanel = () => (
    <div className={style.topPanel}>
        <HistoryButton text='&#8634;'></HistoryButton>
        <HistoryButton text='&#8635;'></HistoryButton>
        <CanvasSize />
        <InsertBlockList />
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