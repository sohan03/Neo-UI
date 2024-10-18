import React, { useState } from 'react';

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Last Week'); // State for dropdown

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    // Sample statistics data
    const stats = [
        { title: "Total revenue", value: "$2.6M", change: "+4.5%", isPositive: true },
        { title: "Average order value", value: "$455", change: "-0.5%", isPositive: false },
        { title: "Tickets sold", value: "5,888", change: "+4.5%", isPositive: true },
        { title: "Pageviews", value: "823,067", change: "+21.2%", isPositive: true },
    ];

    // Sample recent orders data
    const recentOrders = [
        { id: 3000, date: "May 9, 2024", customer: "Leslie Alexander", event: "Bear Hug: Live in Concert", amount: "US$80.00" },
        { id: 3001, date: "May 5, 2024", customer: "Michael Foster", event: "Six Fingers — DJ Set", amount: "US$299.00" },
        { id: 3002, date: "Apr 28, 2024", customer: "Dries Vincent", event: "We All Look The Same", amount: "US$150.00" },
        { id: 3003, date: "Apr 23, 2024", customer: "Lindsay Walton", event: "Bear Hug: Live in Concert", amount: "US$80.00" },
        { id: 3004, date: "Apr 18, 2024", customer: "Courtney Henry", event: "Viking People", amount: "US$114.99" },
        { id: 3005, date: "Apr 14, 2024", customer: "Tom Cook", event: "Six Fingers — DJ Set", amount: "US$299.00" },
        { id: 3006, date: "Apr 10, 2024", customer: "Whitney Francis", event: "We All Look The Same", amount: "US$150.00" },
    ];

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <main className="flex-1 p-4 md:p-6 bg-black">
                <h2 className="text-xl font-semibold mb-4 flex justify-between items-center">
                    Overview
                    {/* Dropdown for selecting time range */}
                    <select
                        value={selectedOption}
                        onChange={handleDropdownChange}
                        className="bg-black border border-gray-900 rounded-md p-1 text-white cursor-pointer"
                    >
                        <option value="Last Week">Last Week</option>
                        <option value="Last Month">Last Month</option>
                        <option value="Last Year">Last Year</option>
                        <option value="Custom Range">Custom Range</option>
                    </select>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 bg-black">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-black border-t-2 border-t-[rgba(255,255,255,0.2)] border-transparent rounded-sm p-2 shadow-sm">
                            <h3 className="text-gray-400 text-sm mb-1">{stat.title}</h3>
                            <p className="text-2xl font-bold">{stat.value}</p>
                            <p className="text-sm mt-1">
                                <span className={`inline-block px-2 py-1 rounded ${stat.isPositive ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'}`}>
                                    {stat.change}
                                </span>
                                <span className="text-gray-400 ml-2">from last week</span>
                            </p>
                        </div>
                    ))}
                </div>

                <h2 className="text-xl font-semibold mb-4">Recent orders</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        <thead>
                            <tr className="text-left text-gray-400">
                                <th className="pb-3 pr-4 whitespace-nowrap">Order</th>
                                <th className="pb-3 pr-4 whitespace-nowrap">Date</th>
                                <th className="pb-3 pr-4 whitespace-nowrap">Customer</th>
                                <th className="pb-3 pr-4 whitespace-nowrap">Event</th>
                                <th className="pb-3 whitespace-nowrap">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentOrders.map((order) => (
                                <tr key={order.id} className="border-t border-gray-700">
                                    <td className="py-3 pr-4 whitespace-nowrap">{order.id}</td>
                                    <td className="py-3 pr-4 text-gray-400 whitespace-nowrap">{order.date}</td>
                                    <td className="py-3 pr-4 whitespace-nowrap">{order.customer}</td>
                                    <td className="py-3 pr-4 whitespace-nowrap">{order.event}</td>
                                    <td className="py-3 whitespace-nowrap">{order.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
