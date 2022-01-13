import React from 'react';
import style from './dropdownlist.module.css';

interface Item {
    id: string,
    value: string,
}
interface DropdownListProps {
    items: Array<Item>,
}

const ListItem = (props: Item) => {
    const item: Item = props
    return <option>{item.value}</option>
}

const DropdownList = (props: DropdownListProps) => {
    const items: Array<Item> = props.items;
    const listItems = items.map((item) =>
        <ListItem id={item.id} value={item.value} />
    );

    return (
        <select className={style.DropdownList}>{listItems}</select>
    );
}

export default DropdownList;


