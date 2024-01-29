import MyList from './MyList'
import React, { useState } from 'react';


function MyContainer() {

    const [items, setItems] = useState([
        { id: "1", text: "This is an item", clicked: false },
        { id: "2", text: "Also this", clicked: false },
    ]);

    const updateItem = (id) => {
        setItems(items.map(item => {
            item.id === id ? { ...item, clicked: !item.clicked } : item
        }));  
    }
    
    const [text, setText] = useState('')

    const onClick = () => {
        const newItem = {
            id: (items.length + 1).toString(),
            text: text.trim(),
            clicked: false
        };
        setItems([...items, newItem]);
        setText('');
    };


    return (
        <div>
            <MyList
                header="Really epic list component"
                items={items}
                updateItem={updateItem}
            />
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter new item text"
            />
            <button onClick={onClick}></button>
        </div>
    );
}

export default MyContainer;