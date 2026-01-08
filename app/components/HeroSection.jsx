"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import RegisterModal from './RegisterModal';

export default function HeroSection({ data }) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    // Handle null/loading state gracefully
    if (!data) return null;
    const { title, subtitle, date, level, email } = data;

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +new Date(date) - +new Date();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [date]);


    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Dynamic Background Elements */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] -z-10"
            />

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 font-medium text-sm tracking-wide"
                >
                    {level} Level Hackathon
                </motion.div>

                <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight overflow-visible">
                    <span className="bg-clip-text text-transparent bg-linear-to-b from-white via-white/90 to-white/50 block">
                        {title.split('').map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.05 }}
                                className="inline-block"
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </motion.span>
                        ))}
                    </span>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto font-light tracking-wide"
                >
                    {subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, type: "spring" }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12"
                >
                    {/* Countdown Timer Display */}
                    <div className="px-8 py-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm grid grid-cols-4 gap-8 md:gap-12 hover:border-blue-500/30 transition-colors duration-500">
                        {['Days', 'Hours', 'Mins', 'Secs'].map((label, idx) => {
                            const value = label === 'Days' ? timeLeft.days : label === 'Hours' ? timeLeft.hours : label === 'Mins' ? timeLeft.minutes : timeLeft.seconds;
                            return (
                                <div key={label} className="flex flex-col items-center">
                                    <motion.span
                                        key={value}
                                        initial={{ y: -10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-3xl md:text-4xl font-bold text-white font-mono"
                                    >
                                        {String(value).padStart(2, '0')}
                                    </motion.span>
                                    <span className="text-xs text-gray-400 uppercase tracking-wider mt-1">{label}</span>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsRegisterOpen(true)}
                        className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.6)] cursor-pointer"
                    >
                        Register Now
                    </motion.button>
                    <motion.a
                        href={`mailto:${email}`}
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-xl font-bold text-lg transition-all cursor-pointer flex items-center justify-center"
                    >
                        Contact support
                    </motion.a>
                </motion.div>

                <RegisterModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
            </div>
        </section>
    );
}
