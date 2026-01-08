"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar({ data }) {
    // Fallback if no data
    if (!data) return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-6 py-4">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-600">Navonmesh</span>
            </div>
        </nav>
    );

    const { website_Logo, college_logo, nav_links } = data;

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/10"
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    {website_Logo?.url ? (
                        <motion.img
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                            src={website_Logo.url}
                            alt="Navonmesh Logo"
                            className="h-10 w-auto object-contain"
                        />
                    ) : (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-600 cursor-pointer"
                        >
                            Navonmesh
                        </motion.span>
                    )}
                </Link>

                <div className="hidden md:flex gap-8 items-center">
                    {nav_links?.map((link, index) => (
                        <Link
                            key={index}
                            href={link.url || '#'}
                            className="relative group cursor-pointer"
                        >
                            <span className="text-gray-300 group-hover:text-white transition-colors text-sm font-medium tracking-wide">
                                {link.name || link.label || 'Link'}
                            </span>
                            <motion.span
                                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"
                            />
                        </Link>
                    ))}
                </div>

                {college_logo?.url ? (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="h-10 w-auto"
                    >
                        <img
                            src={college_logo.url}
                            alt="College Logo"
                            className="h-full w-full object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                        />
                    </motion.div>
                ) : (
                    <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full font-medium transition-all backdrop-blur-sm border border-white/10 cursor-pointer">
                        Login
                    </button>
                )}
            </div>
        </motion.nav>
    );
}
