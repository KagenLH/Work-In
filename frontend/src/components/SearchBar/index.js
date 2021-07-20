import { useState } from 'react';

import '../HomePage/HomePage.css';
import './SearchBar.css'

export default function SearchBar({ context }) {
    const [searchVal, setSearchVal] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form
        onSubmit={handleSubmit}
        className={context === 'home' ? "homepage__search" : "navbar__search"}
    >
        <button className="homepage__search-submit">
            <i className="fas fa-search search-icon"></i>
        </button>
        <input
            className={context === 'home' ? "homepage__search-input" : "navbar__search-input"}
            type="text"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            placeholder="Find your listing..."
        >
        </input>
    </form>
    )
}