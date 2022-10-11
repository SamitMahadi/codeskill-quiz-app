import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
    <nav className='bg-slate-900 border-b-2 border-pink-500 h-16 flex items-center justify-between pl-36 pr-36'>
     <h2 className='text-white text-4xl font-bold'>Code-Skillz</h2>
        <div>
           <Link className='text-white text-base ml-5 hover:text-pink-500' to="/">Home</Link>
           <Link className='text-white text-base ml-5 hover:text-pink-500' to="/statistics">Statistics</Link>
           <Link className='text-white text-base ml-5 hover:text-pink-500' to="/blog">Blog</Link>
        
        </div>
    </nav>
    );
};

export default Header;