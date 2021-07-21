import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { csrfFetch } from '../../store/csrf';
import { openImageViewer, setCurrentImage } from '../../store/imageViewer';
import ImageViewer from './ImageViewer';

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
    const [host, setHost] = useState('');

    const listingId = useParams().id;

    const dispatch = useDispatch();

    const showImageViewer = useSelector(state => state.imageViewer.showViewer);

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
                setHost(listing.User.username);
            }
        })();
    }, [listingId]);

    return (
        <>
            <ImageViewer show={showImageViewer} images={images.map(image => image.url)}/>
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
                                    onClick={() => {
                                        dispatch(setCurrentImage(images[0].url));
                                        dispatch(openImageViewer());
                                    }}
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
                                        onClick={() => {
                                            dispatch(setCurrentImage(image.url));
                                            dispatch(openImageViewer());
                                        }}
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
                                        onClick={() => {
                                            dispatch(setCurrentImage(image.url));
                                            dispatch(openImageViewer());
                                        }}
                                    >
                                        <img src={image.url} className="listing-page__secondary-image"/>
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                        <div 
                            className="listing-page__images-showall"
                        >
                            {/* TODO: Add code for a showall button that will go to the image viewer */}
                        </div>
                    </div>
                    <div
                        className="listing-page__hosting-info"
                    >
                        {`Workspace hosted by ${host}`}
                        <div className="listing-page__full-address">
                            {address}, {city}, {state}, {country}
                        </div>
                    </div>
                    <div 
                        className="listing-page__description"
                    >
                        {description}
                    </div>
                </div>
            </div>
        </>
    );
}