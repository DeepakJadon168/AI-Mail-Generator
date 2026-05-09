import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ArrowRightOnRectangleIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') === 'true';
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const handleLogout = () => {
        logout();
        toast.success('Logged out!');
        navigate('/');
    };

    return (
        <header className="h-16 bg-[#0d1426] border-b border-[#1a2744] flex items-center justify-between px-6 transition-colors">
            <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Welcome, <span className="text-gray-800 dark:text-white font-semibold">{user?.name}</span>
            </h2>
            <div className="flex items-center gap-3">
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                    {darkMode ? (
                        <SunIcon className="w-5 h-5 text-yellow-500" />
                    ) : (
                        <MoonIcon className="w-5 h-5" />
                    )}
                </button>
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                >
                    <ArrowRightOnRectangleIcon className="w-5 h-5" />
                    Logout
                </button>
            </div>
        </header>
    );
};

export default Navbar;