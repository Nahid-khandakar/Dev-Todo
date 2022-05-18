import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ManageCard from './ManageCard';

const TaskManage = () => {
    const [user] = useAuthState(auth);
    const [tasks, setTasks] = useState([])

    useEffect(() => {

        if (user) {
            fetch(`http://https://mysterious-anchorage-13295.herokuapp.com/task/?userEmail=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setTasks(data)
                })
        }

    }, [user])

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