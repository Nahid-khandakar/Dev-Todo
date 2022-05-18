import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Modal = () => {

    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>
    }

    const handleForm = event => {
        event.preventDefault();
        const userEmail = user.email
        const task = event.target.task.value
        const description = event.target.description.value

        const taskData = {
            email: userEmail,
            taskName: task,
            taskDescription: description
        }

        fetch('https://mysterious-anchorage-13295.herokuapp.com/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(taskData)
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                event.target.reset()
            })
    }

    return (
        <div>

            {/* <!-- The button to open modal --> */}
            <label htmlFor="my-modal" className="btn btn-accent modal-button  text-white px-10">Add Task</label>

            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">

                <div className="modal-box bg-white text-gray-700">
                    <label htmlFor="my-modal" className="btn btn-accent btn-circle absolute right-2 top-2 text-white">✕</label>
                    <h3 className="font-bold text-lg text-accent">Add Your Task</h3>


                    <form className='mt-5' onSubmit={handleForm}>
                        <input type="text"
                            name="task"
                            placeholder="Task Name"
                            className="input input-bordered w-full max-w-xs my-3 bg-white" />

                        <textarea
                            name='description'
                            className="textarea textarea-bordered w-full max-w-xs my-3 bg-white" placeholder="Task description">
                        </textarea>

                        <input type="submit" value="Add" className='btn btn-accent text-white w-full max-w-xs' htmlFor="my-modal" />
                    </form>


                </div>


            </div>


        </div >
    );
};

export default Modal;