import React from 'react'
import { connect } from 'react-redux'
import { changeText } from '../../../../store/actionCreators/textActionCreator';
import { cardTextType } from '../../../../types/types';
import style from './Text.module.css';


interface TextComponentProps {
    index: number;
    text: cardTextType;
}

const Text = (props: TextComponentProps & DispatchProps) => {

    return (
        <input
            className={style.Text}
            onChange={(e) => props.changeText(e.target.value, props.index)}
            type="text"
            defaultValue={props.text.value}
            style={{
                fontSize: props.text.fontSize + 'px',
                fontFamily: props.text.fontFamily,
                fontWeight: Number(props.text.fontWeight),
                color: props.text.fontColor,
                top: props.text.y,
                left: props.text.x,
            }}
        />
    )
}

type DispatchProps = ReturnType<typeof mapDispatchToProps>

const mapDispatchToProps = (dispatch: Function) => {
    return {
        changeText: (newValue: string, id: number) => dispatch(changeText(newValue, id)),
    }
}

export default connect(null, mapDispatchToProps)(Text);



// const Text = (props: StateProps) => {
//     return (
//         <>
//         {
//             (props.textContent.TextArray.length > 0) ?
//                 props.textContent.TextArray.map((item, index) => <span
//                     key={index}
//                     contentEditable="true"
//                     style={{
//                         position: 'absolute',
//                         display: 'inline-block',
//                         fontSize: props.textContent.TextArray[index].fontSize + 'px',
//                         fontFamily: props.textContent.TextArray[index].fontFamily,
//                         fontWeight: Number(props.textContent.TextArray[index].fontWeight),
//                         color: props.textContent.TextArray[index].fontColor,
//                         top: props.textContent.y,
//                         left: props.textContent.x
//                     }}>{props.textContent.TextArray[index].value}</span> ) : undefined
//         }
//         </>
//     )
// }

// type StateProps = ReturnType<typeof mapStateToProps>

// function mapStateToProps(state: RootState) {
//     return {
//         textContent: state.TextContentReducer
//     }
// }

// export default connect(mapStateToProps)(Text);
