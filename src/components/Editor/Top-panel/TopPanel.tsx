import React from 'react';
import style from './TopPanel.module.css';
import DropdownList from './DropdownList/DropdownList';
import ColorPicker from './ColorPicker/ColorPicker';
import HistoryButton from './History/History';
import { fontFamily, fontSize, fontWeights } from '../../../constants/constants';
import CanvasSize from './CanvasSize/CanvasSize';
import InsertBlockList from './InsertBlock/InsertBlockList';
import { connect } from 'react-redux';
import { setColorText, setFontFamily, setFontSize, setFontWeight } from '../../../store/actionCreators/textActionCreator';
import { setBackgroundColor } from '../../../store/actionCreators/editorActionCreator';


const TopPanel = (props: DispatchProps) => (
    <div className={style.topPanel}>
        <HistoryButton text='&#8634;'></HistoryButton>
        <HistoryButton text='&#8635;'></HistoryButton>
        <CanvasSize />
        <InsertBlockList />
        <div className={style.textProperties}>
            <DropdownList elements={fontFamily} getParam={setFontFamily}> </DropdownList>
            <DropdownList elements={fontSize} getParam={setFontSize}> </DropdownList>
            <DropdownList elements={fontWeights} getParam={setFontWeight}> </DropdownList>
            <ColorPicker title="Font color" getParam={setColorText} />
        </div>
        <ColorPicker title="Background color" getParam={setBackgroundColor} />
    </div>
)

type DispatchProps = ReturnType<typeof mapDispatchToProps>

const mapDispatchToProps = (dispatch: Function) => {
    return {
        setFontSize: (newFontSize: string) => dispatch(setFontSize(newFontSize)),
        setFontFamily: (newFontFamily: string) => dispatch(setFontFamily(newFontFamily)),
        setFontWeight: (newFontWeight: string) => dispatch(setFontWeight(newFontWeight)),
        setColorText: (newFontColor: string) => dispatch(setColorText(newFontColor)),
        setBackgroundColor: (newColor: string) => dispatch(setBackgroundColor(newColor)),
    }
}

export default connect(null, mapDispatchToProps)(TopPanel);