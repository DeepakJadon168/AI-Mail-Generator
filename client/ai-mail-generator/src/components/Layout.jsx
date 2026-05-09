import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = () => {
    return (
      <div className="flex h-screen bg-[#0a0f1e] transition-colors">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
            <Navbar />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#0a0f1e] p-6 transition-colors">
                <Outlet />
            </main>
        </div>
    </div>
    );
};

export default Layout;