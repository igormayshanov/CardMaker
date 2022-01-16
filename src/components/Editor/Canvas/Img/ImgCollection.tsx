import { connect, useSelector } from 'react-redux'
import { RootState } from '../../../../store/store';
import Img from './Img';
import style from './ImgCollection.module.css';

const ImgCollection = (props: StateProps) => {
  
    const hhh = useSelector((state: RootState) => state);
    console.log(hhh);

    return (
        <div className={style.ImgCollection}>
            {
                (props.ImgCollection.length > 0) ?
                    props.ImgCollection.map((item, index) => <Img
                        key={index}
                        index={index}
                        src={props.ImgCollection[index].src}
                        x={props.ImgCollection[index].x}
                        y={props.ImgCollection[index].y}
                        width={props.ImgCollection[index].width}
                        height={props.ImgCollection[index].height}
                    />) : undefined
            }
        </div>
    )
}

type StateProps = ReturnType<typeof mapStateToProps>
// type DispatchProps = ReturnType<typeof mapDispatchToProps>
type Props = StateProps;

function mapStateToProps(state: RootState) {
    return {
        ImgCollection: state.ImgContentReducer,
    }
}

export default connect(mapStateToProps)(ImgCollection);