import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {

    //google sign in
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    return (

        <div className='bg-white'>
            <div className='flex flex-col items-center pt-14 h-screen text-gray-700'>
                <h1 class="font-bold text-2xl">Welcome Back</h1>

                <form className=''>
                    <label class="font-semibold text-xs" for="usernameField">Username or Email</label>
                    <input class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" />

                    <label class="font-semibold text-xs mt-3" for="passwordField">Password</label>
                    <input class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" />

                    <button class="flex items-center justify-center h-12 px-6 w-64 bg-accent mt-8 rounded font-semibold text-sm text-white">Login</button>


                </form>

                <div class=" text-xs flex mt-2">
                    <h1>New in todo app?   </h1>
                    <p><Link to='/signup'> Sign Up</Link></p>
                </div>

                <div class="divider">OR</div>


                {/* google log in */}
                <div>
                    <button
                        onClick={() => signInWithGoogle()}
                        class="btn h-12 px-6 w-64  mt-2 rounded font-semibold text-sm text-white"
                    >Continue with google</button>
                </div>

            </div>
        </div>



    );
};

export default Login;