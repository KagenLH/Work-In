import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { csrfFetch } from '../../store/csrf';

import './ListingSearch.css';

export default function ListingSearch() {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        (async function() {
            const res = await csrfFetch('/api/listings');

            if(res.ok) {
                const newListings = await res.json();
                setListings(newListings);
            }
        })();
    }, []);

    return (
        <div
            className="listing-search__container"
        >
            <div className="listing-search__listings-container">
                {listings.map(listing => (
                    <NavLink to={`/listings/${listing.id}`} className="listing-search__listing-image-link">
                        <div key={listing.id} className="listing-search__listing-box">
                            <div className="listing-search__listing-image-wrapper">
                                <img src={listing.Images[0].url} className="listing-search__listing-image"/>
                            </div>
                            <div className="listing-search__listing-info">
                                <div className="listing-search__listing-name-price">
                                    <div className="listing-search__listing-name">
                                        {listing.name}
                                    </div>
                                    <div className="listing-search__listing-price">
                                        {`$${listing.price} / hour`}
                                    </div>
                                </div>
                                <div className="listing-search__listing-general-location">
                                    {listing.city}, {listing.state}
                                </div>
                            </div>
                        </div>
                    </NavLink>
                    
                ))}
            </div>
        </div>
    );
}