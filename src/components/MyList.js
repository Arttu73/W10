import React from 'react';

function MyList(header, items) {
    const header1 = header;
    const itemsList = items.map(item =>
    <li key={items.id.toString()}>
        {item.text}
    </li>);
    return (
        <div>
            <h2>{header1}</h2>
            <ol>{itemsList}</ol>
        </div>
            );
}

export default MyList;