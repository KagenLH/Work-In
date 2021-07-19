import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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

                setName(listing.name);
                setAddress(listing.address);
                setCity(listing.city);
                setState(listing.state);
                setCountry(listing.country);
                setDescription(listing.description);
                setPrice(listing.price);
                setImages(listing.Images);
            }
        })();
    }, [listingId]);

    return (
        <div
        className="listing-page-container"
        >
            <ul>
                <li>{name}</li>
                <li>{address}</li>
                <li>{city}</li>
                <li>{state}</li>
                <li>{country}</li>
                <li>{description}</li>
                <li>{price}</li>
                <li>{images.map((image) => (
                    <img
                    className="listing-page__listing-image"
                    key={image.id}
                    src={image.url}/>
                ))}</li>
            </ul>
        </div>
    );
}