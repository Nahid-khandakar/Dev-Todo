import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    //google sign in
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user || gUser) {
        navigate(from, { replace: true });
    }

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    let getError;
    if (error || gError) {
        getError = <p>{error?.message || gError?.message}</p>
    }


    const handleLogin = event => {
        event.preventDefault();

        const email = event.target.email.value
        const password = event.target.password.value

        signInWithEmailAndPassword(email, password)

    }
    return (



        <div className='bg-white'>
            <div className='flex flex-col items-center pt-14 h-screen text-gray-700'>
                <h1 className="font-bold text-2xl">Welcome Back</h1>

                <form onSubmit={handleLogin}>
                    <label className="font-semibold text-xs" for="usernameField">Email</label>
                    <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="email" name='email' />

                    <label className="font-semibold text-xs mt-3" for="passwordField">Password</label>
                    <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" name='password' />

                    <button className="flex items-center justify-center h-12 px-6 w-64 bg-accent mt-8 rounded font-semibold text-sm text-white">Login</button>


                </form>

                {getError}
                <div className=" text-xs flex mt-2">
                    <h1>New in todo app?   </h1>
                    <p><Link to='/signup'> Sign Up</Link></p>
                </div>

                <div className="divider">OR</div>


                {/* google log in */}
                <div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn h-12 px-6 w-64  mt-2 rounded font-semibold text-sm text-white"
                    >Continue with google</button>
                </div>

            </div>
        </div>



    );
};

export default Login;