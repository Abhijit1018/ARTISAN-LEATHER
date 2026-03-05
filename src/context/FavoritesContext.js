'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem('favorites');
        if (stored) setFavorites(JSON.parse(stored));
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
    }, [favorites, isLoaded]);

    const toggleFavorite = (product) => {
        setFavorites(prev => {
            const exists = prev.some(item => item.id === product.id);
            if (exists) return prev.filter(item => item.id !== product.id);
            return [...prev, product];
        });
    };

    const isFavorite = (productId) => favorites.some(item => item.id === productId);

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite, isLoaded }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) throw new Error('useFavorites must be used within FavoritesProvider');
    return context;
};
