import React, { useState, useEffect, useRef } from 'react';

const Navbar = ({ toggleSidebar }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownOpen(prev => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="bg-black text-white flex items-center justify-between p-4">
                <h1 className="text-lg font-bold">Good afternoon, Erica</h1>
                <div className="relative flex items-center" ref={dropdownRef}>
                    <img 
                        src="https://via.placeholder.com/40" 
                        alt="User avatar" 
                        className="w-10 h-10 rounded-full mr-1 cursor-pointer" 
                        onClick={toggleDropdown}
                    />
                    <button className="ml-3" onClick={toggleDropdown} aria-label="Toggle dropdown">
                        <svg
                            className={`w-4 h-4 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 10l6 6 6-6" />
                        </svg>
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-10 top-12 w-48 bg-gray-800 rounded-lg shadow-lg z-10"
>
                            <a href="#" className="block px-4 py-2 text-white hover:bg-gray-600">My Account</a>
                            <a href="#" className="block px-4 py-2 text-white hover:bg-gray-600">Privacy Policy</a>
                            <a href="#" className="block px-4 py-2 text-white hover:bg-gray-600">Share Feedback</a>
                            <a href="#" className="block px-4 py-2 text-white hover:bg-gray-600">Sign Out</a>
                        </div>
                    )}
                </div>
                <button 
                    onClick={toggleSidebar} 
                    aria-label="Toggle sidebar" 
                    className="focus:outline-none md:hidden"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
            <div className="border-t border-transparent shadow-sm" style={{ boxShadow: '0 2px 5px rgba(255, 255, 255, 0.2)' }} />
        </>
    );
};

export default Navbar;
