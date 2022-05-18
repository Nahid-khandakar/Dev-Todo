import React from 'react';

const Modal = () => {

    const handleForm = event => {
        event.preventDefault();
        const task = event.target.task.value
        const description = event.target.description.value
        console.log(task, description)
    }

    return (
        <div>

            {/* <!-- The button to open modal --> */}
            <label htmlFor="my-modal" className="btn btn-accent modal-button  text-white px-10">Add Task</label>

            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">

                <div className="modal-box bg-white text-gray-700">
                    <label htmlFor="booking-modal" className="btn btn-accent btn-circle absolute right-2 top-2 text-white">✕</label>
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