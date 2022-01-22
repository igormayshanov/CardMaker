import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { SetPositionBlock } from '../../../../store/actionCreators/contentActionCreator';
import { changeText } from '../../../../store/actionCreators/textActionCreator';
import { cardTextType, positionType } from '../../../../types/types';
import { useDragAndDrop } from '../useDragAndDrop';
import style from './Text.module.css';

interface TextComponentProps {
    index: number;
    x: number;
    y: number;
    text: cardTextType;
}

const Text = (props: TextComponentProps & DispatchProps) => {

    const txtBlock = useRef<HTMLImageElement>(null);
    const position: positionType = { x: props.x, y: props.y };
    useDragAndDrop(txtBlock, position, props.SetPosition, props.index);

    return (
        <div  onDragStart={(e) => e.preventDefault()}
        ref={txtBlock}
        style={{
            background: 'none',
            border: 'none',
            position: 'absolute',
            left: position.x,
            top: position.y,
        }}
        >
            <input
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
                    // top: props.text.y,
                    // left: props.text.x,
                }}
            />
        </div>

    )
}

type DispatchProps = ReturnType<typeof mapDispatchToProps>

const mapDispatchToProps = (dispatch: Function) => {
    return {
        changeText: (newValue: string, id: number) => dispatch(changeText(newValue, id)),
        SetPosition: (position: positionType, id: number) => dispatch(SetPositionBlock(position, id)),
    }
}

export default connect(null, mapDispatchToProps)(Text);