import SearchBar from '../SearchBar';

import './HomePage.css'

export default function HomePage() {
    return (
        <div className="homepage">
            <div className="homepage__welcome-message">
                <div className="homepage__welcome-message-1">
                    Welcome to Work-In.
                </div>
                <div className="homepage__welcome-message-2">
                    Find your future workspace here.
                </div>
            </div>
            <SearchBar context='home'/>
        </div>
    );
}