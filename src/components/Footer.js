import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="logo" style={{ marginBottom: '8px' }}>
                            <span className="logo-icon">🏛</span>
                            <span>ARTISAN LEATHER</span>
                        </div>
                        <p>
                            Handcrafted premium leather goods made with love, tradition, and respect for nature.
                            Every piece tells a story of generations of skilled artisanship.
                        </p>
                        <div className="footer-social">
                            <a href="#" className="social-icon" aria-label="Instagram">📷</a>
                            <a href="#" className="social-icon" aria-label="Facebook">📘</a>
                            <a href="#" className="social-icon" aria-label="Twitter">🐦</a>
                            <a href="#" className="social-icon" aria-label="Pinterest">📌</a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/shop">Shop All</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="/faq">FAQs</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Categories</h4>
                        <ul>
                            <li><Link href="/shop?category=Briefcases">Briefcases</Link></li>
                            <li><Link href="/shop?category=Duffel+Bags">Duffel Bags</Link></li>
                            <li><Link href="/shop?category=Wallets">Wallets</Link></li>
                            <li><Link href="/shop?category=Messenger+Bags">Messenger Bags</Link></li>
                            <li><Link href="/shop?category=Belts">Belts</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Contact</h4>
                        <ul>
                            <li><a href="mailto:hello@artisanleather.com">hello@artisanleather.com</a></li>
                            <li><a href="tel:+18005551234">+1 (800) 555-1234</a></li>
                            <li>
                                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>
                                    123 Leather Lane<br />
                                    Florence, IT 50125
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 Artisan Leather Co. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Shipping & Returns</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
