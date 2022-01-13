import React from 'react'
import { connect } from 'react-redux'
import { RootState } from '../../../../store/store'

const Text = (props: StateProps) => {
    return ( 
        <>
        {
            (props.textContent.TextArray.length > 0) ? 
                props.textContent.TextArray.map((item, index) => <span 
                    key={index}
                    contentEditable="true"
                    style={{
                        position: 'absolute',
                        display: 'inline-block',
                        fontSize: props.textContent.TextArray[index].fontSize + 'px',
                        fontFamily: props.textContent.TextArray[index].fontFamily,
                        fontWeight: Number(props.textContent.TextArray[index].fontWeight),
                        color: props.textContent.TextArray[index].fontColor,
                        top: props.textContent.y,
                        left: props.textContent.x
                    }}>{props.textContent.TextArray[index].value}</span> ) : undefined
        }
        </>
    )
}

type StateProps = ReturnType<typeof mapStateToProps>

function mapStateToProps(state: RootState) {
    return {
        textContent: state.TextContentReducer
    }
}

export default connect(mapStateToProps)(Text);
