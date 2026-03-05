'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Check localStorage for simulated session
        const storedSession = localStorage.getItem('auth_session');
        if (storedSession) {
            setUser(JSON.parse(storedSession));
        }
        setIsLoaded(true);
    }, []);

    const login = (email, password) => {
        // Simulated login logic
        let role = 'user';
        let name = email.split('@')[0];

        // Simulate an admin account
        if (email === 'admin@artisanleather.com' && password === 'admin') {
            role = 'admin';
            name = 'Admin';
        }

        const userData = {
            id: Math.random().toString(36).substring(7),
            email,
            name,
            role,
            phone: '+1 (555) 123-4567',
            addresses: [
                {
                    id: 'addr_1',
                    type: 'Shipping',
                    isDefault: true,
                    fullName: name,
                    street: '123 Market St. Apt 4B',
                    city: 'San Francisco',
                    state: 'CA',
                    zip: '94105',
                    country: 'USA'
                }
            ]
        };

        setUser(userData);
        localStorage.setItem('auth_session', JSON.stringify(userData));
        return true;
    };

    const register = (name, email, password) => {
        // Simulated registration
        const userData = {
            id: Math.random().toString(36).substring(7),
            email,
            name,
            role: 'user',
            phone: '',
            addresses: []
        };
        setUser(userData);
        localStorage.setItem('auth_session', JSON.stringify(userData));
        return true;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('auth_session');
    };

    const updateProfile = (updates) => {
        if (!user) return;
        const updatedUser = { ...user, ...updates };
        setUser(updatedUser);
        localStorage.setItem('auth_session', JSON.stringify(updatedUser));
    };

    return (
        <AuthContext.Provider value={{ user, isLoaded, login, register, logout, updateProfile }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider');
    return context;
};
