'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            setEmail('');
        }
    };

    return (
        <section className="section-padding newsletter-section" id="newsletter">
            <div className="container">
                <motion.div
                    className="newsletter-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Join the Artisan Family</h2>
                    <p>
                        Subscribe to receive exclusive offers, early access to new collections,
                        and stories from our workshop.
                    </p>

                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            style={{
                                padding: '20px',
                                background: 'rgba(45, 140, 79, 0.2)',
                                border: '1px solid rgba(45, 140, 79, 0.4)',
                                borderRadius: 'var(--radius-md)',
                                color: '#7AE89E',
                                fontSize: '1rem',
                            }}
                        >
                            ✓ Welcome to the family! Check your inbox for a special welcome gift.
                        </motion.div>
                    ) : (
                        <form className="newsletter-form" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                className="newsletter-input"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                id="newsletter-email"
                            />
                            <button type="submit" className="btn btn-gold">
                                Subscribe
                            </button>
                        </form>
                    )}

                    <p style={{ fontSize: '0.8rem', marginTop: '16px', opacity: 0.5 }}>
                        No spam, ever. Unsubscribe anytime. We respect your privacy.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
