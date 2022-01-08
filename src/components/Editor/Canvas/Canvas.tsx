import { connect } from 'react-redux';
import { RootState } from '../../../store/store';
import style from './Canvas.module.css';
import Img from './Img/Img';
import { useDragAndDrop } from './useDragAndDrop';

const Canvas = (props: Props) => {

    return (
            <div id='canvas' className={style.canvas}
                style={{
                    background: props.backgroundColor,
                    width: props.width + 'px',
                    height: props.height + 'px',
                }}>
                <Img></Img>
            </div>
    )
}

function mapStateToProps(state: RootState) {
    return {
        backgroundColor: state.editor.canvas.backgroundColor,
        width: state.editor.canvas.width,
        height: state.editor.canvas.height,
    };
};

type stateProps = ReturnType<typeof mapStateToProps>;
//type dispatchProps = ReturnType<typeof mapDispatchToProps>;
type Props = stateProps;

export default connect(mapStateToProps)(Canvas);