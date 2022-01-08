import React from 'react'
import { connect } from 'react-redux';
import { SetPositionBlock } from '../../../../store/actionCreators/contentActionCreator';
import { RootState } from '../../../../store/store';

const Img = (props: statePropsType) => {
    return (
        <div>
            {
                props.img.map((item, index) =>
                    <img src={props.img[index].src} key={Date.now()} alt="Image"
                        width={props.img[index].width}
                        height={props.img[index].height}
                        style={{
                            top: props.img[index].y,
                            left: props.img[index].x,
                        }}
                    />)
            }
        </div>
    )
}
function mapStateToProps(state: RootState) {
    return {
        img: state.editor.canvas.ImgContent,
    };
};


// const mapDispatchToProps = (dispatch: Function) => {
//     return {
//         SetPositionBlock: (x: number, y: number) => dispatch(SetPositionBlock(x, y)),
//     }
// }

type statePropsType = ReturnType<typeof mapStateToProps>;
//type dispatchPropsType = ReturnType<typeof mapDispatchToProps>;
//type PropsType = statePropsType /*& dispatchPropsType*/;

export default connect(mapStateToProps)(Img);
