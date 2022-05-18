import React from 'react';

const ManageCard = ({ task }) => {

    const { taskName, taskDescription } = task

    return (
        <div className='my-10'>

            <div className="card w-72 bg-accent shadow-xl mx-auto">
                <div className="card-body">
                    <h2 className="text-left text-white text-2xl font-semibold">{taskName}</h2>
                    <p className='text-left text-gray-900'>{taskDescription}</p>

                </div>

                <div className="my-5 flex justify-between px-5">

                    <button className="btn text-white px-5 mx-auto">Complete</button>
                    <button className="btn btn-warning px-5 mx-auto">Delete</button>

                </div>

            </div>


        </div>
    );
};

export default ManageCard;