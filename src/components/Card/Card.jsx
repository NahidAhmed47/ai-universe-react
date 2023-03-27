import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import SingleDataShow from './SingleDataShow';

const Card = () => {
    const [data, setData] = useState([]);
    const [cardDataDetails, setCardDataDetails] = useState({});
    const [showAll, setShowAll] = useState(false);
    const [uniqueId, setUniqueId] = useState(null);
    useEffect(() =>{
        const loadDataById = async(id)=>{
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`);
            const data = await res.json();
            setCardDataDetails(data.data);
        }
        loadDataById()
    },[uniqueId]);
    useEffect(() =>{
        const loadData = async() => {
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
            const value = await res.json();
            setData(value.data.tools);
        }
        loadData();
    },[])
    return (
        <>
            <div className="grid grid-cols-3 gap-4 w-full mt-8 md:max-w-[80%] mx-auto">
                {
                    data.slice(0, showAll ? data.length : 6).map((singleData) => <SingleDataShow key={singleData.id} singleData={singleData} setUniqueId={setUniqueId}></SingleDataShow>)
                }
            </div>
            {
                !showAll && <span onClick={() => setShowAll(true)}>
                <Button text="See more"></Button>
            </span>
            }
            <Modal cardDataDetails={cardDataDetails}></Modal>
        </>
    );
};

export default Card;