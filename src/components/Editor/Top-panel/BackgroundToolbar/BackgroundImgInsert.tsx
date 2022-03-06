import { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { SetBackgroundImg, SetCanvasHeightAction, SetCanvasWidthAction } from '../../../../store/actionCreators/editorActionCreator';
import { RootState } from '../../../../store/store';
import { canvasType } from '../../../../types/types';
import InsertBlockItem from '../InsertBlock/InsertBlockElement/InsertBlockItem';
import List from '../InsertBlock/List';

interface IconType {
    id: string;
    value: string;
    onClick: Function;
}

const ListItem = (props: IconType) => {
    const item: IconType = props;
    return (
        <InsertBlockItem key={item.id} value={item.value} onClick={item.onClick} />
    )
}

interface BackgroundImgInsertProps {
    SetBackgroundImg: (src: string) => void,
    SetCanvasWidthAction: (width: number) => void,
    SetCanvasHeightAction: (height: number) => void,
    canvas: canvasType,
}

const BackgroundImgInsert = (props: BackgroundImgInsertProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const selectedImageUrlRef = useRef<string>();
    const [loading, setLoading] = useState(false);

    function revokeImageUrl() {
        if (selectedImageUrlRef.current != null) {
            window.URL.revokeObjectURL(selectedImageUrlRef.current)
        }
    }

    function openSelectImageModal() {
        if (inputRef.current) {
            setLoading(true);
            inputRef.current.click()
        }
    }

    function updateSelectedBgImage() {
        revokeImageUrl();
        if (inputRef.current && inputRef.current.files) {
            const image = inputRef.current.files[0];
            if (image) {
                selectedImageUrlRef.current = window.URL.createObjectURL(image);
                let newImage = new Image();
                newImage.src = selectedImageUrlRef.current;
                newImage.onload = function() {
                    props.SetCanvasWidthAction(newImage.width);
                    props.SetCanvasHeightAction(newImage.height);
                }
                props.SetBackgroundImg(selectedImageUrlRef.current);
            }
            setLoading(true);
        }
        setLoading(false)
    }

    useEffect(() => revokeImageUrl, [])
    const icons = [
        { id: '1', value: 'InsertImageIcon', onClick: openSelectImageModal},
    ]
    return (
        <div>
            <input
                ref={inputRef}
                accept=".jpg,.png"
                type="file"
                multiple={false}
                onChange={updateSelectedBgImage}
                style={{ display: 'none' }}
            />
            <List
                items={icons}
                renderItem={(icon: IconType) =>
                    <ListItem
                        value={icon.value}
                        onClick={icon.onClick}
                        id={icon.id}
                        key={icon.id}
                    />}
            />
        </div>
    );
}

type DispatchProps = ReturnType<typeof mapDispatchToProps>
type StateProps = ReturnType<typeof mapStateToProps>
type Props = StateProps | DispatchProps;

function mapStateToProps(state: RootState) {
    return {
       canvas: state.canvasReducer,
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        SetBackgroundImg: (newSrc: string) => dispatch(SetBackgroundImg(newSrc)),
        SetCanvasWidthAction: (newWidth: number) => dispatch(SetCanvasWidthAction(newWidth)),
        SetCanvasHeightAction: (newHeight: number) => dispatch(SetCanvasHeightAction(newHeight)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BackgroundImgInsert);