import { connect } from 'react-redux';
import { SetCanvasHeightAction, SetCanvasWidthAction } from '../../../../../store/actionCreators/editorActionCreator';
import { RootState } from '../../../../../store/store';
import style from './CanvasSizeInput.module.css'

const CanvasSizeInput = (props: propsType) => {
    return (
        <div className={style.canvasSize}>
            <input className={style.canvasSize__item}
                type="number" step="1"
                // min={props.minWidth}
                // max={props.maxWidth}
                value={props.canvas.width}
                onChange={(e) => props.SetCanvasWidthAction(Number(e.target.value))}
            />
            <input className={style.canvasSize__item}
                type="number" step="1"
                // min={props.canvas.minHeight}
                // max={props.canvas.maxHeight}
                value={props.canvas.height}
                onChange={(e) => props.SetCanvasHeightAction(Number(e.target.value))}
            />
        </div>
    );
}

function mapStateToProps(state: RootState) {
    return {
        canvas: state.canvasReducer,
    }
}

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