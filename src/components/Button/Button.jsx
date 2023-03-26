import React from 'react';

const Button = (props) => {
    return (
        <div className="w-fit h-fit mx-auto mt-4">
            <button className="px-2 py-1 text-sm font-semibold bg-primary rounded">{props.text}</button>
        </div>
    );
};

export default Button;