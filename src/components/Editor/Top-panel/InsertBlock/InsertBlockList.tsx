import React from 'react';
import List from './List';
import InsertBlockItem from './InsertBlockElement/InsertBlockItem';
import { connect } from 'react-redux';
import { InsertText } from '../../../../store/actionCreators/textActionCreator';



export const icons = [
    { id: '1', value: 'InsertImageIcon', onClick: () => { }},
    { id: '2', value: 'CircleIcon', onClick: () => { }},
    { id: '3', value: 'RectangleIcon', onClick: () => { }},
    { id: '4', value: 'TriangleIcon', onClick: () => { }},
    { id: '5', value: 'TextIcon', onClick: () => { }}]

interface IconType {
    id: string;
    value: string;
    onClick: (e: React.MouseEvent<HTMLOrSVGElement>) => void;
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

const InsertBlockList = (props: InsertBlockListProps) => {
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
        insertText: () => dispatch(InsertText()),
    }
}


export default connect(null, mapDispatchToProps)(InsertBlockList);





