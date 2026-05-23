'use client';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useDebounce from '../../hooks/useDebounce';

const SearchInput = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    
    // In a real app, you'd dispatch an action with the debounced search term
    // For this example, we'll just log it.
    useEffect(() => {
        if (debouncedSearchTerm) {
            // dispatch(searchLeads(debouncedSearchTerm));
        }
    }, [debouncedSearchTerm]);

    return (
        <input
            type="text"
            placeholder="Search by name, email, company..."
            className="p-2 border rounded-md w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    );
};

export default SearchInput;
