'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { categories } from '@/data/products';

export default function CategorySection() {
    return (
        <section className="section-padding" id="categories">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Shop by Category</h2>
                    <div className="gold-line" />
                    <p className="section-subtitle">
                        Explore our curated collection of handcrafted leather goods,
                        each category representing the pinnacle of artisan craftsmanship.
                    </p>
                </motion.div>

                <div className="categories-grid">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.slug}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={`/shop?category=${encodeURIComponent(cat.name)}`}>
                                <div className="category-card" id={`category-${cat.slug}`}>
                                    <Image
                                        src={cat.image}
                                        alt={cat.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div className="category-overlay">
                                        <h3 className="category-name">{cat.name}</h3>
                                        <span className="category-count">{cat.count} Products</span>
                                        <span className="category-link">
                                            Explore Collection →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
