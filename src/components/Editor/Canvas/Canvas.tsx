import { connect } from 'react-redux';
import { RootState } from '../../../store/store';
import style from './Canvas.module.css';
import ImgCollection from './Img/ImgCollection';
import TextCollection from './Text/TextCollection';

const Canvas = (props: Props) => {

    return (
        <div id='canvas' className={style.canvas}
            style={{
                backgroundImage: `url(${props.canvas.backgroundImg})`,
                background: props.canvas.backgroundColor,
                width: props.canvas.width + 'px',
                height: props.canvas.height + 'px',
                overflow: 'hidden',
            }}>
            <ImgCollection />
            <TextCollection />
        </div>
    )
}

function mapStateToProps(state: RootState) {
    return {
        canvas: state.canvasReducer,
    };
};

type stateProps = ReturnType<typeof mapStateToProps>;
//type dispatchProps = ReturnType<typeof mapDispatchToProps>;
type Props = stateProps;

export default connect(mapStateToProps)(Canvas);