import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import style from './dropdownlist.module.css';

interface Item {
    id: string,
    value: string,
}
interface DropdownListProps {
    elements: Array<Item>,
    getParam: (value: string) => void,
}

const ListItem = (props: Item) => {
    const item: Item = props
    return <option>{item.value}</option>
}

const DropdownList: FC<DropdownListProps> = ({elements, getParam}) => {
    const items: Array<Item> = elements;
    const listItems = items.map((item) =>
        <ListItem key={item.id} id={item.id} value={item.value} />
    );

    const dispatch = useDispatch();
    function getAttribute (e: React.ChangeEvent<HTMLSelectElement>) {
        const attribute = e.target.value;
        dispatch(getParam(attribute));
    }

    return (
        <select className={style.DropdownList} onChange={(e) => getAttribute(e)}>{listItems}</select>
    );
}

export default DropdownList;


