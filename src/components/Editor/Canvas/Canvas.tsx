import { connect } from 'react-redux';
import { RootState } from '../../../store/store';
import style from './Canvas.module.css';
import Img from './Img/Img';
import ImgCollection from './Img/ImgCollection';
import TextCollection from './Text/TextCollection';
import { useDragAndDrop } from './useDragAndDrop';

const Canvas = (props: Props) => {

    return (
        <div id='canvas' className={style.canvas}
            style={{
                background: props.backgroundColor,
                width: props.width + 'px',
                height: props.height + 'px',
            }}>
            <ImgCollection />
            <TextCollection />
        </div>
    )
}

function mapStateToProps(state: RootState) {
    return {
        backgroundColor: state.backgroundColor,
        width: state.widthReducer,
        height: state.heightReducer,
    };
};

type stateProps = ReturnType<typeof mapStateToProps>;
//type dispatchProps = ReturnType<typeof mapDispatchToProps>;
type Props = stateProps;

export default connect(mapStateToProps)(Canvas);