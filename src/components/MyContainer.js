import MyList from './MyList'
import React from 'react';


function Container() {
    return <container><MyList
        header="Really epic list component"
        items={[
            { id: "1", text: "This is an item" },
            { id: "2", text: "Also this"},
        ]}
        />
        </container>
}

export default Container;