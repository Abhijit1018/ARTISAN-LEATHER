'use client';

import { motion } from 'framer-motion';

const faqs = [
    {
        question: "What type of leather do you use?",
        answer: "We exclusively use full-grain, vegetable-tanned leather sourced from Italy. This is the highest quality leather available, meaning it retains the original texture and imperfections of the hide. Vegetable tanning uses natural tannins found in bark and leaves, resulting in an eco-friendly product that develops a beautiful patina over time."
    },
    {
        question: "How should I care for my leather product?",
        answer: "To keep your leather looking its best, avoid prolonged exposure to direct sunlight and extreme heat or cold. If it gets wet, let it dry naturally at room temperature. We recommend applying a high-quality leather conditioner every 6-12 months to keep the leather supple and prevent cracking."
    },
    {
        question: "Does your warranty cover natural wear and tear?",
        answer: "Our 1-Year Warranty covers manufacturer defects, such as issues with stitching, hardware (zippers, buckles, rivets), and craftsmanship. It does not cover natural variations in the leather, scratches, normal wear and tear, or damage caused by misuse."
    },
    {
        question: "Do you offer international shipping?",
        answer: "Yes, we ship worldwide! Shipping costs and delivery times vary depending on the destination. All international orders are shipped via express courier and are fully trackable. Please note that customers are responsible for any customs duties or taxes applicable in their country."
    },
    {
        question: "Can I return or exchange my order?",
        answer: "We offer a 30-day return policy for unused, unaltered items in their original packaging. If you're not completely satisfied with your purchase, you can return it for a full refund or exchange. Custom or monogrammed items are final sale and cannot be returned."
    },
    {
        question: "Do your products scratch easily?",
        answer: "Full-grain vegetable-tanned leather will naturally show scratches and scuffs with use — this is a feature, not a bug! These marks contribute to the unique patina of your item. Most light scratches can be easily rubbed out with the natural oils from your fingers or a soft cloth."
    }
];

export default function FAQPage() {
    return (
        <>
            <section className="shop-hero">
                <motion.div
                    className="container"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1>Frequently Asked Questions</h1>
                    <p>Everything you need to know about our products, materials, and policies.</p>
                </motion.div>
            </section>

            <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                style={{
                                    backgroundColor: 'var(--color-white)',
                                    padding: 'var(--space-2xl)',
                                    borderRadius: 'var(--radius-lg)',
                                    boxShadow: 'var(--shadow-sm)',
                                }}
                            >
                                <h3 style={{
                                    color: 'var(--color-secondary)',
                                    marginBottom: 'var(--space-md)',
                                    fontSize: '1.25rem'
                                }}>
                                    {faq.question}
                                </h3>
                                <p style={{
                                    color: 'var(--color-gray-600)',
                                    lineHeight: '1.8',
                                    fontSize: '1rem'
                                }}>
                                    {faq.answer}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        style={{
                            textAlign: 'center',
                            marginTop: 'var(--space-4xl)',
                            padding: 'var(--space-2xl)',
                            backgroundColor: 'var(--color-gray-100)',
                            borderRadius: 'var(--radius-lg)'
                        }}
                    >
                        <h3 style={{ marginBottom: 'var(--space-md)' }}>Still have questions?</h3>
                        <p style={{ color: 'var(--color-gray-600)', marginBottom: 'var(--space-lg)' }}>
                            We're here to help. Reach out to our customer support team.
                        </p>
                        <a href="/contact" className="btn btn-outline">Contact Us</a>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
