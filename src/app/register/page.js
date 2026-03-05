'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const { register } = useAuth();

    const handleRegister = (e) => {
        e.preventDefault();
        if (name && email && password) {
            register(name, email, password);
            router.push('/profile');
        }
    };

    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
            <div className="container" style={{ maxWidth: '400px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        backgroundColor: 'var(--color-white)',
                        padding: 'var(--space-2xl)',
                        borderRadius: 'var(--radius-lg)',
                        boxShadow: 'var(--shadow-md)'
                    }}
                >
                    <h1 style={{ fontSize: '2rem', color: 'var(--color-secondary)', marginBottom: 'var(--space-md)', textAlign: 'center' }}>Create Account</h1>
                    <p style={{ color: 'var(--color-gray-500)', textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
                        Join Artisan Leather Co.
                    </p>

                    <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                        <div>
                            <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--color-gray-600)' }}>Full Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                style={{ width: '100%', padding: '12px', border: '1px solid var(--color-gray-300)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-body)' }}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--color-gray-600)' }}>Email Address</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={{ width: '100%', padding: '12px', border: '1px solid var(--color-gray-300)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-body)' }}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--color-gray-600)' }}>Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                style={{ width: '100%', padding: '12px', border: '1px solid var(--color-gray-300)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-body)' }}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: 'var(--space-sm)' }}>
                            Create Account
                        </button>
                    </form>

                    <div style={{ marginTop: 'var(--space-xl)', textAlign: 'center', fontSize: '0.9rem', color: 'var(--color-gray-600)' }}>
                        Already have an account? <Link href="/login" style={{ color: 'var(--color-secondary)', fontWeight: '600' }}>Sign In</Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
