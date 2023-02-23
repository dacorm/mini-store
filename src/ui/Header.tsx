import React from 'react';
import {context} from "../providers/AppProvider";

export const Header = () => {
    const {useUpdate, useStateSelector} = context;
    const name = useStateSelector((state) => state.name);
    const update = useUpdate();

    console.log('RENDER HEADER');

    return (
        <>
            <button onClick={() => {
                update({name: `${name + 'da'}`});
            }}>
                name is {name}
            </button>
        </>
    );
};