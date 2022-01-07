import React from 'react'
import { connect } from 'react-redux';
import { SetPositionBlock } from '../../../../store/actionCreators/actionCreators';
import { RootState } from '../../../../store/store';

const Img = (props: PropsType) => {
    return (
        {
            props.img.map((item, index) =>
                <img ref={imgBlock} src={(props.img[index].content.kind === kindType.img) ? props.img[index].content : } key={Date.now()} alt="Image"
                    width={props.img[index].width}
                    height={props.img[index].height}
                    style={{
                        top: props.img[index].position.y,
                        left: props.img[index].position.x,
                    }}
                />)
        }

    )
}
function mapStateToProps(state: RootState) {
    return {
        img: state.editor.canvas.layouts,
    };
};


const mapDispatchToProps = (dispatch: Function) => {
    return {
        SetPositionBlock: (x: number, y: number) => dispatch(SetPositionBlock(x, y)),
    }
}

type statePropsType = ReturnType<typeof mapStateToProps>;
type dispatchPropsType = ReturnType<typeof mapDispatchToProps>;
type PropsType = statePropsType & dispatchPropsType;

export default connect(mapStateToProps, mapDispatchToProps)(Img);
