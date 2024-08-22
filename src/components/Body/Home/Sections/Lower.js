import React from 'react';

const Lower = (props) => {
    let data = props.data;
    data.sort((a, b) => b.amount - a.amount);
    let datalist = data.map((item) => {
        return (
            <div key={item.userId} className='tw-flex tw-w-60 tw-border-b-2 tw-justify-between '>
                <p>{item.userId}</p>
                <p>{item.amount}</p>
            </div>
        );
    });
    return (
        <div className='tw-my-16 tw-p-2 tw-rounded tw-border tw-flex tw-flex-col tw-items-center'>
            <h4 className='tw-mb-4 tw-border-b-2'>{props.title}</h4>
            <div>
                {datalist}
            </div>
        </div>
    );
};

export default Lower;
