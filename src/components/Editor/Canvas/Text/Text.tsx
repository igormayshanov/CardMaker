import React from 'react'
import { connect } from 'react-redux'
import { changeText } from '../../../../store/actionCreators/textActionCreator';
import { cardTextType } from '../../../../types/types';
import style from './Text.module.css';


interface TextComponentProps {
    index: number;
    text: cardTextType;
}

const Text = (props: TextComponentProps & DispatchProps) => {

    return (
        <input
            // onKeyDown={(e) => (this.style.width = ((this.value.length + 1) * 8) + 'px')}
            className={style.text}
            onChange={(e) => props.changeText(e.target.value, props.index)}
            type="text"
            defaultValue={props.text.value}
            style={{
                background: 'none',
                border: 'none',
                position: 'absolute',
                display: 'inline-block',
                fontSize: props.text.fontSize + 'px',
                fontFamily: props.text.fontFamily,
                fontWeight: Number(props.text.fontWeight),
                color: props.text.fontColor,
                top: props.text.y,
                left: props.text.x,
            }}
        />
    )
}

type DispatchProps = ReturnType<typeof mapDispatchToProps>

const mapDispatchToProps = (dispatch: Function) => {
    return {
        changeText: (newValue: string, id: number) => dispatch(changeText(newValue, id)),
    }
}

export default connect(null, mapDispatchToProps)(Text);