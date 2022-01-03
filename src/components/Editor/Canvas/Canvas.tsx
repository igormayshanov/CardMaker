import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../store/store';
import style from './Canvas.module.css';

const Canvas = (props: stateProps) => {
    return (
        <div>
            <div id='canvas' className={style.canvas}
                style={{
                    background: props.backgroundColor,
                    width: props.width + 'px',
                    height: props.height + 'px',
                }}>
            </div>
        </div>
    )
}

function mapStateToProps(state: RootState) {
    return {
        backgroundColor: state.editor.canvas.backgroundColor,
        width: state.editor.canvas.canvasSize.width,
        height: state.editor.canvas.canvasSize.height,
    };
};


type stateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Canvas);