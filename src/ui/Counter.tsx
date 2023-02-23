import React, {useState} from 'react';
import {context} from "../providers/AppProvider";

export const Counter = () => {
    const { useUpdate, useStateSelector } = context;
    const update = useUpdate();
    const counter = useStateSelector((state) => state.count);
    const [count, setCount] = useState(0);

    console.log('RENDER COUNTER');

    return (
        <div className="card">
            <button onClick={() => {
                setCount((count) => count + 1);
                update({ count: counter + 1 })
            }}>
                count is {count}
            </button>
        </div>
    );
};