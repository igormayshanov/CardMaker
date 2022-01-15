import { connect } from 'react-redux';
import { setBackgroundColor } from '../../../../store/actionCreators/editorActionCreator';
import style from './ColorPicker.module.css';



const ColorPicker = (props: dispatchProps) => {
    
    return (
        <div className={style.colorPicker}>
            <input className={style.activeColors} type="color" onChange={(e) => props.setBackgroundColor(e.target.value)}/>
        </div>
    );
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        setBackgroundColor: (newColor: string) => dispatch(setBackgroundColor(newColor)),
    }

}

type dispatchProps = ReturnType<typeof mapDispatchToProps>

export default connect(null, mapDispatchToProps)(ColorPicker);
