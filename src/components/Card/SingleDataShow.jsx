import React from 'react';

const SingleDataShow = (props) => {
    console.log(props.singleData);
    const {name, image, description, features, published_in} = props.singleData;
    console.log(features);
    return (
        <>
            <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-between items-center">
                <p>{published_in}</p>
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
        </>
    );
};

export default SingleDataShow;