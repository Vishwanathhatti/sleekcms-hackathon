"use client";
import { motion } from 'framer-motion';

export default function TeamFormationSection({ data }) {
    if (!data) return null;
    const { title, subtitle, content, min_team_size, max_team_size } = data;

    // Split title for coloring "Dream Team"
    const titleParts = title.split('Dream Team');

    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden max-w-7xl mx-auto">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-left"
                    >
                        <div className="inline-block px-4 py-2 border border-white/10 rounded-full bg-white/5 mb-8">
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                                <span className="text-sm text-gray-300 font-medium">Team Formation</span>
                            </div>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight leading-none wrap-break-word">
                            {titleParts[0]}
                            <span className="text-cyan-400 block">Dream Team</span>
                            {titleParts[1]}
                        </h2>

                        <p className="text-xl text-gray-300 mb-8 font-medium">
                            {subtitle.split('Teams build revolutions')[0]}
                            <span className="text-cyan-400">Teams build revolutions.</span>
                        </p>

                        <div className="prose prose-invert prose-lg text-gray-400 mb-12 wrap-break-word max-w-full" dangerouslySetInnerHTML={{ __html: content?.replace(/&nbsp;/g, ' ') }} />

                        {/* Team Size Visualizer */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                            <h4 className="text-gray-400 mb-6 font-medium">Team Size</h4>
                            <div className="flex flex-wrap items-center gap-4 md:gap-8 justify-center md:justify-start">
                                {/* 1 Member - Not Allowed */}
                                <div className="relative group">
                                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-600 font-bold text-2xl group-hover:bg-red-500/10 group-hover:border-red-500/50 group-hover:text-red-500 transition-all cursor-not-allowed">
                                        1
                                    </div>
                                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-red-500 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Not Allowed</span>
                                </div>

                                {/* Allowed Range */}
                                {[2, 3, 4].map((num) => (
                                    <motion.div
                                        key={num}
                                        whileHover={{ scale: 1.1 }}
                                        className="relative group"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-500 flex items-center justify-center text-cyan-400 font-bold text-2xl shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                                            {num}
                                        </div>
                                        {num === 4 && (
                                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-cyan-400 font-medium whitespace-nowrap">Perfect Range</span>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                            <div className="mt-8 justify-between text-xs text-gray-600 font-mono hidden md:flex">
                                <span>Not Allowed</span>
                                <span className="text-cyan-600">Perfect Range</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                        {/* Min Members Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500/30 transition-colors group"
                        >
                            <div className="w-12 h-12 bg-cyan-900/30 rounded-xl flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="8.5" cy="7" r="4"></circle>
                                    <line x1="20" y1="8" x2="20" y2="14"></line>
                                    <line x1="23" y1="11" x2="17" y2="11"></line>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Minimum {min_team_size} Members</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Every great innovation needs a collaborator. Find someone who complements your skills.
                            </p>
                        </motion.div>

                        {/* Max Members Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500/30 transition-colors group"
                        >
                            <div className="w-12 h-12 bg-cyan-900/30 rounded-xl flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Maximum {max_team_size} Members</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Small teams move fast and build faster. Keep communication efficient.
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
