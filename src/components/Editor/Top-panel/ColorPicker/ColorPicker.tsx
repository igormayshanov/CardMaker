import { FC } from 'react';
import { connect, useDispatch } from 'react-redux';
import { setBackgroundColor } from '../../../../store/actionCreators/editorActionCreator';
import style from './ColorPicker.module.css';

interface ColorPickerProps {
    getParam: (value: string) => void;
}

const ColorPicker: FC<ColorPickerProps> = ({getParam}) => {
   
    const dispatch = useDispatch();
    function getAttribute (e: React.ChangeEvent<HTMLInputElement>) {
        const attribute = e.target.value;
        dispatch(getParam(attribute));
    }
    return (
        <div className={style.colorPicker}>
            <input className={style.activeColors} type="color" onChange={(e) => getAttribute(e)}/>
        </div>
    );
}

export default connect()(ColorPicker);
