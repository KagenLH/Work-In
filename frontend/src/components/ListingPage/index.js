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

                console.log(images);
                console.log(listing);
            }
        })();
    }, [listingId]);


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
                        {images.map(image => (
                            <img src={image.url} key={image.id}/>
                        ))}
                        <div 
                            className="listing-page__cover-image-container"
                        >
                            <a
                                className="listing-page__cover-image"
                                href="/"
                                // style={{backgroundImage: images[0].url}}
                            />
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