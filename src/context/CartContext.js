'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useCurrency } from './CurrencyContext';

const CartContext = createContext(null);

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const { currency, formatPrice } = useCurrency();

    useEffect(() => {
        const storedCart = localStorage.getItem('shopping_cart');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('shopping_cart', JSON.stringify(cartItems));
        }
    }, [cartItems, isLoaded]);

    const addToCart = (product, quantity = 1) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            }
            return [...prev, { ...product, quantity }];
        });
    };

    const removeFromCart = (productId) => {
        setCartItems(prev => prev.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        if (quantity < 1) {
            removeFromCart(productId);
            return;
        }
        setCartItems(prev =>
            prev.map(item => item.id === productId ? { ...item, quantity } : item)
        );
    };

    const clearCart = () => setCartItems([]);

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cartItems,
            isLoaded,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            subtotal,
            formattedSubtotal: formatPrice(subtotal),
            itemCount
        }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used within CartProvider');
    return context;
};
