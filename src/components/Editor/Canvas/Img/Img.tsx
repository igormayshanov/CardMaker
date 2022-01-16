import React, { useRef, useState } from 'react'
import { connect } from 'react-redux';
import { SetPositionBlock } from '../../../../store/actionCreators/contentActionCreator';
import { SetPositionImg } from '../../../../store/actionCreators/imgActionCreator';
import { RootState } from '../../../../store/store';
import { positionType } from '../../../../types/types';
import { useDragAndDrop } from '../useDragAndDrop';
import style from './Img.module.css';

interface ImgProps {
    src: string;
    index: number;
    x: number;
    y: number;
    width: number;
    height: number;
}

const Img = (props: ImgProps & PropsType) => {

    const imgBlock = useRef<HTMLImageElement>(null);
    const position: positionType = { x: props.x, y: props.y };
    useDragAndDrop(imgBlock, position, props.SetPositionImg, props.index);
    
    return (
        <img
            className={style.img}
            ref={imgBlock}
            onDragStart={(e) => e.preventDefault()}
            key={props.index}
            alt=""
            src={props.src}
            width={props.width}
            height={props.height}
            style={{
                position: "absolute",
                display: "block",
                left: position.x,
                top: position.y,
            }}
        />
    )
}

// type statePropsType = ReturnType<typeof mapStateToProps>;
type dispatchPropsType = ReturnType<typeof mapDispatchToProps>;
type PropsType = dispatchPropsType;

// function mapStateToProps(state: RootState) {
//         return {
//             imgContent: state.contentReducer,
//         };
//     };

const mapDispatchToProps = (dispatch: Function) => {
    return {
        SetPositionImg: (position: positionType, id: number) => dispatch(SetPositionImg(position, id)),
    }
}

export default connect(null, mapDispatchToProps)(Img);