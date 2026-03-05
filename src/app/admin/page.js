'use client';

import { useCurrency } from '@/context/CurrencyContext';

export default function AdminDashboardPage() {
    const { formatPrice } = useCurrency();

    const stats = [
        { label: 'Total Revenue', value: formatPrice(124500), trend: '+14%' },
        { label: 'Total Orders', value: '452', trend: '+5%' },
        { label: 'Active Products', value: '38', trend: '0%' },
        { label: 'New Customers', value: '124', trend: '+22%' },
    ];

    return (
        <div>
            <h1 style={{ fontSize: '2rem', color: 'var(--color-secondary)', marginBottom: 'var(--space-xl)' }}>Dashboard Overview</h1>

            <div className="admin-stats-grid">
                {stats.map((stat) => (
                    <div key={stat.label} style={{ backgroundColor: 'var(--color-white)', padding: 'var(--space-xl)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                        <p style={{ color: 'var(--color-gray-500)', fontSize: '0.9rem', marginBottom: '8px' }}>{stat.label}</p>
                        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                            <h3 style={{ fontSize: '2rem', color: 'var(--color-secondary)' }}>{stat.value}</h3>
                            <span style={{ color: stat.trend.startsWith('+') ? 'var(--color-success)' : 'var(--color-gray-500)', fontSize: '0.9rem', fontWeight: 'bold' }}>
                                {stat.trend}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="admin-content-grid">
                <div className="admin-table-wrap" style={{ backgroundColor: 'var(--color-white)', padding: 'var(--space-2xl)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                    <h3 style={{ marginBottom: 'var(--space-lg)' }}>Recent Orders</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid var(--color-gray-200)', textAlign: 'left' }}>
                                <th style={{ padding: '12px 0', color: 'var(--color-gray-500)', fontWeight: '500' }}>Order ID</th>
                                <th style={{ padding: '12px 0', color: 'var(--color-gray-500)', fontWeight: '500' }}>Customer</th>
                                <th style={{ padding: '12px 0', color: 'var(--color-gray-500)', fontWeight: '500' }}>Date</th>
                                <th style={{ padding: '12px 0', color: 'var(--color-gray-500)', fontWeight: '500' }}>Total</th>
                                <th style={{ padding: '12px 0', color: 'var(--color-gray-500)', fontWeight: '500' }}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { id: '#ORD-9821', customer: 'Alice Johnson', date: 'Oct 12', total: 420, status: 'Processing' },
                                { id: '#ORD-9820', customer: 'Bob Smith', date: 'Oct 11', total: 110, status: 'Shipped' },
                                { id: '#ORD-9819', customer: 'Charlie Brown', date: 'Oct 10', total: 650, status: 'Delivered' },
                                { id: '#ORD-9818', customer: 'Diana Prince', date: 'Oct 08', total: 290, status: 'Delivered' },
                            ].map((order, i) => (
                                <tr key={i} style={{ borderBottom: '1px solid var(--color-gray-100)' }}>
                                    <td style={{ padding: '16px 0', fontWeight: '500' }}>{order.id}</td>
                                    <td style={{ padding: '16px 0' }}>{order.customer}</td>
                                    <td style={{ padding: '16px 0', color: 'var(--color-gray-600)' }}>{order.date}</td>
                                    <td style={{ padding: '16px 0', fontWeight: '600' }}>{formatPrice(order.total)}</td>
                                    <td style={{ padding: '16px 0' }}>
                                        <span style={{
                                            padding: '4px 8px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: '500',
                                            backgroundColor: order.status === 'Delivered' ? 'rgba(45, 140, 79, 0.1)' : order.status === 'Shipped' ? 'rgba(33, 150, 243, 0.1)' : 'rgba(255, 193, 7, 0.1)',
                                            color: order.status === 'Delivered' ? 'var(--color-success)' : order.status === 'Shipped' ? '#1976D2' : '#FFA000'
                                        }}>
                                            {order.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div style={{ backgroundColor: 'var(--color-white)', padding: 'var(--space-2xl)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                    <h3 style={{ marginBottom: 'var(--space-lg)' }}>Popular Categories</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {[
                            { name: 'Briefcases', percent: 45, color: 'var(--color-secondary)' },
                            { name: 'Duffel Bags', percent: 30, color: 'var(--color-accent)' },
                            { name: 'Wallets', percent: 15, color: 'var(--color-gray-400)' },
                            { name: 'Belts', percent: 10, color: 'var(--color-gray-600)' },
                        ].map((cat) => (
                            <div key={cat.name}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', fontSize: '0.9rem' }}>
                                    <span>{cat.name}</span>
                                    <span>{cat.percent}%</span>
                                </div>
                                <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--color-gray-100)', borderRadius: '4px', overflow: 'hidden' }}>
                                    <div style={{ width: `${cat.percent}%`, height: '100%', backgroundColor: cat.color }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
