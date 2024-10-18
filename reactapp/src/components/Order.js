import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

const OrderDashboard = () => {
    const [recentOrders, setRecentOrders] = useState([
        { id: 3000, date: "May 9, 2024", customer: "Leslie Alexander", event: "Bear Hug: Live in Concert", amount: "US$80.00" },
        { id: 3001, date: "May 5, 2024", customer: "Michael Foster", event: "Six Fingers — DJ Set", amount: "US$299.00" },
        { id: 3002, date: "Apr 28, 2024", customer: "Dries Vincent", event: "We All Look The Same", amount: "US$150.00" },
        { id: 3003, date: "Apr 23, 2024", customer: "Lindsay Walton", event: "Bear Hug: Live in Concert", amount: "US$80.00" },
        { id: 3004, date: "Apr 18, 2024", customer: "Courtney Henry", event: "Viking People", amount: "US$114.99" },
        { id: 3005, date: "Apr 14, 2024", customer: "Tom Cook", event: "Six Fingers — DJ Set", amount: "US$299.00" },
        { id: 3006, date: "Apr 10, 2024", customer: "Whitney Francis", event: "We All Look The Same", amount: "US$150.00" },
    ]);

    const handleCreateOrder = () => {
        // Show a toast notification directly specifying position
        toast.success("Order created successfully!", {
            position: "top-right", // Directly specify position as a string
        });

        // Example of how to add a new order (you can expand this functionality)
        const newOrder = {
            id: recentOrders.length + 3000, // Generate new order ID
            date: new Date().toLocaleDateString(), // Use current date
            customer: "New Customer", // Placeholder
            event: "New Event", // Placeholder
            amount: "US$0.00" // Placeholder
        };
        setRecentOrders([...recentOrders, newOrder]);
    };

    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <main className="flex-1 p-4 md:p-6 bg-black">
                <h2 className="text-xl font-semibold mb-4 flex justify-between items-center">
                    Orders
                    {/* Button for creating a new order */}
                    <button
                        onClick={handleCreateOrder}
                        className="bg-gray-600 hover:bg-white-600 text-white font-bold py-2 px-4 rounded transition"
                    >
                        Create Order
                    </button>
                </h2>
                
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
            <ToastContainer /> {/* Add ToastContainer to render the toasts */}
        </div>
    );
};

export default OrderDashboard;
