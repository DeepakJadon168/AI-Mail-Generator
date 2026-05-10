import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import api from '../utils/api';
import { useAuth } from '../context/AuthContext';

const VerifyOtp = () => {
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();

    const { userId, email, otp: receivedOtp } = location.state || {};
    const [otp, setOtp] = useState(receivedOtp || '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { data } = await api.post('/auth/verify-otp', { userId, otp });
            login(data);
            toast.success('Email verified successfully!');
            navigate('/dashboard');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Verification failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0f1e] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            {/* Logo */}
            <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
                <h1 className="text-3xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    MailGen AI
                </h1>
                <h2 className="text-2xl font-bold text-white">Verify your email</h2>
                <p className="mt-2 text-gray-400 text-sm">
                    OTP sent to <span className="text-indigo-400 font-medium">{email}</span>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-[#0d1426] py-8 px-4 shadow-xl border border-[#1a2744] sm:rounded-2xl sm:px-10">
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                                Enter OTP
                            </label>
                            <input
                                type="text"
                                required
                                maxLength={6}
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                placeholder="••••••"
                                className="block w-full px-4 py-4 bg-[#111827] border border-[#1a2744] text-gray-100 rounded-xl placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-center text-2xl tracking-[0.5em] transition-colors"
                            />
                            <p className="mt-2 text-xs text-gray-500 text-center">
                                Check your email inbox for the 6-digit code
                            </p>
                        </div>

                        <button
                            type="submit"
                            disabled={loading || otp.length !== 6}
                            className="w-full flex justify-center py-3 px-4 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition-all duration-200 shadow-lg shadow-indigo-500/20"
                        >
                            {loading ? 'Verifying...' : 'Verify OTP'}
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm">
                        <span className="text-gray-500">Wrong email? </span>
                        <Link to="/signup" className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                            Go back
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyOtp;