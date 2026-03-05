'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="hero" id="hero">
            <div className="hero-bg">
                <Image
                    src="/images/hero/hero-banner.png"
                    alt="Premium leather workshop"
                    fill
                    priority
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className="hero-overlay" />

            <div className="container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        ✦ Handcrafted Since 1987
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Timeless Leather,{' '}
                        <span className="highlight">Crafted</span> to Perfection
                    </motion.h1>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.7 }}
                    >
                        Discover premium handcrafted leather goods made from full-grain,
                        naturally tanned leather. Each piece is a testament to generational
                        craftsmanship and sustainable artistry.
                    </motion.p>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <Link href="/shop?category=Briefcases" className="btn btn-gold">
                            Shop Briefcases
                        </Link>
                        <Link href="/shop?category=Duffel+Bags" className="btn btn-secondary">
                            Explore Duffel Bags
                        </Link>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-stats"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                >
                    <div className="hero-stat">
                        <div className="hero-stat-number">35+</div>
                        <div className="hero-stat-label">Years of Craft</div>
                    </div>
                    <div className="hero-stat">
                        <div className="hero-stat-number">50K+</div>
                        <div className="hero-stat-label">Happy Customers</div>
                    </div>
                    <div className="hero-stat">
                        <div className="hero-stat-number">100%</div>
                        <div className="hero-stat-label">Natural Leather</div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
            >
                <span>Scroll</span>
                <div className="scroll-line" />
            </motion.div>
        </section>
    );
}
