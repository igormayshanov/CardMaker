import React from 'react';
import List from './List';
import InsertBlockItem from './InsertBlockElement/InsertBlockItem';
import { icons } from '../../../../constants/constants';

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
        <InsertBlockItem key = {item.id} value={item.value} onClick={item.onClick}/>
    )
}

const InsertBlockList = (props: InsertBlockListProps) => {
   
    return (
        <div>
            <List
                items={icons}
                renderItem={(icon: IconType) => <ListItem value={icon.value} onClick={icon.onClick} id={icon.id} />}
            />
        </div>
    );
}

export default InsertBlockList;
