import { useState } from 'react';
import ListItem from './ListItem';
import Explanation from './Explanation';

import '../Styling/List.css';
import { v4 as uuid } from 'uuid';

export default function List() {
    const [list, setList] = useState<JSX.Element[]>([]);
    const [counter, setCounter] = useState(0);

    const addNewListItem = () => {
        setList([...list, <ListItem id={uuid()} itemToRemove={deleteById} />])
        setCounter(counter + 1)
    }

    const deleteById = (id: number) => {
        setList((item: JSX.Element[]) => {
            return item.filter((item: JSX.Element) => item.props.id !== id)
        })
    }

    return (<>
        <Explanation />
        <div id='list'>
            <h1>To do</h1>
            <ul>
                {list.map((item: JSX.Element) => {
                    return (
                        <li key={item.props.id}>
                            {item}
                        </li>
                    )
                })}
            </ul>
            <button onClick={addNewListItem} id='add-new-list-item-button' data-testid="new-item">New</button>
        </div>
    </>
    );
}

