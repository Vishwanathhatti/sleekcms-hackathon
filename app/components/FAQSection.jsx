"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQSection({ data }) {
    if (!data) return null;

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faqs" className="py-24 bg-[#0A0A0A] relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-12 text-white"
                >
                    Frequently Asked Questions
                </motion.h2>

                <div className="space-y-4">
                    {data.map((faq, index) => (
                        <motion.div
                            key={faq._id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group border border-white/10 rounded-2xl bg-white/5 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex items-center justify-between w-full p-6 text-left outline-none hover:bg-white/2 transition-colors cursor-pointer"
                            >
                                <h3 className={`text-lg font-medium pr-8 transition-colors ${openIndex === index ? 'text-blue-400' : 'text-white'}`}>
                                    {faq.question}
                                </h3>

                                <div className="relative w-6 h-6 flex items-center justify-center">
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 0 : 90 }}
                                        className="absolute w-4 h-0.5 bg-white"
                                    />
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 90 }}
                                        className="absolute w-0.5 h-4 bg-white"
                                    />
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                            <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
