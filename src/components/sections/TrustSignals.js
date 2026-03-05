'use client';

import { motion } from 'framer-motion';

const trustItems = [
    {
        icon: '🛡️',
        title: '1-Year Warranty',
        description: 'Every product comes with a comprehensive warranty covering manufacturer defects on all direct purchases. We stand behind our craft.',
    },
    {
        icon: '🏆',
        title: 'Premium Full-Grain',
        description: 'We use only full-grain leather — the highest quality, most durable leather available. Naturally tanned over 30–40 days with zero toxins.',
    },
    {
        icon: '✋',
        title: 'Handcrafted',
        description: 'Every piece is meticulously handcrafted by skilled artisans whose expertise has been passed down through generations of master leatherworkers.',
    },
    {
        icon: '🌍',
        title: 'Eco-Friendly Process',
        description: 'Our organic vegetable tanning process uses no chrome or harmful chemicals. Better for you, better for the artisans, and better for the planet.',
    },
];

export default function TrustSignals() {
    return (
        <section className="section-padding trust-section" id="trust-signals">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">The Artisan Promise</h2>
                    <div className="gold-line" />
                    <p className="section-subtitle">
                        When you choose Artisan Leather, you&apos;re choosing a commitment to
                        quality, sustainability, and authentic craftsmanship.
                    </p>
                </motion.div>

                <div className="trust-grid">
                    {trustItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            className="trust-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="trust-icon">{item.icon}</div>
                            <h3 className="trust-title">{item.title}</h3>
                            <p className="trust-description">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
