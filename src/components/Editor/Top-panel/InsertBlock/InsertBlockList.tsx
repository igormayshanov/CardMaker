import React from 'react';
import List from './List';
import InsertBlockItem from './InsertBlockElement/InsertBlockItem';
import { connect } from 'react-redux';
import { clickHandler } from '../../../../constants/constants';
import { InsertImg } from '../../../../store/actionCreators/imgActionCreator';
import { insertText } from '../../../../store/actionCreators/textActionCreator';

interface IconType {
    id: string;
    value: string;
    onClick: any;
}

interface InsertBlockListProps {
    icons: Array<IconType>;
}

const ListItem = (props: IconType) => {
    const item: IconType = props;
    return (
        <InsertBlockItem key={item.id} value={item.value} onClick={item.onClick} />
    )
}

const InsertBlockList = (props: DispatchProps) => {

    const icons = [
        { id: '1', value: 'InsertImageIcon', onClick: props.InsertImg },
        { id: '2', value: 'CircleIcon', onClick: clickHandler },
        { id: '3', value: 'RectangleIcon', onClick: clickHandler },
        { id: '4', value: 'TriangleIcon', onClick: clickHandler },
        { id: '5', value: 'TextIcon', onClick: props.insertText }
    ]
    return (
        <div>
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

const mapDispatchToProps = (dispatch: Function) => {
    return {
        insertText: () => dispatch(insertText()),
        InsertImg: (newSrc: string) => dispatch(InsertImg(newSrc)),
    }
}
export default connect(null, mapDispatchToProps)(InsertBlockList);

// export default connect()(InsertBlockList);





