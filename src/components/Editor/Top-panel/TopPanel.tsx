import style from './TopPanel.module.css';
import DropdownList from './DropdownList/DropdownList';
import ColorPicker from './ColorPicker/ColorPicker';
import { fontFamily, fontSize, fontWeights } from '../../../constants/constants';
import CanvasSize from './CanvasSize/CanvasSize';
import InsertBlockList from './InsertBlock/InsertBlockList';
import { connect } from 'react-redux';
import { setColorText, setFontFamily, setFontSize, setFontWeight } from '../../../store/actionCreators/textActionCreator';
import { setBackgroundColor } from '../../../store/actionCreators/editorActionCreator';
import BackgroundImgInsert from './BackgroundToolbar/BackgroundImgInsert';
import { History } from './History/History';


const TopPanel = (props: DispatchProps) => (
    <div className={style.topPanel}>
        <History />
        <CanvasSize />
        <InsertBlockList />
        <div className={style.blockColumn}>
            <DropdownList elements={fontFamily} getParam={setFontFamily}> </DropdownList>
            <div className={style.blockRow}>
                <DropdownList elements={fontSize} getParam={setFontSize}> </DropdownList>
                <DropdownList elements={fontWeights} getParam={setFontWeight}> </DropdownList>
                <ColorPicker getParam={setColorText} />
            </div>

        </div>
        <div className={style.blockColumn}>
            <div className={style.blockRow}>
                <BackgroundImgInsert />
                <ColorPicker getParam={setBackgroundColor} />
            </div>
            <label>Фон</label>
        </div>

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