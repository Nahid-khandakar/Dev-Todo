import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const SignUp = () => {

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    //email and password sign up
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    if (user) {
        navigate(from, { replace: true });
    }

    if (loading) {
        return <Loading></Loading>
    }

    let getError;
    if (error) {
        getError = <p>{error?.message}</p>
    }

    const handleSignup = event => {
        event.preventDefault();
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        // console.log(name, email, password)
        createUserWithEmailAndPassword(email, password)
    }



    return (
        <div className='bg-white'>
            <div className='flex flex-col items-center pt-14 h-screen text-gray-700'>
                <h1 className="font-bold text-2xl">SignUp</h1>

                <form onSubmit={handleSignup}>
                    <label className="font-semibold text-xs" htmlFor="usernameField">Name</label>
                    <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" name='name' />

                    <label className="font-semibold text-xs" htmlFor="usernameField">Email</label>
                    <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="email" name='email' />

                    <label className="font-semibold text-xs mt-3" htmlFor="passwordField">Password</label>
                    <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" name='password' />

                    <button className="flex items-center justify-center h-12 px-6 w-64 bg-accent mt-8 rounded font-semibold text-sm text-white">Sign Up</button>

                </form>
                {getError}
                <div className=" text-xs mt-2">
                    <h1>Already have an account ! <Link to='/login'> Login</Link> </h1>
                </div>

            </div>

        </div>
    );
};

export default SignUp;