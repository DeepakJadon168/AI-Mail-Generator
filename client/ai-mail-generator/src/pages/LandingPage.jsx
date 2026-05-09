import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ArrowRightIcon, BoltIcon, ChartBarIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const LandingPage = () => {
    const { user } = useAuth();

    const features = [
        {
            name: 'Lightning Fast Generation',
            description: 'Generate highly custom cold emails in seconds using state-of-the-art AI.',
            icon: BoltIcon,
        },
        {
            name: 'Omnichannel Outreach',
            description: 'Get an email, a follow-up, and a LinkedIn DM perfectly synced for your prospect.',
            icon: DocumentTextIcon,
        },
        {
            name: 'Higher Conversion Rates',
            description: 'Personalized copy ensures higher open rates and better reply outcomes.',
            icon: ChartBarIcon,
        },
    ];

    return (
        <div className="min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900">

            {/* Navbar */}
            <nav className="border-b border-white/10 bg-slate-900/80 backdrop-blur-md fixed w-full z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <span className="text-2xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            MailGen AI
                        </span>
                        <div className="flex items-center space-x-4">
                            {user ? (
                                <Link
                                    to="/dashboard"
                                    className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-500 transition-all duration-200"
                                >
                                    Go to Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        className="text-gray-300 hover:text-white font-medium px-3 py-2 text-sm transition-colors"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        to="/signup"
                                        className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-200"
                                    >
                                        Get Started
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden min-h-screen flex items-center">
                {/* Background Image */}
                <div
                    className="absolute inset-0 -z-10"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1676299081847-824916de030a?w=1920&q=80')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-indigo-950/85 to-slate-900/90"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center w-full">
                    <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2 mb-8">
                        <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span>
                        <span className="text-indigo-300 text-sm font-medium">Powered by Llama 3.3 70B</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
                        Write Cold Emails That <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                            Actually Get Replies
                        </span>
                    </h1>

                    <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Stop wasting hours drafting outreach. Enter your prospect's context, and let our AI generate the perfect structured sequence — Email, Follow-up, and LinkedIn DM all at once.
                    </p>

                    <div className="mt-10 flex justify-center gap-x-4 flex-wrap gap-y-4">
                        <Link
                            to={user ? "/dashboard" : "/signup"}
                            className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full text-white bg-indigo-600 hover:bg-indigo-500 hover:scale-105 transition-all duration-200 shadow-lg shadow-indigo-500/30"
                        >
                            Start Generating for Free
                            <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/login"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full text-white border border-white/20 hover:bg-white/10 transition-all duration-200"
                        >
                            Log in
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="mt-16 flex justify-center gap-12 flex-wrap">
                        {[
                            { value: '10x', label: 'Faster Outreach' },
                            { value: '3-in-1', label: 'Email + LinkedIn + Follow-up' },
                            { value: '100%', label: 'AI Powered' },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="text-3xl font-bold text-white">{stat.value}</p>
                                <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-24 bg-slate-900 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Everything you need to close more deals
                        </h2>
                        <p className="mt-4 text-lg text-gray-400">
                            Built for sales teams who demand performance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature) => (
                            <div
                                key={feature.name}
                                className="relative p-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-300"
                            >
                                <div className="h-12 w-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
                                    <feature.icon className="h-6 w-6 text-indigo-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">{feature.name}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="relative py-24 bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 border-t border-white/5">
                <div className="max-w-2xl mx-auto text-center px-4">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
                        Ready to scale your outreach?
                    </h2>
                    <p className="text-lg text-gray-300 mb-10">
                        Join hundreds of sales professionals using MailGen to accelerate their pipeline today.
                    </p>
                    <Link
                        to="/signup"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full text-white bg-indigo-600 hover:bg-indigo-500 hover:scale-105 transition-all duration-200 shadow-lg shadow-indigo-500/30"
                    >
                        Create Free Account
                        <ArrowRightIcon className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-slate-900 border-t border-white/5 py-12">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <span className="text-xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        MailGen AI
                    </span>
                    <p className="text-gray-500 text-sm mt-4">
                        © {new Date().getFullYear()} MailGen AI. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;