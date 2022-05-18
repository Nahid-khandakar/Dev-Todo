import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);



    return (
        <div className='flex  justify-between px-14'>

            <h1 className='text-center text-4xl font-bold py-10 text-white'>Dev-<span className='text-accent'>toDo</span></h1>


            {
                user ?
                    <button
                        onClick={() => signOut(auth)}
                        class="btn mt-10 btn-accent">
                        Sign Out
                    </button>
                    :
                    <button class="btn mt-10 btn-accent">
                        <Link to='/login'>Login</Link>
                    </button>
            }



        </div >
    );
};

export default Navbar;