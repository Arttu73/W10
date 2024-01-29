import MyList from './MyList'
import React, { useState } from 'react';


function MyContainer() {

    const [items, setItems] = useState([
        { id: "1", text: "This is an item", clicked: false },
        { id: "2", text: "Also this", clicked: false },
    ]);

    const updateItem = (id) => {
        setItems(items.map(item =>
            style={ textDecoration: item.clicked ? 'line-through' : 'none' },
            clicked={clicked: item.clicked ? false : true}
            ))
        
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
                updateItem={updateItem}
                header="Really epic list component"
                items={items}
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