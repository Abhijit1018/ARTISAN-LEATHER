'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCurrency } from '@/context/CurrencyContext';
import { useFavorites } from '@/context/FavoritesContext';

export default function ProductCard({ product }) {
    const { formatPrice } = useCurrency();
    const { toggleFavorite, isFavorite, isLoaded } = useFavorites();

    const renderStars = (rating) => {
        const full = Math.floor(rating);
        const half = rating % 1 >= 0.5;
        let stars = '';
        for (let i = 0; i < full; i++) stars += '★';
        if (half) stars += '½';
        return stars;
    };

    return (
        <Link href={`/product/${product.slug}`} className="product-card" id={`product-${product.id}`}>
            <div className="product-image-wrapper">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    style={{ objectFit: 'cover' }}
                />
                {product.badge && (
                    <span className="product-badge">{product.badge}</span>
                )}
                {isLoaded && (
                    <div className="product-actions" onClick={(e) => e.preventDefault()}>
                        <button
                            className="product-action-btn"
                            aria-label="Toggle wishlist"
                            onClick={(e) => { e.preventDefault(); toggleFavorite(product); }}
                            style={{ color: isFavorite(product.id) ? 'var(--color-error)' : 'inherit' }}
                        >
                            {isFavorite(product.id) ? '♥' : '♡'}
                        </button>
                    </div>
                )}
            </div>
            <div className="product-info">
                <div className="product-category-label">{product.category}</div>
                <h3 className="product-name">{product.name}</h3>
                <div className="product-rating">
                    <span className="stars">{renderStars(product.rating)}</span>
                    <span className="review-count">({product.reviews})</span>
                </div>
                <div className="product-price">
                    <span className="price-current">{formatPrice(product.price)}</span>
                    {product.originalPrice && (
                        <span className="price-original">{formatPrice(product.originalPrice)}</span>
                    )}
                </div>
            </div>
        </Link>
    );
}
