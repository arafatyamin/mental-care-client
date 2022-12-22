import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../api/auth';
import { AuthContext } from '../../contexts/AuthProvider';
import {FaGoogle, FaGithub} from 'react-icons/fa'

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
            setAuthToken(user)
        })
        .catch(err => console.error(err))
    }

    const handleGithubSignIn =()=>{
        providerLogIn(githubProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
            setAuthToken(user)
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
            
            const currentUser = {
                email: user.email
            }
            console.log(currentUser);

            // get jwt token
            fetch(`https://doctor-portal-serrver.vercel.app/jwt`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // local storage
                localStorage.setItem('genius-token', data.token);

                navigate(from, {replace: true})
            })

           
            
        })
        .catch(error => console.log(error));

    }

    //jwt
    
    return (
        <div>
            <div className="hero min-h-screen bg-white">
            <div className=" grid lg:grid-cols-2 flex-col w-full lg:my-8">
                <div className="text-center  flex justify-center items-center">
                <h1 className="text-5xl font-bold text-[#175c62] my-8">Login now!</h1>
                </div>
                <div className="card lg:mr-12 my-4 py-4 bg-[#f2f2f2a5] shadow-2xl  rounded-3xl">
                <form onSubmit={handleLogIn} className="card-body px-4 py-2 text-lg  w-full">
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
                <div className="flex justify-evenly items-center">
                <FaGoogle onClick={handleGoogleSignIn} className="text-3xl text-[#175c62] cursor-pointer" />
                <FaGithub onClick={handleGithubSignIn} className="text-3xl text-[#175c62] cursor-pointer" />
                
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default LogIn;