import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import { ClipboardDocumentIcon, CheckIcon, ChevronDownIcon, ChevronUpIcon, TrashIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast';

const History = () => {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expanded, setExpanded] = useState(null);
    const [copied, setCopied] = useState('');
    const [deleting, setDeleting] = useState(null);

    useEffect(() => {
        fetchHistory();
    }, []);

    const fetchHistory = async () => {
        try {
            const { data } = await api.get('/ai/history');
            setHistory(data);
        } catch (error) {
            toast.error('Failed to fetch history');
        } finally {
            setLoading(false);
        }
    };

    const copyToClipboard = (text, id) => {
        navigator.clipboard.writeText(text);
        setCopied(id);
        toast.success('Copied!');
        setTimeout(() => setCopied(''), 2000);
    };

    const handleDelete = async (e, id) => {
        e.stopPropagation();
        setDeleting(id);
        try {
            await api.delete(`/ai/history/${id}`);
            setHistory(history.filter(item => item._id !== id));
            toast.success('Deleted!');
        } catch (error) {
            toast.error('Failed to delete');
        } finally {
            setDeleting(null);
        }
    };

    if (loading) return (
        <div className="flex items-center justify-center h-64 text-gray-400">
            Loading history...
        </div>
    );

    if (history.length === 0) return (
        <div className="flex flex-col items-center justify-center h-64 text-gray-500">
            <ClipboardDocumentIcon className="w-12 h-12 mb-3" />
            <p>No history yet. Generate your first email!</p>
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-semibold text-white mb-6">Generation History</h2>
            <div className="space-y-4">
                {history.map((item) => (
                    <div key={item._id} className="bg-[#0d1426] border border-[#1a2744] rounded-xl shadow-sm overflow-hidden">
                        {/* Header */}
                        <div
                            className="flex justify-between items-center p-4 cursor-pointer hover:bg-[#111827] transition-colors"
                            onClick={() => setExpanded(expanded === item._id ? null : item._id)}
                        >
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-white truncate">{item.subject}</p>
                                <p className="text-xs text-gray-500 mt-1 truncate">{item.prompt}</p>
                            </div>
                            <div className="flex items-center gap-3 ml-4">
                                <span className="text-xs text-gray-500">
                                    {new Date(item.createdAt).toLocaleDateString('en-IN', {
                                        day: 'numeric', month: 'short', year: 'numeric'
                                    })}
                                </span>
                                {/* Delete Button */}
                                <button
                                    onClick={(e) => handleDelete(e, item._id)}
                                    disabled={deleting === item._id}
                                    className="p-1.5 rounded-lg text-gray-500 hover:text-red-400 hover:bg-red-400/10 transition-colors"
                                >
                                    <TrashIcon className="w-4 h-4" />
                                </button>
                                {expanded === item._id
                                    ? <ChevronUpIcon className="w-4 h-4 text-gray-400" />
                                    : <ChevronDownIcon className="w-4 h-4 text-gray-400" />
                                }
                            </div>
                        </div>

                        {/* Expanded Content */}
                        {expanded === item._id && (
                            <div className="border-t border-[#1a2744] p-4 space-y-4">
                                {[
                                    { title: 'Subject Line', content: item.subject, key: 'subject' },
                                    { title: 'Cold Email', content: item.emailBody, key: 'email' },
                                    { title: 'LinkedIn DM', content: item.linkedInDM, key: 'linkedin' },
                                    { title: 'Follow-up Email', content: item.followUpEmail, key: 'followup' },
                                ].map(({ title, content, key }) => (
                                    <div key={key} className="bg-[#111827] rounded-lg p-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <h4 className="text-sm font-medium text-gray-300">{title}</h4>
                                            <button
                                                onClick={() => copyToClipboard(content, `${item._id}-${key}`)}
                                                className="text-gray-500 hover:text-indigo-400 transition-colors"
                                            >
                                                {copied === `${item._id}-${key}`
                                                    ? <CheckIcon className="w-4 h-4 text-green-400" />
                                                    : <ClipboardDocumentIcon className="w-4 h-4" />
                                                }
                                            </button>
                                        </div>
                                        <p className="text-sm text-gray-400 whitespace-pre-wrap">{content}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default History;