import React from 'react';

function MyList({ header, items }) {
    const header1 = header;
    const itemsList = items.map(item =>
    <li key={item.id.toString()}>
        {item.text}
    </li>);
    return (
        <div>
            <h1>{header1}</h1>
            <ol>{itemsList}</ol>
        </div>
            );
}

export default MyList;