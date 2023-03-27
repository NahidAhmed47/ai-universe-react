import React from 'react';

const SingleDataShow = (props) => {
    const {name, image, description, features, published_in, id} = props.singleData;
    return (
        <>
            <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className="h-[200px] w-full" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <h2 className="card-title">Features</h2>
                <ul className="list-decimal sm:ml-5">
                    {
                        features.map((feature, index) => <li key={index}>{feature}</li>)
                    }
                </ul>
                <div className="card-actions justify-between items-center">
                <p>{published_in}</p>
                <label onClick={() => props.setUniqueId(id)} htmlFor="my-modal-3" className="cursor-pointer text-base font-semibold  ">Details</label>
                </div>
            </div>
            </div>
        </>
    );
};

export default SingleDataShow;