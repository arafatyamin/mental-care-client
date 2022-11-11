import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { setAuthToken } from '../../api/auth';
import {AuthContext} from '../../contexts/AuthProvider'

const SignUp = () => {
    const {providerLogUp, createUser} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GoogleAuthProvider()

    const handleGoogleSignUp = () => {
        providerLogUp(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
            setAuthToken(user)
        })
        .catch(err => console.error(err))
    }

    const handleGithubSignUp =()=>{
        providerLogUp(githubProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
            setAuthToken(user)
        })
        .catch(err => console.error(err))
    }

    const handleSignUp= event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser (email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setAuthToken(user)
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="hero min-h-screen bg-white">
            <div className="hero-content grid grid-cols-2 w-full">
                <div className="text-center  ">
                <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card mr-12">
                <form onSubmit={handleSignUp} className="card-body text-lg  shadow-2xl w-full rounded-3xl bg-[#f2f2f2a5]">
                    <div className="form-control">
                    <label className="label text-[#175c62]">name</label>
                    <input name="name" type="text" placeholder="name" className="input input-bordered rounded-full" />
                    </div>
                    <div className="form-control">
                    <label className="label text-[#175c62]">profile url</label>
                    <input name="url" type="text" placeholder="url" className="input input-bordered rounded-full" />
                    </div>
                    <div className="form-control">
                    <label className="label text-[#175c62]">Email</label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered rounded-full" />
                    </div>
                    <div className="form-control">
                    <label className="label text-[#175c62]">Password</label>
                    <input name="password" type="password" placeholder="password" className="input input-bordered 
                    active:border-[#175c62] bg-white rounded-full" />
                    <h2 className="">
                    already have an account?
                        <Link to="/login" className="link link-hover text-[#175c62]">logIn</Link>
                    </h2>
                    </div>
                    <div className="form-control mt-6">
                    <input type="submit" className="btn bg-[#175c62] hover:bg-white hover:text-[#175c62] hover:border-[#175c62]" value="signUp"/>
                    </div>
                </form>
                <input onClick={handleGoogleSignUp} type="submit" className="btn bg-[#175c62] hover:bg-white hover:text-[#175c62] hover:border-[#175c62]" value="GoogleSignUp"/>
                <input onClick={handleGithubSignUp} type="submit" className="btn bg-[#175c62] hover:bg-white hover:text-[#175c62] hover:border-[#175c62]" value="githubSignUp"/>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SignUp;