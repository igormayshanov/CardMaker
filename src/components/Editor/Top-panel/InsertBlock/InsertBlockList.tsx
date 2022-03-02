import { useEffect, useRef, useState } from 'react';
import List from './List';
import InsertBlockItem from './InsertBlockElement/InsertBlockItem';
import { connect } from 'react-redux';
import { clickHandler } from '../../../../constants/constants';
import { InsertImg } from '../../../../store/actionCreators/imgActionCreator';
import { insertText } from '../../../../store/actionCreators/textActionCreator';
import { RootState } from '../../../../store/store';
import { canvasType } from '../../../../types/types';

interface IconType {
    id: string;
    value: string;
    onClick: Function;
}

// interface InsertBlockListProps {
//     icons: Array<IconType>;
// }

const ListItem = (props: IconType) => {
    const item: IconType = props;
    return (
        <InsertBlockItem key={item.id} value={item.value} onClick={item.onClick} />
    )
}

interface InsertBlockListProps {
    insertText: () => void,
    InsertImg: (src: string, width: number, height: number) => void,
    canvas: canvasType,
}

const InsertBlockList = (props: InsertBlockListProps) => {
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

    function updateSelectedImage() {

        revokeImageUrl();
        if (inputRef.current && inputRef.current.files) {
            const image = inputRef.current.files[0];
            if (image) {
                selectedImageUrlRef.current = window.URL.createObjectURL(image);
                let fileReader = new FileReader();
                fileReader.readAsDataURL(image);

                let newImage = new Image();
                newImage.src = selectedImageUrlRef.current;

                fileReader.onload = function() {
                    let readerResult = String(fileReader.result);
                    newImage.onload = function() {
                        props.InsertImg(readerResult, newImage.width, newImage.height);
                    }
                }
            }
            setLoading(true);
        }
        setLoading(false)
    }

    useEffect(() => revokeImageUrl, [])
    const icons = [
        { id: '1', value: 'InsertImageIcon', onClick: openSelectImageModal },
        { id: '2', value: 'CircleIcon', onClick: clickHandler },
        { id: '3', value: 'RectangleIcon', onClick: clickHandler },
        { id: '4', value: 'TriangleIcon', onClick: clickHandler },
        { id: '5', value: 'TextIcon', onClick: props.insertText }
    ]
    return (
        <div>
            <input
                ref={inputRef}
                accept=".jpg,.png, .svg"
                type="file"
                multiple={false}
                onChange={updateSelectedImage}
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
        insertText: () => dispatch(insertText()),
        InsertImg: (newSrc: string, width: number, height: number) => dispatch(InsertImg(newSrc, width, height)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InsertBlockList);





