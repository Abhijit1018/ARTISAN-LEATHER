'use client';

import { useState } from 'react';
import { products as initialProducts } from '@/data/products';
import { useCurrency } from '@/context/CurrencyContext';

export default function AdminProductsPage() {
    const [products, setProducts] = useState(initialProducts);
    const { formatPrice } = useCurrency();
    const [searchTerm, setSearchTerm] = useState('');

    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-xl)' }}>
                <h1 style={{ fontSize: '2rem', color: 'var(--color-secondary)' }}>Products</h1>
                <button className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>+ Add Product</button>
            </div>

            <div className="admin-table-wrap" style={{ backgroundColor: 'var(--color-white)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', overflow: 'hidden' }}>
                <div style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--color-gray-200)', display: 'flex', gap: '16px' }}>
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ padding: '10px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-gray-300)', width: '300px' }}
                    />
                    <select style={{ padding: '10px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-gray-300)' }}>
                        <option value="">All Categories</option>
                        <option value="briefcases">Briefcases</option>
                        <option value="duffel bags">Duffel Bags</option>
                        <option value="wallets">Wallets</option>
                    </select>
                </div>

                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ backgroundColor: 'var(--color-cream)', textAlign: 'left' }}>
                            <th style={{ padding: '16px', fontWeight: 'bold', color: 'var(--color-gray-600)' }}>Product</th>
                            <th style={{ padding: '16px', fontWeight: 'bold', color: 'var(--color-gray-600)' }}>Category</th>
                            <th style={{ padding: '16px', fontWeight: 'bold', color: 'var(--color-gray-600)' }}>Price</th>
                            <th style={{ padding: '16px', fontWeight: 'bold', color: 'var(--color-gray-600)' }}>Stock</th>
                            <th style={{ padding: '16px', fontWeight: 'bold', color: 'var(--color-gray-600)', textAlign: 'right' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map(product => (
                            <tr key={product.id} style={{ borderBottom: '1px solid var(--color-gray-100)' }}>
                                <td style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ width: '40px', height: '40px', overflow: 'hidden', borderRadius: '4px', backgroundColor: 'var(--color-gray-100)' }}>
                                        <img src={product.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <span style={{ fontWeight: '500' }}>{product.name}</span>
                                </td>
                                <td style={{ padding: '16px', color: 'var(--color-gray-600)' }}>{product.category}</td>
                                <td style={{ padding: '16px', fontWeight: '500' }}>{formatPrice(product.price)}</td>
                                <td style={{ padding: '16px' }}>
                                    <span style={{ color: 'var(--color-success)', backgroundColor: 'rgba(45,140,79,0.1)', padding: '4px 8px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: '600' }}>In Stock</span>
                                </td>
                                <td style={{ padding: '16px', textAlign: 'right' }}>
                                    <button style={{ color: '#1976D2', fontWeight: '500', marginRight: '16px' }}>Edit</button>
                                    <button style={{ color: 'var(--color-error)', fontWeight: '500' }}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {filtered.length === 0 && (
                    <div style={{ padding: 'var(--space-3xl)', textAlign: 'center', color: 'var(--color-gray-500)' }}>
                        No products found matching "{searchTerm}"
                    </div>
                )}
            </div>
        </div>
    );
}
