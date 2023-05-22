import { useEffect, useState, useRef } from 'react';
import fetchDataFromAPI from '../Helpers/fetcher';
import '../Styling/ListItem.css';
import React from 'react';



function ListItem({ id, itemToRemove }: any) {
    const [item, setItem] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    // I have 'any' as a type for my events since typing events
    // is a bit wonky
    const handleChange = (event: any) => {
        setItem(event.target.value);
    }

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            event.target.blur();
        }
    };

    const editButton = () => {
        inputRef.current?.focus();
    }


    useEffect(() => {
        fetchDataFromAPI(setItem);
    }, [])

    return (<>
        <li key={id} className='list-item'>
            <div className='list-item-body'>
                <input ref={inputRef} className='list-item-text' data-testid='list-item-text' type="text" onChange={handleChange} onKeyDown={handleKeyDown} value={item} />
            </div>

            <div className='buttons'>
                <button className='edit-button' data-testid='edit-button' onClick={() => editButton()}>Edit</button>
                <button className='remove-button' data-testid='remove-button' onClick={() => itemToRemove(id)}><span className="text">Delete</span></button>
            </div>
        </li>
    </>
    );
}


export default React.memo(ListItem);
