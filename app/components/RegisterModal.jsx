"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RegisterModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        email: '',
        members: '',
        name: '',
        teamname: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };



    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-md bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden"
                    >
                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-blue-500/10 rounded-full blur-[80px] -z-10" />
                        <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-purple-500/10 rounded-full blur-[60px] -z-10" />

                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-white">Register Team</h2>
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <form data-sleekcms="2aze1-mk5uaeio" className="space-y-4 text-start">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Leader Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600"
                                    placeholder="Enter email address"
                                />
                            </div>

                            <div>
                                <label htmlFor="teamname" className="block text-sm font-medium text-gray-400 mb-1">Team Name</label>
                                <input
                                    type="text"
                                    id="teamname"
                                    name="teamname"
                                    required
                                    value={formData.teamname}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600"
                                    placeholder="Enter team name"
                                />
                            </div>

                            <div>
                                <label htmlFor="members" className="block text-sm font-medium text-gray-400 mb-1">Team Members (Count)</label>
                                <input
                                    type="number"
                                    id="members"
                                    name="members"
                                    required
                                    min="2"
                                    max="4"
                                    value={formData.members}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600"
                                    placeholder="2-4 members"
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full mt-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all cursor-pointer"
                            >
                                Submit Registration
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
