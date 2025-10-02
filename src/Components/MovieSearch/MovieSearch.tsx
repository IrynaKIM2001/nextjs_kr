"use client";

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import './MovieSearch.css';

export default function MovieSearch() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [query, setQuery] = useState(searchParams.get('q') || '');


    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams(searchParams);
        if (query.trim()) {
            params.set('q', query.trim());
        }
        router.push(`/?${params.toString()}`);
        setQuery('');
    };

    return (
        <form className="search-inp-btn" onSubmit={handleSearch} style={{ display: 'flex', gap: '10px' }}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Пошук..."
            />
            <button
                type="submit">Шукати</button>
        </form>
    );
}