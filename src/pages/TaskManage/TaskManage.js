import React, { useEffect, useState } from 'react';
import ManageCard from './ManageCard';

const TaskManage = () => {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => {
                setTasks(data)
            })
    }, [])

    return (
        <div>

            <div>
                <h1 className='text-white text-center text-3xl'>Manage Your Task</h1>
                <p className='text-accent font-bold'>Your listed task : {tasks.length}</p>
            </div>


            <div className='grid  grid-col-1 xl:grid-cols-3 gap-4'>
                {
                    tasks.map(task => <ManageCard
                        key={task._id}
                        task={task}
                    ></ManageCard>)
                }
            </div>


        </div>

    );
};

export default TaskManage;