// import React, { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Sidebar from './components/Sidebar'; // Ensure this component exists
// import Navbar from './components/Navbar';
// import Dashboard from './components/Dashboard';
// import OrderDashboard from './components/Order';

// const App = () => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//     return (
//         <div className="flex">
//             <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
//             <div className="flex-1 md:ml-20 ">
//                 <Navbar toggleSidebar={toggleSidebar} /> 
//                 <Routes>
//                     <Route path="/" element={<Dashboard />} />
//                     <Route path="/orders" element={<OrderDashboard />} ></Route>
//                     {/* Add other routes as needed */}
//                 </Routes>
//             </div>
//         </div>
//     );
// };

// export default App;

// import React, { useState } from 'react';
// import Sidebar from './components/Sidebar'; // Ensure this component exists
// import Navbar from './components/Navbar';
// import Dashboard from './components/Dashboard';
// import OrderDashboard from './components/Order'; // Ensure this path is correct
// // import Events from './components/Events'; // Ensure this path is correct
// // import Settings from './components/Settings'; // Ensure this path is correct

// const App = () => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const [currentPage, setCurrentPage] = useState('dashboard'); // State to manage current page

//     const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//     // Function to switch between pages
//     const navigateTo = (page) => {
//         setCurrentPage(page);
//     };

//     return (
//         <div className="flex">
//             <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} navigateTo={navigateTo} />
//             <div className="flex-1 md:ml-20">
//                 <Navbar toggleSidebar={toggleSidebar} />
                
//                 <main className="p-4">
//                     {/* Conditional rendering based on currentPage */}
//                     {currentPage === 'dashboard' && <Dashboard />}
//                     {currentPage === 'orders' && <OrderDashboard />}
//                     {/* {currentPage === 'events' && <Events />}
//                     {currentPage === 'settings' && <Settings />} */}
//                 </main>
//             </div>
//         </div>
//     );
// };

// export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../src/components/Dashboard';
import OrderDashboard from '../src/components/Order';
import Sidebar from '../src/components/Sidebar';
import Navbar from '../src/components/Navbar';

const App = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 md:ml-20">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/orders" element={<OrderDashboard />} />
                    {/* Add more routes as needed */}
                </Routes>
            </div>
        </div>
    );
};

export default App;


