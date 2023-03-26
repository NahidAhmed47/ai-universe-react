import React, { useEffect, useState } from 'react';
import SingleDataShow from './SingleDataShow';

const Card = () => {
    const [data, setData] = useState([]);
    useEffect(() =>{
        const loadData = async() => {
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
            const value = await res.json();
            setData(value.data.tools);
        }
        loadData();
    },[])
    return (
        <div className="grid grid-cols-3 gap-4 w-full mt-8 md:max-w-[80%] mx-auto">
            {
                data.map((singleData) => <SingleDataShow key={singleData.id} singleData={singleData}></SingleDataShow>)
            }
        </div>
    );
};

export default Card;