import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);



    return (
        <div className='flex  justify-between px-14'>

            <Link to='/home' className='text-center text-4xl font-bold py-10 text-white'>Dev-<span className='text-accent'>toDo</span></Link>


            {
                user ?
                    <button
                        onClick={() => signOut(auth)}
                        className="btn mt-10 btn-accent">
                        Sign Out
                    </button>
                    :
                    <button className="btn mt-10 btn-accent">
                        <Link to='/login'>Login</Link>
                    </button>
            }



        </div >
    );
};

export default Navbar;