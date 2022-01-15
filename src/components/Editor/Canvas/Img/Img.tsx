import React, { useRef, useState } from 'react'
import { connect } from 'react-redux';
import { SetPositionBlock } from '../../../../store/actionCreators/contentActionCreator';
import { RootState } from '../../../../store/store';
import { useDragAndDrop } from '../useDragAndDrop';
import style from './Img.module.css';

interface ImgProps {
    src: string;
    index: number;
    x: number;
    y: number;
    width: number;
    height: number;
}


const Img = (props: ImgProps) => {

    const imgBlock = useRef<HTMLImageElement>(null);

    const [pos, setPos] = useState({ x: props.x, y: props.y });

    useDragAndDrop(imgBlock, pos, setPos);

    return (
        <img
            className={style.img}
            ref={imgBlock}
            onDragStart={(e) => e.preventDefault()}
            onClick={() => console.log('ok')}
            key={props.index}
            alt=""
            src={props.src}
            width={props.width}
            height={props.height}
            style={{
                left: pos.x,
                top: pos.y
            }}
        />
    )
}

export default Img

// const Img = (props: PropsType) => {
//     const imgBlock = useRef<HTMLImageElement>(null);
//     useDragAndDrop(imgBlock, {x: props.img[0].x, y: props.img[0].y }, props.SetPositionBlock);

//     return (
//         <>
//             {
//                 props.img.map((item, index) =>
//                     <img src={props.img[index].src} key={index} alt="Image"
//                         ref={imgBlock}
//                         onDragStart={(e) => e.preventDefault()}
//                         width={props.img[index].width}
//                         height={props.img[index].height}
//                         style={{
//                             top: props.img[index].y,
//                             left: props.img[index].x,
//                         }}
//                     />)
//             }
//         </>
//     )
// }
// function mapStateToProps(state: RootState) {
//     return {
//         img: state.ImgContentReducer,
//     };
// };


// const mapDispatchToProps = (dispatch: Function) => {
//     return {
//         SetPositionBlock: (x: number, y: number) => dispatch(SetPositionBlock(x, y)),
//     }
// }

// type statePropsType = ReturnType<typeof mapStateToProps>;
// type dispatchPropsType = ReturnType<typeof mapDispatchToProps>;
// type PropsType = statePropsType & dispatchPropsType;

// export default connect(mapStateToProps, mapDispatchToProps)(Img);
