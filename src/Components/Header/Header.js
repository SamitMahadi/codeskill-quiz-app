import React from 'react';

const Header = () => {
    return (
    <nav className='bg-slate-900 h-16	flex items-center justify-between pl-36 pr-36'>
     <h2 className='text-white text-4xl font-bold'>Code-Skill</h2>
        <div>
           <a className='text-white text-base ml-5 hover:text-pink-500' href="/">Home</a>
           <a className='text-white text-base ml-5 hover:text-pink-500' href="/statistics">Statistics</a>
           <a className='text-white text-base ml-5 hover:text-pink-500' href="/log">Blog</a>
        
        </div>
    </nav>
    );
};

export default Header;