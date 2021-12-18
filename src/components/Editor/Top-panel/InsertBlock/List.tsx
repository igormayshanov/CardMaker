import React from 'react'
import style from './List.module.css';


interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode
}

function List<T>(props: ListProps<T>) {
    return (
        <div className={style.ListItems}>
            {props.items.map(props.renderItem)}
        </div>
    );
}

export default List;