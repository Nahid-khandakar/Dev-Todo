
import Modal from '../Modal/Modal';
import TaskManage from '../TaskManage/TaskManage';

const Home = () => {

    return (
        <div className='text-center'>
            <Modal></Modal>


            <div className='mt-10'>
                <TaskManage></TaskManage>
            </div>
        </div>
    );
};

export default Home;