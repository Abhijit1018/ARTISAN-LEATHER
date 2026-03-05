'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function BrandStory() {
    return (
        <section className="section-padding brand-story-section" id="brand-story">
            <div className="container">
                <div className="brand-story-grid">
                    <motion.div
                        className="brand-story-image"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7 }}
                    >
                        <Image
                            src="/images/story/workshop.png"
                            alt="Artisan leather craftsman at work"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </motion.div>

                    <motion.div
                        className="brand-story-content"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <motion.span
                            className="hero-badge"
                            style={{ marginBottom: '20px', display: 'inline-flex' }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            ✦ Our Story
                        </motion.span>
                        <h2>Why Choose <span style={{ color: 'var(--color-accent)' }}>Artisan Leather?</span></h2>
                        <p>
                            For over three decades, our family of skilled artisans has been creating leather goods
                            the traditional way — by hand, with patience, and with an unwavering commitment to quality.
                            Our workshop in Florence, Italy, is where generations of leather-working expertise come
                            together to produce pieces that are built to last a lifetime.
                        </p>
                        <p>
                            Unlike mass-produced alternatives that use chemical chrome tanning, we exclusively use
                            a natural, eco-friendly vegetable tanning process that takes 30 to 40 days. This results
                            in leather that is not only non-toxic and sustainable but also develops a beautiful,
                            unique patina over time — a living testament to your journey.
                        </p>

                        <div className="brand-values">
                            <div className="brand-value">
                                <div className="brand-value-icon">🧵</div>
                                <div>
                                    <h4>Generational Craft</h4>
                                    <p>Skills passed down through 3 generations of master artisans</p>
                                </div>
                            </div>
                            <div className="brand-value">
                                <div className="brand-value-icon">🌿</div>
                                <div>
                                    <h4>Eco-Friendly</h4>
                                    <p>Natural vegetable tanning — zero harmful chemicals</p>
                                </div>
                            </div>
                            <div className="brand-value">
                                <div className="brand-value-icon">🏅</div>
                                <div>
                                    <h4>Full-Grain Leather</h4>
                                    <p>Only the highest grade, most durable leather used</p>
                                </div>
                            </div>
                            <div className="brand-value">
                                <div className="brand-value-icon">♻️</div>
                                <div>
                                    <h4>Sustainable</h4>
                                    <p>Ethically sourced materials, minimal waste production</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
