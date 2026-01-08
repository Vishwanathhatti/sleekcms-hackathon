"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FooterSection({ data }) {
    if (!data) return null;
    const { title, description, social, quicklinks, contact } = data;

    return (
        <footer id="contact" className="bg-[#050505] pt-20 pb-10 border-t border-white/10 font-sans">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            {description}
                        </p>
                        <div className="flex gap-4">
                            {social.map((item, idx) => (
                                <motion.a
                                    key={item._id}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ scale: 1.2, backgroundColor: "rgba(255,255,255,0.2)" }}
                                    className="p-2 bg-white rounded-full hover:bg-white/80 transition-colors "
                                >
                                    <img src={item.icon?.url} alt={item.name} className="w-5 h-5 opacity-70 hover:opacity-100" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quicklinks.map((link) => (
                                link.name && (
                                    <li key={link._id}>
                                        <Link
                                            href={link.url}
                                            className="text-gray-400 hover:text-white transition-colors hover:pl-2"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                )
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-1"
                    >
                        <h4 className="text-white font-bold mb-6">Contact Us</h4>
                        <div className="space-y-4">
                            {contact.map((item) => (
                                <div key={item._id} className="flex items-start gap-4">
                                    <div className="mt-1 min-w-[20px]">
                                        <img src={item.icon?.url} alt={item.type} className="w-5 h-5 opacity-60" />
                                    </div>
                                    <div>
                                        <h5 className="text-sm font-medium text-gray-300">{item.name}</h5>
                                        <p className="text-gray-400">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="border-t border-white/5 pt-8 text-center text-gray-500 text-sm"
                >
                    &copy; {new Date().getFullYear()} {title}. All rights reserved. Code. Create. Compete.
                </motion.div>
            </div>
        </footer>
    );
}
