import { useState } from 'react';

import './HomePage.css'

export default function HomePage() {
    const [searchVal, setSearchVal] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="homepage">
            <form
                onSubmit={handleSubmit}
                className="homepage__search"
            >
                <button className="homepage__search-submit">
                    <i className="fas fa-search search-icon"></i>
                </button>
                <input
                    className="homepage__search-input"
                    type="text"
                    value={searchVal}
                    onChange={(e) => setSearchVal(e.target.value)}
                    placeholder="Find your listing..."
                >
                </input>
            </form>
        </div>
    );
}