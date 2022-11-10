import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const LogIn = () => {

    const {providerLogIn,login} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const from = location.state?.from.pathname || '/'

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogIn(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(err => console.error(err))
    }

    const handleGithubSignIn =()=>{
        providerLogIn(githubProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(err => console.error(err))
    }

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .then(error => console.log(error));

    }

    //jwt
    navigate(from, {replace: true})
    return (
        <div>
            <div className="hero min-h-screen bg-white">
            <div className="hero-content grid grid-cols-2 w-full">
                <div className="text-center  ">
                <h1 className="text-5xl font-bold text-[#175c62]">Login now!</h1>
                </div>
                <div className="card mr-12">
                <form onSubmit={handleLogIn} className="card-body text-lg  shadow-2xl w-full rounded-3xl bg-[#f2f2f2a5]">
                    <div className="form-control">
                    <label className="label text-[#175c62]">Email</label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered rounded-full" />
                    </div>
                    <div className="form-control">
                    <label className="label text-[#175c62]">Password</label>
                    <input name="password" type="password" placeholder="password" className="input input-bordered 
                    active:border-[#175c62] bg-white rounded-full" />
                    <label className="label">
                        <Link to="" className="link link-hover text-[#175c62]">Forgot password?</Link>
                    </label>
                    <p className="">
                    new user?
                        <Link to="/signup" className="link link-hover text-[#175c62]">signUp</Link>
                    </p>
                    </div>
                    <div className="form-control mt-6">
                    <input type="submit" className="btn bg-[#175c62] hover:bg-white hover:text-[#175c62] hover:border-[#175c62]" value="signIn"/>
                    </div>
                </form>
                <input onClick={handleGoogleSignIn} type="submit" className="btn bg-[#175c62] hover:bg-white hover:text-[#175c62] hover:border-[#175c62]" value="GoogleSignUp"/>
                <input onClick={handleGithubSignIn} type="submit" className="btn bg-[#175c62] hover:bg-white hover:text-[#175c62] hover:border-[#175c62]" value="githubSignUp"/>
                </div>
            </div>
            </div>
        </div>
    );
};

export default LogIn;