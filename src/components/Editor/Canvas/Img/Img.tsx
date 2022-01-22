import React, { useRef, useState } from 'react'
import { connect } from 'react-redux';
import { ResizeBlock, SetPositionBlock } from '../../../../store/actionCreators/contentActionCreator';
import { SetPositionImg } from '../../../../store/actionCreators/imgActionCreator';
import { RootState } from '../../../../store/store';
import { cardImageType, cardTextType, positionType, sizeType } from '../../../../types/types';
import { useDragAndDrop } from '../useDragAndDrop';
import { useResize } from '../useResizeBlock';
import style from './Img.module.css';

interface ImgProps {
    img: cardImageType;
    src: string;
    index: number;
    x: number;
    y: number;
    width: number;
    height: number;
}

const Img = (props: ImgProps & PropsType) => {

    const img: cardImageType = props.img;
    let src: string = "";
    if (img.src) {
        src = img.src;
    }
    const imgStyle = getStyle(img);
    const imgBlock = useRef<HTMLDivElement>(null);
    const pointLeftTop = useRef<HTMLDivElement>(null);
    const pointRightTop = useRef<HTMLDivElement>(null);
    const pointLeftBottom = useRef<HTMLDivElement>(null);
    const pointRightBottom = useRef<HTMLDivElement>(null);
    const position: positionType = { x: props.x, y: props.y };
    const blockSize: sizeType = { width: props.width, height: props.height }
    useDragAndDrop(imgBlock, position, props.SetPositionImg, props.index);
    useResize(
        props.ResizeBlock,
        props.SetPositionImg,
        pointLeftTop,
        pointRightTop,
        pointLeftBottom,
        pointRightBottom,
        imgBlock,
        position,
        blockSize,
        props.index,
    )

    //  const select: string = img.id === props.selectBlock ? styles.selected : "";

    return (
        <div
            className={`${style.block} ${style.selected}`}
            style={imgStyle}
            ref={imgBlock}
            // onClick = {(e) => if()}
            onDragStart={(e) => e.preventDefault()}
        // style={{
        //     position: "absolute",
        //     display: "block",
        //     width: props.width,
        //     height: props.height,
        //     left: position.x,
        //     top: position.y,
        // }}
        >
            <div className={style.pointLeftTop} ref={pointLeftTop}></div>
            <div className={style.pointRightTop} ref={pointRightTop}></div>
            <img
                className={style.img}
                // ref={imgBlock}
                // onDragStart={(e) => e.preventDefault()}
                key={props.index}
                alt=""
                src={props.src}


            />
            <div className={style.pointLeftBottom} ref={pointLeftBottom}></div>
            <div className={style.pointRightBottom} ref={pointRightBottom}></div>
        </div>
    );
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
        ResizeBlock: (newSize: sizeType, id: number) => dispatch(ResizeBlock(newSize, id)),
    }
}

function getStyle(img: cardImageType) {
    return {
        width: img.width,
        height: img.height,
        left: img.x,
        top: img.y,
    };
}


export default connect(null, mapDispatchToProps)(Img);