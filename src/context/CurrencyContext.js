'use client';

import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

const CURRENCIES = {
    USD: { code: 'USD', symbol: '$', name: 'US Dollar', flag: '🇺🇸', rate: 1 },
    EUR: { code: 'EUR', symbol: '€', name: 'Euro', flag: '🇪🇺', rate: 0.92 },
    GBP: { code: 'GBP', symbol: '£', name: 'British Pound', flag: '🇬🇧', rate: 0.79 },
    INR: { code: 'INR', symbol: '₹', name: 'Indian Rupee', flag: '🇮🇳', rate: 83.12 },
    AUD: { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', flag: '🇦🇺', rate: 1.53 },
    CAD: { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar', flag: '🇨🇦', rate: 1.36 },
    JPY: { code: 'JPY', symbol: '¥', name: 'Japanese Yen', flag: '🇯🇵', rate: 149.50 },
    AED: { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham', flag: '🇦🇪', rate: 3.67 },
    SGD: { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar', flag: '🇸🇬', rate: 1.34 },
    CHF: { code: 'CHF', symbol: 'CHF', name: 'Swiss Franc', flag: '🇨🇭', rate: 0.87 },
    SAR: { code: 'SAR', symbol: '﷼', name: 'Saudi Riyal', flag: '🇸🇦', rate: 3.75 },
    BRL: { code: 'BRL', symbol: 'R$', name: 'Brazilian Real', flag: '🇧🇷', rate: 4.97 },
};

// Map timezone regions to currencies
const TIMEZONE_CURRENCY_MAP = {
    'America/New_York': 'USD',
    'America/Chicago': 'USD',
    'America/Denver': 'USD',
    'America/Los_Angeles': 'USD',
    'America/Anchorage': 'USD',
    'Pacific/Honolulu': 'USD',
    'America/Toronto': 'CAD',
    'America/Vancouver': 'CAD',
    'America/Sao_Paulo': 'BRL',
    'Europe/London': 'GBP',
    'Europe/Paris': 'EUR',
    'Europe/Berlin': 'EUR',
    'Europe/Rome': 'EUR',
    'Europe/Madrid': 'EUR',
    'Europe/Amsterdam': 'EUR',
    'Europe/Brussels': 'EUR',
    'Europe/Vienna': 'EUR',
    'Europe/Zurich': 'CHF',
    'Asia/Kolkata': 'INR',
    'Asia/Calcutta': 'INR',
    'Asia/Mumbai': 'INR',
    'Asia/Tokyo': 'JPY',
    'Asia/Dubai': 'AED',
    'Asia/Riyadh': 'SAR',
    'Asia/Singapore': 'SGD',
    'Australia/Sydney': 'AUD',
    'Australia/Melbourne': 'AUD',
};

function detectUserCurrency() {
    try {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (timezone && TIMEZONE_CURRENCY_MAP[timezone]) {
            return TIMEZONE_CURRENCY_MAP[timezone];
        }
        // Fallback: try to detect from navigator language
        const lang = navigator.language || navigator.userLanguage || '';
        if (lang.startsWith('en-GB')) return 'GBP';
        if (lang.startsWith('en-AU')) return 'AUD';
        if (lang.startsWith('en-CA')) return 'CAD';
        if (lang.startsWith('en-IN') || lang.startsWith('hi')) return 'INR';
        if (lang.startsWith('ja')) return 'JPY';
        if (lang.startsWith('de-CH') || lang.startsWith('fr-CH')) return 'CHF';
        if (lang.startsWith('de') || lang.startsWith('fr') || lang.startsWith('es') || lang.startsWith('it') || lang.startsWith('nl') || lang.startsWith('pt-PT')) return 'EUR';
        if (lang.startsWith('pt-BR')) return 'BRL';
        if (lang.startsWith('ar-AE')) return 'AED';
        if (lang.startsWith('ar-SA')) return 'SAR';
    } catch (e) {
        // Ignore detection errors
    }
    return 'USD';
}

const CurrencyContext = createContext(null);

export function CurrencyProvider({ children }) {
    const [currencyCode, setCurrencyCode] = useState('USD');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Check localStorage first
        const stored = localStorage.getItem('preferred_currency');
        if (stored && CURRENCIES[stored]) {
            setCurrencyCode(stored);
        } else {
            const detected = detectUserCurrency();
            setCurrencyCode(detected);
        }
        setIsLoaded(true);
    }, []);

    const setCurrency = useCallback((code) => {
        if (CURRENCIES[code]) {
            setCurrencyCode(code);
            localStorage.setItem('preferred_currency', code);
        }
    }, []);

    const formatPrice = useCallback((usdPrice) => {
        if (usdPrice === null || usdPrice === undefined) return null;
        const curr = CURRENCIES[currencyCode];
        const converted = usdPrice * curr.rate;

        try {
            return new Intl.NumberFormat(undefined, {
                style: 'currency',
                currency: curr.code,
                minimumFractionDigits: curr.code === 'JPY' ? 0 : 2,
                maximumFractionDigits: curr.code === 'JPY' ? 0 : 2,
            }).format(converted);
        } catch {
            return `${curr.symbol}${converted.toFixed(2)}`;
        }
    }, [currencyCode]);

    const value = useMemo(() => ({
        currencyCode,
        currency: CURRENCIES[currencyCode],
        currencies: CURRENCIES,
        setCurrency,
        formatPrice,
        isLoaded,
    }), [currencyCode, setCurrency, formatPrice, isLoaded]);

    return (
        <CurrencyContext.Provider value={value}>
            {children}
        </CurrencyContext.Provider>
    );
}

export function useCurrency() {
    const context = useContext(CurrencyContext);
    if (!context) {
        throw new Error('useCurrency must be used within a CurrencyProvider');
    }
    return context;
}
