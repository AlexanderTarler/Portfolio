import { useState } from 'react';
import ListItem from './ListItem';
import Explanation from './Explanation';
import { v4 as uuidv4 } from 'uuid';

import '../Styling/List.css';

export default function List() {
    const [list, setList] = useState<{ id: string }[]>([]);
    const [counter, setCounter] = useState(0);

    const addNewListItem = () => {
        const newItem = { id: uuidv4() };
        setList([...list, newItem]);
        setCounter(counter + 1);
    };

    const deleteById = (id: string) => {
        setList((items: { id: string }[]) => {
            return items.filter((item: { id: string }) => item.id !== id);
        });
    };

    return (
        <>
            <Explanation />
            <div id='list'>
                <h1>To do</h1>
                <ul>
                    {list.map((item: { id: string }) => {
                        return (
                            <li key={item.id}>
                                <ListItem id={item.id} itemToRemove={deleteById} />
                            </li>
                        );
                    })}
                </ul>
                <button onClick={addNewListItem} id='add-new-list-item-button' data-testid="new-item">
                    New
                </button>
            </div>
        </>
    );
}
