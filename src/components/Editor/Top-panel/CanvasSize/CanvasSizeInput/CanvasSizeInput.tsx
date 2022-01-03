import React from 'react';
import { connect } from 'react-redux';
import { SetCanvasHeightAction, SetCanvasWidthAction } from '../../../../../store/actionCreators/actionCreators';
import { RootState } from '../../../../../store/store';
import style from './CanvasSizeInput.module.css'

const CanvasSizeInput = (props: propsType) => {
    return (
        <div className={style.canvasSize}>
            <input className={style.canvasSize__item}
                type="number" step="1"
                min={props.minWidth}
                max={props.maxWidth}
                value={props.width}
                onChange={(e) => props.SetCanvasWidthAction(Number(e.target.value))}
            />
            <input className={style.canvasSize__item}
                type="number" step="1"
                min={props.minHeight}
                max={props.maxHeight}
                value={props.height}
                onChange={(e) => props.SetCanvasHeightAction(Number(e.target.value))}
            />
        </div>
    );
}

function mapStateToProps(state: RootState) {
    return {
        width: state.editor.canvas.canvasSize.width,
        maxWidth: state.editor.canvas.canvasSize.maxWidth,
        minWidth: state.editor.canvas.canvasSize.minWidth,
        height: state.editor.canvas.canvasSize.height,
        maxHeight: state.editor.canvas.canvasSize.maxHeight,
        minHeight: state.editor.canvas.canvasSize.minHeight,
    }
};

const mapDispatchToProps = (dispatch: Function) => {
    return {
        SetCanvasWidthAction: (newWidth: number) => dispatch(SetCanvasWidthAction(newWidth)),
        SetCanvasHeightAction: (newHeight: number) => dispatch(SetCanvasHeightAction(newHeight)),
    }
}

type stateProps = ReturnType<typeof mapStateToProps>
type dispatchProps = ReturnType<typeof mapDispatchToProps>

type propsType = stateProps & dispatchProps

export default connect(mapStateToProps, mapDispatchToProps)(CanvasSizeInput);