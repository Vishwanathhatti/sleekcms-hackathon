"use client";
import { motion } from 'framer-motion';

export default function SponsorsSection({ data }) {
    if (!data) return null;

    return (
        <section id="sponsors" className="py-24 bg-black relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-16 text-white"
                >
                    Our Sponsors
                </motion.h2>

                <div className="flex flex-col gap-16 items-center">
                    {data.map((tier, tierIdx) => (
                        <div key={tier._id} className="w-full flex flex-col items-center">
                            <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: tierIdx * 0.2 }}
                                className="text-sm font-bold text-gray-500 uppercase tracking-[0.2em] mb-8 text-center"
                            >
                                {tier.type}
                            </motion.h3>

                            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                                {tier.sponsers_name.map((name, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: (tierIdx * 0.2) + (idx * 0.1) }}
                                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                                        className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:border-white/30 transition-all cursor-default"
                                    >
                                        <span className="text-xl md:text-2xl font-bold text-gray-300">{name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
