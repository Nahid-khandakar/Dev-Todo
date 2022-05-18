import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ManageCard = ({ task }) => {

    const { _id, taskName, taskDescription } = task

    const [complete, setComplete] = useState(true)

    const [tasks, setTasks] = useState([])


    const handleDelete = (id) => {

        const confirmDelete = window.confirm('Sure to delete')

        if (confirmDelete) {
            const url = `http://localhost:5000/task/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        // toast("Delete Item Successful ");
                        const remainingItems = tasks.filter(task => task._id !== id)
                        setTasks(remainingItems)
                    }
                })
        }


    }

    return (
        <div className='my-10'>

            <div className="card w-72 bg-accent shadow-xl mx-auto">
                <div className="card-body">
                    <h2 className="text-left text-white text-2xl font-semibold">{taskName}</h2>

                    {
                        complete ?
                            <p className='text-left text-gray-900 '>{taskDescription}</p>
                            :
                            <p className='text-left text-gray-900 line-through'>{taskDescription}</p>
                    }


                </div>

                <div className="my-5 flex justify-between px-5">

                    <button
                        onClick={() => { setComplete(!complete); toast("Wow you complete the task!") }}
                        className="btn text-white px-5 mx-auto">Complete
                    </button>

                    {/* delete button */}
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-warning px-5 mx-auto">Delete
                    </button>

                </div>
                <ToastContainer />
            </div>


        </div>
    );
};

export default ManageCard;