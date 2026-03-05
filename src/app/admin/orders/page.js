'use client';

import { useState } from 'react';
import { useCurrency } from '@/context/CurrencyContext';

export default function AdminOrdersPage() {
    const { formatPrice } = useCurrency();

    const [orders, setOrders] = useState([
        { id: '#ORD-9821', customer: 'Alice Johnson', email: 'alice@example.com', date: 'Oct 12, 2026', items: 2, total: 420, status: 'Processing' },
        { id: '#ORD-9820', customer: 'Bob Smith', email: 'bob@example.com', date: 'Oct 11, 2026', items: 1, total: 110, status: 'Shipped' },
        { id: '#ORD-9819', customer: 'Charlie Brown', email: 'charlie@example.com', date: 'Oct 10, 2026', items: 3, total: 650, status: 'Delivered' },
        { id: '#ORD-9818', customer: 'Diana Prince', email: 'diana@example.com', date: 'Oct 08, 2026', items: 1, total: 290, status: 'Delivered' },
        { id: '#ORD-9817', customer: 'Evan Wright', email: 'evan@example.com', date: 'Oct 05, 2026', items: 1, total: 320, status: 'Cancelled' },
    ]);

    const updateStatus = (id, newStatus) => {
        setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o));
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Delivered': return { bg: 'rgba(45, 140, 79, 0.1)', color: 'var(--color-success)' };
            case 'Shipped': return { bg: 'rgba(33, 150, 243, 0.1)', color: '#1976D2' };
            case 'Processing': return { bg: 'rgba(255, 193, 7, 0.1)', color: '#FFA000' };
            case 'Cancelled': return { bg: 'rgba(196, 69, 54, 0.1)', color: 'var(--color-error)' };
            default: return { bg: 'var(--color-gray-100)', color: 'var(--color-gray-600)' };
        }
    };

    return (
        <div>
            <h1 style={{ fontSize: '2rem', color: 'var(--color-secondary)', marginBottom: 'var(--space-xl)' }}>Orders</h1>

            <div className="admin-table-wrap" style={{ backgroundColor: 'var(--color-white)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ backgroundColor: 'var(--color-cream)', textAlign: 'left' }}>
                            <th style={{ padding: '16px', fontWeight: 'bold', color: 'var(--color-gray-600)' }}>Order</th>
                            <th style={{ padding: '16px', fontWeight: 'bold', color: 'var(--color-gray-600)' }}>Customer</th>
                            <th style={{ padding: '16px', fontWeight: 'bold', color: 'var(--color-gray-600)' }}>Date</th>
                            <th style={{ padding: '16px', fontWeight: 'bold', color: 'var(--color-gray-600)' }}>Items</th>
                            <th style={{ padding: '16px', fontWeight: 'bold', color: 'var(--color-gray-600)' }}>Total</th>
                            <th style={{ padding: '16px', fontWeight: 'bold', color: 'var(--color-gray-600)' }}>Status</th>
                            <th style={{ padding: '16px', fontWeight: 'bold', color: 'var(--color-gray-600)', textAlign: 'right' }}>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => {
                            const colors = getStatusColor(order.status);
                            return (
                                <tr key={order.id} style={{ borderBottom: '1px solid var(--color-gray-100)' }}>
                                    <td style={{ padding: '16px', fontWeight: '600', color: 'var(--color-secondary)' }}>{order.id}</td>
                                    <td style={{ padding: '16px' }}>
                                        <div style={{ fontWeight: '500' }}>{order.customer}</div>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--color-gray-500)' }}>{order.email}</div>
                                    </td>
                                    <td style={{ padding: '16px', color: 'var(--color-gray-600)' }}>{order.date}</td>
                                    <td style={{ padding: '16px', color: 'var(--color-gray-600)' }}>{order.items} items</td>
                                    <td style={{ padding: '16px', fontWeight: '600' }}>{formatPrice(order.total)}</td>
                                    <td style={{ padding: '16px' }}>
                                        <span style={{ backgroundColor: colors.bg, color: colors.color, padding: '4px 10px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: '600' }}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td style={{ padding: '16px', textAlign: 'right' }}>
                                        <select
                                            value={order.status}
                                            onChange={(e) => updateStatus(order.id, e.target.value)}
                                            style={{ padding: '6px 10px', borderRadius: '4px', border: '1px solid var(--color-gray-300)', fontSize: '0.85rem' }}
                                        >
                                            <option value="Processing">Processing</option>
                                            <option value="Shipped">Shipped</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Cancelled">Cancelled</option>
                                        </select>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
