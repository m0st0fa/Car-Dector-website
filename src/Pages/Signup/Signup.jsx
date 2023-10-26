import { useContext } from "react";
import { Link } from "react-router-dom";
import loginPhoto from '../../../public/assets/images/login/login.svg';
import { AuthContext} from "../../Provider/AuthProvider";
const Signup = () => {
    const {createUser} = useContext(AuthContext)
    const handleRegister = event => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo')
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password,photo);
        createUser(email,password) 
        .then(result =>{
            console.log(result.user)
        })
        .catch(error=>{
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
                    <h1 className="text-3xl font-bold text-center">Sign Up</h1>
                    <form onSubmit={handleRegister} className=" md:w-3/4 lg: w-1/2 mx-auto">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Photo</span>
                            </label>
                            <input type="text" name="photo" placeholder="Your Photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-accent">Login</button>
                        </div>
                    </form>
                    <p className='text-center'>Alreay have an Account?<Link className='text-orange-600 font-bold' to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Signup;