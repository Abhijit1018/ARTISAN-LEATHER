'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { motion } from 'framer-motion';

export default function AdminLayout({ children }) {
    const { user, isLoaded } = useAuth();
    const router = useRouter();
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(true);

    useEffect(() => {
        if (isLoaded) {
            if (!user) {
                router.push('/login');
            } else if (user.role !== 'admin') {
                router.push('/profile');
            }
        }
    }, [user, isLoaded, router]);

    if (!isLoaded || !user || user.role !== 'admin') return null;

    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--color-gray-100)' }}>
            {/* Admin Sidebar */}
            <motion.aside
                style={{
                    width: sidebarOpen ? '260px' : '80px',
                    backgroundColor: 'var(--color-secondary)',
                    color: 'var(--color-white)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'width 0.3s ease',
                    flexShrink: 0
                }}
            >
                <div style={{ padding: '20px', display: 'flex', alignItems: 'center', justifyContent: sidebarOpen ? 'space-between' : 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    {sidebarOpen && <span style={{ fontWeight: 'bold', letterSpacing: '1px' }}>ADMIN PANEL</span>}
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{ color: 'white' }}>
                        {sidebarOpen ? '◀' : '▶'}
                    </button>
                </div>

                <nav style={{ flex: 1, padding: '20px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {[
                        { name: 'Dashboard', path: '/admin', icon: '📊' },
                        { name: 'Products', path: '/admin/products', icon: '👜' },
                        { name: 'Orders', path: '/admin/orders', icon: '📦' },
                    ].map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <Link
                                key={item.name}
                                href={item.path}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '12px 20px',
                                    backgroundColor: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                                    borderLeft: `4px solid ${isActive ? 'var(--color-accent)' : 'transparent'}`,
                                    gap: '16px',
                                    color: 'white',
                                    transition: 'all 0.2s'
                                }}
                            >
                                <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                                {sidebarOpen && <span>{item.name}</span>}
                            </Link>
                        )
                    })}
                </nav>

                <div style={{ padding: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'rgba(255,255,255,0.7)' }}>
                        <span style={{ fontSize: '1.2rem' }}>↵</span>
                        {sidebarOpen && <span>Return to Store</span>}
                    </Link>
                </div>
            </motion.aside>

            {/* Admin Main Content */}
            <main style={{ flex: 1, padding: 'var(--space-2xl)', overflowY: 'auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    {children}
                </motion.div>
            </main>
        </div>
    );
}
