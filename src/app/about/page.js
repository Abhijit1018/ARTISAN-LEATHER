'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <>
            <section className="shop-hero" style={{ padding: '140px 0 80px' }}>
                <motion.div
                    className="container"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1>Our Story</h1>
                    <p>A heritage of craftsmanship, passed down through generations.</p>
                </motion.div>
            </section>

            <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
                <div className="container">
                    <div className="about-grid">

                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--color-secondary)', marginBottom: 'var(--space-lg)' }}>
                                Founded on <span className="gold-accent">Tradition</span>
                            </h2>
                            <p style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', color: 'var(--color-gray-600)', marginBottom: 'var(--space-md)', lineHeight: '1.8' }}>
                                Artisan Leather Co. began in a small workshop in Florence, Italy, over 35 years ago. What started as a modest family endeavor has grown into a globally recognized brand, but our core philosophy remains unchanged: to create exceptional leather goods using time-honored techniques.
                            </p>
                            <p style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', color: 'var(--color-gray-600)', marginBottom: 'var(--space-md)', lineHeight: '1.8' }}>
                                We believe that true luxury lies in the details—the carefully selected full-grain hides, the precision of a hand-stitched seam, and the rich, organic aroma of vegetable-tanned leather.
                            </p>
                            <p style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', color: 'var(--color-gray-600)', lineHeight: '1.8' }}>
                                Every piece that leaves our workshop is more than just a product; it is a canvas that will document your life&apos;s journeys, developing a unique patina that tells your story.
                            </p>
                        </motion.div>

                        <motion.div
                            className="about-image"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <Image
                                src="/images/story/workshop.png"
                                alt="Our workshop in Florence"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section-padding" style={{ backgroundColor: 'var(--color-secondary)', color: 'var(--color-white)' }}>
                <div className="container">
                    <motion.div
                        style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: 'var(--space-lg)' }}>Our Commitment to the Earth</h2>
                        <div className="gold-line" style={{ margin: '0 auto var(--space-xl)' }} />
                        <p style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)', color: 'rgba(255,255,255,0.8)', lineHeight: '1.8' }}>
                            We are fiercely committed to sustainable practices. Mass-produced leather relies heavily on chrome tanning, a process that is toxic to the environment. We exclusively use vegetable tanning—an ancient, organic process that utilizes natural tannins from tree bark. It takes 30-40 days to tan a single hide, but the result is a biodegradable, environmentally friendly product that is superior in both durability and aesthetic.
                        </p>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
