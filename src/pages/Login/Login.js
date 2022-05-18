import React from 'react';

const Login = () => {
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

                    <div class="flex mt-6 justify-center text-xs">
                        <h1>New to todo app?  </h1>
                        <a class="text-blue-400 hover:text-blue-500" href="/"> Sign Up</a>
                    </div>

                    <div class="divider">OR</div>


                    <button class="btn h-12 px-6 w-64  mt-2 rounded font-semibold text-sm text-white">Continue with google</button>



                </form>
            </div>
        </div>



    );
};

export default Login;