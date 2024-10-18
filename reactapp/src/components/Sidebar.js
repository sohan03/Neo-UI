import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleCollapseToggle = () => {
        setIsCollapsed((prev) => !prev);
    };

    const handleResize = () => {
        if (window.innerWidth < 768) {
            setIsCollapsed(true); // Collapse on mobile view
        } else {
            setIsCollapsed(false); // Expand on larger screens
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize(); // Set initial state

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`flex flex-col h-full fixed top-0 left-0 bg-black transition-all duration-300 ${isCollapsed ? '' : 'w-64'}`}>
            <div className="flex items-center mb-8 p-4">
                {/* Collapse Button with Arrow and Line */}
                <button className="flex items-center" onClick={handleCollapseToggle}>
                    <div className={`transition-transform duration-300 ${isCollapsed ? 'rotate-0' : 'rotate-180'}`}>
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <div className="border-l border-white h-4 mx-2"></div>
                    {!isCollapsed && <span className="text-lg font-semibold text-white">Neo UI</span>}
                </button>
            </div>

            {/* Navigation Links with SVG Icons */}
            <nav className="flex flex-col">
                <Link to="/" className="flex items-center py-2 px-4 mt-2 text-white hover:bg-gray-700 transition group" title="Go to Home">
                    {/* Home Icon */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v11a1 1 0 01-1 1h-3" />
                    </svg>
                    {!isCollapsed && <span className="ml-2">Home</span>}
                </Link>
                <Link to="/events" className="flex items-center py-2 px-4 mt-2 text-white hover:bg-gray-700 transition group" title="View Events">
                    {/* Events Icon */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-6 14h6m2-10H6v12h12V7z" />
                    </svg>
                    {!isCollapsed && <span className="ml-2">Events</span>}
                </Link>
                <Link to="/orders" className="flex items-center py-2 px-4 mt-2 text-white hover:bg-gray-700 transition group" title="View Orders">
                    {/* Orders Icon */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h18M3 10h18M5 6v12m14-12v12m-7 0h6" />
                    </svg>
                    {!isCollapsed && <span className="ml-2">Orders</span>}
                </Link>
                <Link to="/settings" className="flex items-center py-2 px-4 mt-2 text-white hover:bg-gray-700 transition group" title="Settings">
                    {/* Settings Icon */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 4v.01m-6.938 1.939l1.414 1.415M6.343 17.657l1.415-1.414M4 12h3m4 0h3m1.657-4.343l1.415 1.415M17.657 6.343l1.415-1.414M20 12h-3m-4 0h-3M4.343 6.343l1.414-1.415" />
                    </svg>
                    {!isCollapsed && <span className="ml-2">Settings</span>}
                </Link>

                {/* New Links for Change Log and Support */}
                <Link to="/changelog" className="flex items-center py-2 px-4 mt-2 text-white hover:bg-gray-700 transition group" title="View Change Log">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
                    </svg>
                    {!isCollapsed && <span className="ml-2">Change Log</span>}
                </Link>
                <Link to="/support" className="flex items-center py-2 px-4 mt-2 text-white hover:bg-gray-700 transition group" title="Get Support">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 14h2a2 2 0 002-2v-1a2 2 0 00-2-2h-2M8 14h2a2 2 0 002-2v-1a2 2 0 00-2-2H8M6 6v12a2 2 0 002 2h8a2 2 0 002-2V6H6z" />
                    </svg>
                    {!isCollapsed && <span className="ml-2">Support</span>}
                </Link>
            </nav>

            {/* Upcoming Events Section */}
            {!isCollapsed && ( // Only render if not collapsed
                <div className="mt-4 p-4 bg-black rounded-lg">
                    <h3 className="text-sm font-semibold text-gray-400 mb-2">Upcoming Events</h3>
                    <ul className="text-sm">
                        <li className="py-1">Bear Hug: Live in Concert</li>
                        <li className="py-1">Six Fingers — DJ Set</li>
                        <li className="py-1">We All Look The Same</li>
                        <li className="py-1">Viking People</li>
                    </ul>
                </div>
            )}

            {/* User Profile Section */}
            <div className={`mt-auto p-4 flex flex-col items-start relative bg-black rounded-lg cursor-pointer ${isDropdownOpen ? 'bg-gray-700' : 'hover:bg-white hover:bg-opacity-20'}`} onClick={() => setDropdownOpen(!isDropdownOpen)}>
                <div className="flex items-center">
                    <img src="/api/placeholder/40/40" alt="User avatar" className="w-10 h-10 rounded-full mr-3 cursor-pointer transition transform hover:scale-105" />
                    {!isCollapsed && (
                        <div className="flex flex-col">
                            <p className="font-semibold text-white cursor-pointer">Erica</p>
                            <p className="text-sm text-gray-400 mt-1">erica@example.com</p>
                        </div>
                    )}
                </div>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                    <div className="absolute right-0 top-[-155px] w-48 bg-gray-800 rounded-lg shadow-lg z-10">
                        <Link to="/account" className="block px-4 py-2 text-white hover:bg-gray-600 transition rounded-t-lg">My Account</Link>
                        <Link to="/privacy" className="block px-4 py-2 text-white hover:bg-gray-600 transition">Privacy Policy</Link>
                        <Link to="/feedback" className="block px-4 py-2 text-white hover:bg-gray-600 transition">Feedback</Link>
                        <Link to="/logout" className="block px-4 py-2 text-white hover:bg-gray-600 transition rounded-b-lg">Logout</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
