import { useSelector } from 'react-redux';

import SearchBar from '../SearchBar';

import './HomePage.css'

export default function HomePage() {
    const showBubble = useSelector(state => state.search.show);

    return (
        <div className="homepage">
            <SearchBar context='home'/>
        </div>
    );
}