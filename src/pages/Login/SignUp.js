import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const SignUp = () => {

    //email and password sign up
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    //googel sing in
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

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
                <h1 class="font-bold text-2xl">SignUp</h1>

                <form onSubmit={handleSignup}>
                    <label class="font-semibold text-xs" for="usernameField">Name</label>
                    <input class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" name='name' />

                    <label class="font-semibold text-xs" for="usernameField">Email</label>
                    <input class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="email" name='email' />

                    <label class="font-semibold text-xs mt-3" for="passwordField">Password</label>
                    <input class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" name='password' />

                    <button class="flex items-center justify-center h-12 px-6 w-64 bg-accent mt-8 rounded font-semibold text-sm text-white">Sign Up</button>

                </form>

                <div class=" text-xs mt-2">
                    <h1>Already have an account ! <Link to='/login'> Login</Link> </h1>
                </div>

            </div>

        </div>
    );
};

export default SignUp;