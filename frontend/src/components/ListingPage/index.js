import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';

import { csrfFetch } from '../../store/csrf';

import './ListingPage.css';

export default function ListingPage() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(20);
    const [images, setImages] = useState([]);

    const listingId = useParams().id;

    useEffect(() => {
        (async function() {
            const res = await csrfFetch(`/api/listings/${listingId}`);

            if(res.ok) {
                const listing = await res.json();

                setImages(listing.Images);
                setName(listing.name);
                setAddress(listing.address);
                setCity(listing.city);
                setState(listing.state);
                setCountry(listing.country);
                setDescription(listing.description);
                setPrice(listing.price);

                console.log(listing);
            }
        })();
    }, [listingId]);

    console.log(images);

    return (
        <div
        className="listing-page-container-outer"
        >
            <div
                className="listing-page-container"
            >
                <div
                    className="listing-page__title-block"
                >
                    <div
                        className="listing-page__title"
                    >
                        {name}
                    </div>
                    <div 
                        className="listing-page__title-address"
                    >
                        {city}, {state}, {country}
                    </div>
                </div>
                <div
                    className="listing-page__images-block"
                >
                    <div 
                        className="listing-page__images-images"
                    >
                        {/* {images.map(image => (
                            <img src={image.url} key={image.id}/> // <-- Works just fine
                        ))} */}
                        <div 
                            className="listing-page__cover-image-container"
                        >
                            <NavLink
                                className="listing-page__cover-image-link"
                                to="#"
                            >
                                <img src={images[0]?.url} className="listing-page__cover-image"/>
                            </NavLink>
                        </div>
                        <div 
                            className="listing-page__secondary-container-1"
                        >
                            {(images[1] && images[2]) && images.slice(1, 3).map(image => (
                                <NavLink 
                                    className="listing-page__secondary-image-link"
                                    to="#"
                                >
                                    <img src={image.url} className="listing-page__secondary-image"/>
                                </NavLink>
                            ))}
                        </div>
                        <div 
                            className="listing-page__secondary-container-2"
                        >
                            {(images[3] && images[4]) && images.slice(3, 5).map(image => (
                                <NavLink 
                                    className="listing-page__secondary-image-link"
                                    to="#"
                                >
                                    <img src={image.url} className="listing-page__secondary-image"/>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    <div 
                        className="listing-page__images-showall"
                    >
                    </div>
                </div>
            </div>
        </div>
    );
}