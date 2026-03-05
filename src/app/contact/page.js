'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            setSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }
    };

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <>
            <section className="shop-hero">
                <motion.div
                    className="container"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1>Contact Us</h1>
                    <p>We&apos;d love to hear from you. Reach out with any questions or inquiries.</p>
                </motion.div>
            </section>

            <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
                <div className="container">
                    <div className="contact-grid">

                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2rem)', color: 'var(--color-secondary)', marginBottom: 'var(--space-md)' }}>
                                Get In Touch
                            </h2>
                            <p style={{ color: 'var(--color-gray-600)', marginBottom: 'var(--space-2xl)', lineHeight: '1.8' }}>
                                Whether you have a question about our products, shipping, returns, or just want to say hello, our team is ready to answer all your questions.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
                                <div>
                                    <h4 style={{ color: 'var(--color-accent)', marginBottom: 'var(--space-xs)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Customer Service</h4>
                                    <a href="mailto:hello@artisanleather.com" style={{ display: 'block', color: 'var(--color-secondary)', fontSize: '1.05rem', fontWeight: '500', marginBottom: '4px', wordBreak: 'break-word' }}>hello@artisanleather.com</a>
                                    <a href="tel:+18005551234" style={{ display: 'block', color: 'var(--color-secondary)', fontSize: '1.05rem', fontWeight: '500' }}>+1 (800) 555-1234</a>
                                    <p style={{ color: 'var(--color-gray-500)', fontSize: '0.9rem', marginTop: '8px' }}>Mon-Fri: 9am - 6pm EST</p>
                                </div>

                                <div>
                                    <h4 style={{ color: 'var(--color-accent)', marginBottom: 'var(--space-xs)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Workshop &amp; Headquarters</h4>
                                    <p style={{ color: 'var(--color-secondary)', fontSize: '1.05rem', fontWeight: '500', lineHeight: '1.6' }}>
                                        123 Leather Lane<br />
                                        Florence, IT 50125<br />
                                        Italy
                                    </p>
                                </div>

                                <div>
                                    <h4 style={{ color: 'var(--color-accent)', marginBottom: 'var(--space-xs)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Wholesale Inquiries</h4>
                                    <a href="mailto:wholesale@artisanleather.com" style={{ color: 'var(--color-secondary)', fontSize: '1.05rem', fontWeight: '500', wordBreak: 'break-word' }}>wholesale@artisanleather.com</a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            style={{
                                backgroundColor: 'var(--color-white)',
                                padding: 'clamp(var(--space-xl), 4vw, var(--space-3xl))',
                                borderRadius: 'var(--radius-lg)',
                                boxShadow: 'var(--shadow-md)',
                            }}
                        >
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-secondary)', marginBottom: 'var(--space-xl)' }}>
                                Send a Message
                            </h3>

                            {submitted ? (
                                <div style={{
                                    padding: 'var(--space-2xl)',
                                    backgroundColor: 'rgba(45, 140, 79, 0.1)',
                                    border: '1px solid rgba(45, 140, 79, 0.2)',
                                    borderRadius: 'var(--radius-md)',
                                    textAlign: 'center',
                                    color: 'var(--color-success)',
                                }}>
                                    <div style={{ fontSize: '3rem', marginBottom: 'var(--space-md)' }}>✓</div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: 'var(--space-sm)' }}>Message Sent Successfully!</h4>
                                    <p style={{ color: 'var(--color-gray-600)' }}>Thank you for reaching out. A member of our team will get back to you within 24 hours.</p>
                                    <button onClick={() => setSubmitted(false)} className="btn btn-outline" style={{ marginTop: 'var(--space-xl)' }}>Send Another Message</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                                    <div className="contact-form-row">
                                        <div>
                                            <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--color-gray-600)' }}>Full Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                style={{ width: '100%', padding: '12px 16px', border: '1px solid var(--color-gray-300)', borderRadius: 'var(--radius-sm)', fontSize: '1rem', fontFamily: 'var(--font-body)' }}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--color-gray-600)' }}>Email Address *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                style={{ width: '100%', padding: '12px 16px', border: '1px solid var(--color-gray-300)', borderRadius: 'var(--radius-sm)', fontSize: '1rem', fontFamily: 'var(--font-body)' }}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--color-gray-600)' }}>Subject</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            style={{ width: '100%', padding: '12px 16px', border: '1px solid var(--color-gray-300)', borderRadius: 'var(--radius-sm)', fontSize: '1rem', fontFamily: 'var(--font-body)' }}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--color-gray-600)' }}>Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows="6"
                                            value={formData.message}
                                            onChange={handleChange}
                                            style={{ width: '100%', padding: '12px 16px', border: '1px solid var(--color-gray-300)', borderRadius: 'var(--radius-sm)', fontSize: '1rem', fontFamily: 'var(--font-body)', resize: 'vertical' }}
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: 'var(--space-md)' }}>
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </motion.div>

                    </div>
                </div>
            </section>
        </>
    );
}
