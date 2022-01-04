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
                    {
                        props.img.map((item, index) =>
                        <img src={props.img[index].src} alt="" width="189" height="255"/>)
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


type stateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Canvas);