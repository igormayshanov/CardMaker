import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { SetPositionBlock } from '../../../store/actionCreators/actionCreators';
import { RootState } from '../../../store/store';
import { positionType } from '../../../types/types';
import style from './Canvas.module.css';
import { useDragAndDrop } from './useDragAndDrop';

const Canvas = (props: Props) => {
    const x: number = props.img[0].positionX;
    const y: number = props.img[0].positionY;
    const imgBlock = useRef<HTMLImageElement>(null);
    useDragAndDrop(imgBlock, { x: 20, y: 30 }, props.SetPositionBlock);
    return (
        <div>
            <div id='canvas' className={style.canvas}
                style={{
                    background: props.backgroundColor,
                    width: props.width + 'px',
                    height: props.height + 'px',
                }}>
                    {
                        props.img.map((item, index) =>
                        <img ref={imgBlock} src={props.img[index].src} key={Date.now()} alt="Image" 
                        width={props.img[index].width} 
                        height={props.img[index].height}
                        style ={{
                            top: props.img[index].positionY,
                            left: props.img[index].positionX,
                         }}
                        />)
                    }
            </div>
        </div>
    )
}

function mapStateToProps(state: RootState) {
    return {
        backgroundColor: state.editor.canvas.backgroundColor,
        width: state.editor.canvas.canvasSize.width,
        height: state.editor.canvas.canvasSize.height,
        img: state.editor.canvas.layouts,
    };
};

const mapDispatchToProps = (dispatch: Function) => {
    return {
      SetPositionBlock: (x: number, y: number) => dispatch(SetPositionBlock(x, y)),
    }
  }

type stateProps = ReturnType<typeof mapStateToProps>;
type dispatchProps = ReturnType<typeof mapDispatchToProps>;
type Props = stateProps & dispatchProps;

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);