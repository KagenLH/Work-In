import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { showSearchBubble, hideSearchBubble } from '../../store/search';
import '../HomePage/HomePage.css';
import './SearchBar.css';
import logo from '../../assets/images/work-in-logo.png';

import { csrfFetch } from '../../store/csrf';

export default function SearchBar({ context }) {
    const [searchVal, setSearchVal] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const showBubble = useSelector(state => state.search.show);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

    };

    const fetchResults = async (e) => {
        const queryString = encodeURIComponent(searchVal);

        const res = await csrfFetch(`/api/search/${queryString}`);

        if(res.ok) {
            const listings = await res.json();
            setSearchResults(listings);
            dispatch(showSearchBubble());
        } else {
            console.log("Something went wrong.");
        }
    };

    useEffect(() => {
        if(!showBubble) return;

        const closeBubble = () => {
            dispatch(hideSearchBubble());
        }

        document.addEventListener('click', closeBubble);

        return () => document.removeEventListener('click', closeBubble);
    }, [showBubble]);

    return (
        <>
            <div className={context === "home" ? "search-form-container" : "nav-search-form-container"}>
                {showBubble && context === "home" && (
                    <img src={logo} className="home-search-logo"/>
                )}
                <form
                    onSubmit={handleSubmit}
                    className={context === 'home' ? "homepage__search" : "navbar__search"}
                >
                    <button
                        className="homepage__search-submit"
                        onClick={handleSubmit}
                    >
                        <div className={context === "home" ? "search-icon__wrapper-home" : "search-icon__wrapper-nav"}>
                            <i className="fas fa-search search-icon"></i>
                        </div>
                    </button>
                    <input
                        className={context === 'home' ? "homepage__search-input" : "navbar__search-input"}
                        type="text"
                        value={searchVal}
                        onChange={(e) => setSearchVal(e.target.value)}
                        onKeyUp={fetchResults}
                        placeholder="Find your listing..."
                    >
                    </input>
                </form>
                {showBubble && 
                (<div
                    className={context === "home" ? "homepage__dropdown" : "searchbar__dropdown"}
                    onClick={(e) => e.stopPropagation()}
                >
                    <ul className="searchbar__results">
                        {searchResults.map(result => (
                            <li key={result.id}
                                className="searchbar__result"
                            >
                                <div
                                    className="searchbar__result-text"
                                    onClick={() => {
                                        dispatch(hideSearchBubble());
                                        history.push(`/listings/${result.id}`)
                                    }}
                                >
                                    <span className="searchbar__map-marker-wrapper">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </span>
                                    {`${result.name} - ${result.city}, ${result.state}`}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>)}
            </div>
        </>
    )
}