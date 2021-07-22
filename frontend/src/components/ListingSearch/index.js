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
            <div className="listing-search__top-bar">
                <div className="listing-search__create-listing">
                    <span className="listing-search__create-listing-button-label">Have a Workspace of your own?</span>
                    <NavLink to="/listings/create" className="listing-search__create-listing-button">Host a Listing</NavLink>
                </div>
            </div>
            <div className="listing-search__listings-container">
                {listings.map(listing => (
                    <NavLink key={listing.id} to={`/listings/${listing.id}`} className="listing-search__listing-image-link">
                        <div key={listing.id} className="listing-search__listing-box">
                            <div className="listing-search__listing-image-wrapper">
                                <div className="listing-search__heart-container">
                                    <i className="far fa-heart"></i>
                                </div>
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