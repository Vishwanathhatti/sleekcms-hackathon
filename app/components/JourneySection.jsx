"use client";
import { motion } from 'framer-motion';

export default function JourneySection({ data }) {
    if (!data) return null;

    return (
        <section id="rounds" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center mb-20 text-white"
                >
                    Hackathon Journey
                </motion.h2>

                <div className="relative max-w-5xl mx-auto">
                    {/* Connecting Line */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500 via-purple-500 to-transparent md:-translate-x-1/2"
                    />

                    <div className="flex flex-col gap-12">
                        {data.map((round, index) => (
                            <motion.div
                                key={round._id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`flex flex-col md:flex-row gap-8 items-start relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >

                                {/* Timeline Node */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white rounded-full mt-6 shadow-[0_0_15px_rgba(255,255,255,0.5)] md:-translate-x-2 z-10" />

                                {/* Content */}
                                <div className="ml-12 md:ml-0 md:w-1/2 pl-0 md:px-12">
                                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-white/20 transition-all hover:bg-white/[0.07] group">
                                        <div className="text-blue-400 font-bold mb-1 tracking-wider text-sm">{round.round}</div>
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{round.title}</h3>
                                        <p className="text-gray-400 mb-4 text-sm leading-relaxed">{round.desc}</p>

                                        <ul className="space-y-2">
                                            {round.points.map((point, i) => (
                                                <li key={i} className="flex items-center text-sm text-gray-300">
                                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Empty space for the other side */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
