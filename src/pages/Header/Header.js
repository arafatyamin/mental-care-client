import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Header = () => {
    const {logout,user} = useContext(AuthContext)
    console.log(user)
    const handleLogOut= () => {
        logout();
    }

    const menuItems = <React.Fragment>
        <Link to="/" className="hover:text-[#175c62] text-md font-bold hover:border-b-2 border-[#175c62] mr-4">HOME</Link>
            <Link to="/services" className="hover:text-[#175c62] text-md font-bold hover:border-b-2 border-[#175c62] mr-4">SERVICE</Link>
            {
                user?.email ? <>
                <Link to="/reviews" className="hover:text-[#175c62] text-md font-bold hover:border-b-2 border-[#175c62] mr-4">REVIEWS</Link>
                <Link to="/addService" className="hover:text-[#175c62] text-md font-bold hover:border-b-2 border-[#175c62] mr-4">ADD SERVICE</Link></> : ""
            }
            <Link to="/blogs" className="hover:text-[#175c62] text-md font-bold hover:border-b-2 border-[#175c62] mr-4">BLOG</Link>
    </React.Fragment>
    return (
        <div>
            <div className="navbar py-0 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-42">
                    {menuItems}   
                    </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">MentalHealth</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
            <div className="menu menu-horizontal p-0">
            {menuItems}
                
    </div>
  </div>
  <div className="navbar-end">
    {
        user?.email?<>
            <Link onClick={handleLogOut} className='btn rounded-full btn-primary'>logOut</Link>
            <img data-tip={user?.displayName} className="w-10 h-10 mx-4 rounded-full tooltip tooltip-bottom" src={user?.photoURL || "https://i.ibb.co/whgZnWG/black-contour-f41038db.jpg"} alt="" />
        </>
        :<>
            <Link to="/login" className="btn-sm text-white rounded-full bg-[#175c62] hover:bg-white hover:text-[#175c62] text-md flex items-center mr-2">Login</Link>
            <Link to="/signUp" className="btn-sm text-white rounded-full bg-[#175c62] hover:bg-white hover:text-[#175c62] text-md flex items-center">singUp</Link>
        </>
    }
    
    
  </div>
</div>
        </div>
    );
};

export default Header;