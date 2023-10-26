import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const NavBar = () => {
    const { user,logOut } = useContext(AuthContext)

    const handleSingOut = () =>{
        logOut()
        .then()
        .catch()
    }
    const navlink = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/service'>Service</Link></li>
        {
             user?.email? <>
             <li><Link to='/bookings'>Bookings</Link></li>
             <li><button onClick={handleSingOut}>LogOut</button></li> 
             </>
            :<li><Link to='/login'>Login</Link></li>
        }

    </>

    return (
        <div>
            <div className="navbar bg-base-100 h-28">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlink}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <img src="https://i.ibb.co/wC2KvZb/Tech-Shop-Logo.png" className="w-32" alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-outline btn-warning">Appoinment</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;