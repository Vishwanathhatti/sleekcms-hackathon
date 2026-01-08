"use client";
import { motion } from 'framer-motion';

export default function PrizeSection({ data }) {
    if (!data) return null;

    // Calculate Total Prize
    const totalPrize = data.reduce((acc, curr) => {
        // Remove commas and convert to integer
        const amount = parseInt(curr.prize.replace(/,/g, ''), 10);
        return acc + (isNaN(amount) ? 0 : amount);
    }, 0);

    // Colors for different positions
    const getGlowColor = (position) => {
        switch (position) {
            case '1': return 'shadow-yellow-500/20 border-yellow-500/50 hover:shadow-yellow-500/40'; // Gold
            case '2': return 'shadow-gray-400/20 border-gray-400/50 hover:shadow-gray-400/40';   // Silver
            case '3': return 'shadow-orange-700/20 border-orange-700/50 hover:shadow-orange-700/40'; // Bronze
            default: return 'shadow-blue-500/20 border-white/10';
        }
    };

    const getTitleColor = (position) => {
        switch (position) {
            case '1': return 'text-yellow-400';
            case '2': return 'text-gray-300';
            case '3': return 'text-orange-400';
            default: return 'text-white';
        }
    };

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="prizes" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-gray-500 mb-4"
                    >
                        Prizes & Rewards
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
                    >
                        <span className="text-gray-400 mr-2">Total Prize Pool</span>
                        <span className="text-2xl font-bold text-white">₹{totalPrize.toLocaleString()}</span>
                    </motion.div>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                >
                    {data.map((prize) => (
                        <motion.div
                            variants={item}
                            key={prize._id}
                            whileHover={{ y: -10 }}
                            className={`relative group p-8 rounded-3xl bg-white/5 border backdrop-blur-sm transition-colors duration-300 flex flex-col items-center text-center h-full ${getGlowColor(prize.position)} ${prize.position === '1' ? 'border-yellow-500/30 bg-yellow-500/2' : 'border-white/10'}`}
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="text-8xl font-black">{prize.position}</span>
                            </div>

                            <div className="relative z-10 flex flex-col items-center w-full h-full justify-between">
                                <div className="flex flex-col items-center w-full">
                                    <motion.div
                                        className="w-24 h-24 mb-6 relative"
                                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {/* Using raw URL for SVG */}
                                        <img
                                            src={prize.icon?.url}
                                            alt={prize.icon?.description || `Prize ${prize.position}`}
                                            className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                                        />
                                    </motion.div>

                                    <h3 className={`text-2xl font-bold mb-2 ${getTitleColor(prize.position)}`}>
                                        {prize.position === '1' ? 'Winner' : prize.position === '2' ? 'Runner Up' : '2nd Runner Up'}
                                    </h3>
                                </div>

                                <div className="text-4xl font-black text-white tracking-tight mt-4">
                                    ₹{prize.prize}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
