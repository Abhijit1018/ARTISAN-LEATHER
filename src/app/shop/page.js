'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Suspense } from 'react';

function ShopContent() {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get('category');
    const [activeCategory, setActiveCategory] = useState(categoryParam || 'All');
    const [sortBy, setSortBy] = useState('featured');

    // Derive unique categories
    const allCategories = useMemo(() => {
        const cats = [...new Set(products.map((p) => p.category))];
        return ['All', ...cats];
    }, []);

    // Filter products
    const filtered = useMemo(() => {
        let result = products;
        if (activeCategory !== 'All') {
            result = result.filter((p) => p.category === activeCategory);
        }
        // Sort
        switch (sortBy) {
            case 'price-low':
                return [...result].sort((a, b) => a.price - b.price);
            case 'price-high':
                return [...result].sort((a, b) => b.price - a.price);
            case 'rating':
                return [...result].sort((a, b) => b.rating - a.rating);
            case 'name':
                return [...result].sort((a, b) => a.name.localeCompare(b.name));
            default:
                return result;
        }
    }, [activeCategory, sortBy]);

    return (
        <>
            <section className="shop-hero">
                <motion.div
                    className="container"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1>Our Collection</h1>
                    <p>Explore our full range of handcrafted leather goods</p>
                </motion.div>
            </section>

            <section className="shop-content">
                <div className="container">
                    <div className="shop-toolbar">
                        <div className="shop-filters">
                            {allCategories.map((cat) => (
                                <button
                                    key={cat}
                                    className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(cat)}
                                    id={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="shop-sort">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                id="sort-select"
                            >
                                <option value="featured">Featured</option>
                                <option value="price-low">Price: Low → High</option>
                                <option value="price-high">Price: High → Low</option>
                                <option value="rating">Highest Rated</option>
                                <option value="name">Name: A → Z</option>
                            </select>
                        </div>
                    </div>

                    <motion.p
                        style={{
                            fontSize: '0.9rem',
                            color: 'var(--color-gray-500)',
                            marginBottom: 'var(--space-lg)',
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        key={activeCategory}
                    >
                        Showing {filtered.length} product{filtered.length !== 1 ? 's' : ''}
                        {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
                    </motion.p>

                    <div className="products-grid">
                        {filtered.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--color-gray-400)' }}>
                            <p style={{ fontSize: '1.2rem' }}>No products found in this category.</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default function ShopPage() {
    return (
        <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
            <ShopContent />
        </Suspense>
    );
}
