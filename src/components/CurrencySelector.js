'use client';

import { useState, useRef, useEffect } from 'react';
import { useCurrency } from '@/context/CurrencyContext';

export default function CurrencySelector() {
    const { currencyCode, currency, currencies, setCurrency } = useCurrency();
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const currencyList = Object.values(currencies);

    return (
        <div className="currency-selector" ref={ref}>
            <button
                className="currency-btn"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label="Select currency"
                id="currency-selector-btn"
            >
                <span className="currency-flag">{currency.flag}</span>
                <span>{currencyCode}</span>
                <span style={{ fontSize: '0.65rem', marginLeft: '2px' }}>▼</span>
            </button>
            <div className={`currency-dropdown ${isOpen ? 'open' : ''}`}>
                {currencyList.map((c) => (
                    <button
                        key={c.code}
                        className={`currency-option ${c.code === currencyCode ? 'active' : ''}`}
                        onClick={() => {
                            setCurrency(c.code);
                            setIsOpen(false);
                        }}
                    >
                        <span className="currency-flag">{c.flag}</span>
                        <span>{c.code}</span>
                        <span style={{ color: 'var(--color-gray-400)', marginLeft: 'auto', fontSize: '0.8rem' }}>
                            {c.name}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}
