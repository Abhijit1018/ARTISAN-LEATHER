'use client';

import { motion } from 'framer-motion';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function BestSellers() {
    // Get products with badges (best sellers, popular items)
    const bestSellers = products.filter((p) => p.badge);

    return (
        <section className="section-padding best-sellers-section" id="best-sellers">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Best Sellers</h2>
                    <div className="gold-line" />
                    <p className="section-subtitle">
                        Our most loved pieces, chosen by customers who value exceptional
                        quality and timeless design.
                    </p>
                </motion.div>

                <div className="products-grid">
                    {bestSellers.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
