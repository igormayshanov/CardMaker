import React, { useRef, useState } from 'react'
import { connect } from 'react-redux';
import { ResizeBlock, SetPositionBlock, SetSelectedBlock } from '../../../../store/actionCreators/contentActionCreator';
import { SetPositionImg } from '../../../../store/actionCreators/imgActionCreator';
import { RootState } from '../../../../store/store';
import { cardImageType, cardTextType, positionType, sizeType } from '../../../../types/types';
import { useDragAndDrop } from '../useDragAndDrop';
import { useResize } from '../useResizeBlock';
import style from './Img.module.css';

interface ImgProps {
    id: string;
    img: cardImageType;
    src: string;
    index: number;
    x: number;
    y: number;
    width: number;
    height: number;
    selected: boolean;
}

const Img = (props: ImgProps & dispatchPropsType) => {

    const img: cardImageType = props.img;
    // let src: string = "";
    // if (img.src) {
    //     src = img.src;
    // }
    const imgStyle = getBlockStyle(img);
    const imgBlock = useRef<HTMLDivElement>(null);
    const pointLeftTop = useRef<HTMLDivElement>(null);
    const pointRightTop = useRef<HTMLDivElement>(null);
    const pointLeftBottom = useRef<HTMLDivElement>(null);
    const pointRightBottom = useRef<HTMLDivElement>(null);
    const position: positionType = { x: props.x, y: props.y };
    const blockSize: sizeType = { width: props.width, height: props.height }
    useDragAndDrop(imgBlock, position, props.SetPositionImg, props.id);
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
        props.id,
    )
    // const setSelectedSelector = (select: string) => {     
    //     if (select != style.selected) ? style.selected : "";
    // };
    const selected: boolean = props.selected === true ? false : true;
    const select: string = props.selected === true ? style.selected : "";
   

    return (
        <div
            className={`${style.block} ${select}`}
            style={imgStyle}
            ref={imgBlock}
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
                onClick={(e) => props.SetSelectedBlock(selected, props.id)}
                className={style.img}
                key={props.id}
                alt=""
                src={props.src}
            />
            <div className={style.pointLeftBottom} ref={pointLeftBottom}></div>
            <div className={style.pointRightBottom} ref={pointRightBottom}></div>
        </div>
    );
}

type dispatchPropsType = ReturnType<typeof mapDispatchToProps>;

const mapDispatchToProps = (dispatch: Function) => {
    return {
        SetPositionImg: (position: positionType, id: string) => dispatch(SetPositionImg(position, id)),
        ResizeBlock: (newSize: sizeType, id: string) => dispatch(ResizeBlock(newSize, id)),
        SetSelectedBlock: (selected: boolean, id: string) => dispatch(SetSelectedBlock(selected, id))
    }
}

function getBlockStyle(img: cardImageType) {
    return {
        width: img.width,
        height: img.height,
        left: img.x,
        top: img.y,
    };
}

export default connect(null, mapDispatchToProps)(Img);