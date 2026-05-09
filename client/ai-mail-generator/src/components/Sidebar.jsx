import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, ClockIcon } from '@heroicons/react/24/outline';

const Sidebar = () => {
    return (
        <div className="w-64 bg-[#0d1426] border-r border-[#1a2744] flex flex-col hidden md:flex transition-colors">
    <div className="h-16 flex items-center px-6 border-b border-[#1a2744]">
                <h1 className="text-xl font-bold text-primary-600">MailGen AI</h1>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-2">
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `flex items-center px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-50'}`
                    }
                >
                    <HomeIcon className="w-5 h-5 mr-3" />
                    Dashboard
                </NavLink>
                <NavLink
                    to="/dashboard/history"
                    className={({ isActive }) =>
                        `flex items-center px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-50'}`
                    }
                >
                    <ClockIcon className="w-5 h-5 mr-3" />
                    History
                </NavLink>
            </nav>
            <div className="p-4 border-t border-gray-200">
                <div className="text-xs text-center text-gray-500">
                    Built with React & MERN
                </div>
            </div>
        </div>
    );
};

export default Sidebar;