import { connect } from 'react-redux'
import { RootState } from '../../../../store/store';
import Img from './Img';
import style from './ImgCollection.module.css';

const ImgCollection = (props: StateProps) => {

    return (
        <div className={style.ImgCollection}>
            {
                (props.ImgCollection.length > 0) ?
                    props.ImgCollection.map((item, index) => <Img
                        id={props.ImgCollection[index].id}
                        img={props.ImgCollection[index]}
                        key={`img-${props.ImgCollection[index].id}`}
                        index={index}
                        src={props.ImgCollection[index].src}
                        x={props.ImgCollection[index].x}
                        y={props.ImgCollection[index].y}
                        width={props.ImgCollection[index].width}
                        height={props.ImgCollection[index].height}
                        selected={props.ImgCollection[index].selected}
                    />) : undefined
            }
        </div>
    )
}

type StateProps = ReturnType<typeof mapStateToProps>
type Props = StateProps;

function mapStateToProps(state: RootState) {
    return {
        ImgCollection: state.ImgContentReducer,
    }
}

export default connect(mapStateToProps)(ImgCollection);