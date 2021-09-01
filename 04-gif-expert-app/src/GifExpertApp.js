import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrind } from './components/GifGrind';

const GifExpertApp = () =>{

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () =>{
    //     setCategories([...categories, 'HunterXHunter']);
    // }

    return(
        <>
            <h2>GifExperApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            

            <ol>
                {categories.map((category) => (
                <GifGrind
                    key={category}
                    category={category}/>) )}
            </ol>
        </>
    )
}

export default GifExpertApp;