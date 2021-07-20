import SearchBar from '../SearchBar';

import './HomePage.css'

export default function HomePage() {
    return (
        <div className="homepage">
            <SearchBar context='home'/>
        </div>
    );
}