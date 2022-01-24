import { connect } from 'react-redux'
import { RootState } from '../../../../store/store'
import Text from './Text';

const TextCollection = (props: StateProps) => {
    return (
        <>
            {
                (props.TextCollection.TextArray.length > 0) ?
                    props.TextCollection.TextArray.map((item, index) => <Text
                        id={props.TextCollection.TextArray[index].id}
                        key={`text-${item.id}`}
                        index={index}
                        text={props.TextCollection.TextArray[index]}
                        x={props.TextCollection.TextArray[index].x}
                        y={props.TextCollection.TextArray[index].y}
                    />) : undefined
            }
        </>
    )
}

type StateProps = ReturnType<typeof mapStateToProps>

function mapStateToProps(state: RootState) {
    return {
        TextCollection: state.TextContentReducer
    }
}

export default connect(mapStateToProps)(TextCollection);