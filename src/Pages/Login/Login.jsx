import { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginPhoto from '../../../public/assets/images/login/login.svg';
import { AuthContext } from '../../Provider/AuthProvider';
const Login = () => {
    const {signIn} = useContext(AuthContext)
    const handleLogin = event => {

        event.preventDefault()
        const form = new FormData(event.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        // console.log(email, password)
        signIn(email,password) 
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" mr-12 w-1/2">
                    <img src={loginPhoto} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">Login now</h1>
                        <form onSubmit={handleLogin} className=" md:w-3/4 lg: w-1/2 mx-auto">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-accent">Login</button>
                            </div>
                        </form>
                        <p className='text-center'>New to car Doctors <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;