import React, { useEffect, useState } from 'react';
import SingleDataShow from './SingleDataShow';

const Card = () => {
    const [data, setData] = useState([]);
    useEffect(() =>{
        const loadData = async() => {
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
            const value = await res.json();
            console.log(value);
            setData(value.data.tools);
        }
        loadData();
    },[])
    return (
        <>
            {
                data.map((singleData) => console.log(singleData))
            }
        </>
    );
};

export default Card;