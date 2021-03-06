import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { csrfFetch } from '../../store/csrf';
import { useBookingPast } from '../../utils/hooks';
import { setReviews } from '../../store/reviews';
import { openImageViewer, setCurrentImage } from '../../store/imageViewer';
import { showDeleteModal } from '../../store/modals';
import ImageViewer from './ImageViewer';
import DeleteListing from './DeleteListing';
import BookingBox from './BookingBox';
import ConfirmBooking from './ConfirmBooking';
import ReviewSection from './ReviewSection';
import ReviewCreate from './ReviewCreate';

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
    const [average, setAverage] = useState(0);

    const listingId = useParams().id;

    const showDeleteListingModal = useSelector(state => state.deleteListingModal.showModal);
    const showCreateBookingModal = useSelector(state => state.createBookingModal.showModal);

    const currentUser = useSelector(state => state.session?.user?.user?.username);
    const bookingModalContext = useSelector(state => state.createBookingModal.context);
    const reviews = useSelector(state => state.reviews);

    const bookingId = useSelector(state => state.booking.id);
    const userBooking = useSelector(state => state.userBookings.find(booking => booking?.listingId === parseInt(listingId)));

    const isBookingPast = useBookingPast(userBooking);

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
                dispatch(setReviews(listing.Bookings?.map(booking => booking.Review).filter(review => review !== null)));
            }
        })();
    }, [listingId, dispatch]);

    useEffect(() => {
        if(reviews[0]) {
            setAverage(reviews.reduce((accum, review) => accum + review.numStars, 0) / reviews.length);
        }
    }, [reviews])

    return (
        <>
            <DeleteListing
                show={showDeleteListingModal}
                coverImageUrl={images[0]?.url}
                name={name} price={price}
                listingId={listingId}/>
            <ConfirmBooking
                show={showCreateBookingModal}
                image={images[0]?.url}
                name={name}
                context={bookingModalContext}
                id={bookingId}/>
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
                        <div className="listing-page__title-address-and-score">
                            {reviews.length > 0 && (
                            <div className="listing-page__title-score">
                                <div className="listing-page__title-score-star">
                                    <i className="fas fa-star"></i>
                                </div>
                                <span className="listing-page__title-score-number">
                                    {average.toFixed(2)}
                                </span>
                                <span className="listing-page__title-score-reviews">
                                {` (${reviews.length} reviews) -`}
                                </span>
                            </div>
                            )}
                            <div 
                                className="listing-page__title-address"
                            >
                                {city}, {state}, {country}
                            </div>
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
                                onClick={() => {
                                    dispatch(setCurrentImage(images[0].url));
                                    dispatch(openImageViewer());
                                }}
                            >
                                <NavLink
                                    className="listing-page__cover-image-link"
                                    to="#"
                                >
                                    <img src={images[0]?.url} className="listing-page__cover-image" alt="\A"/>
                                </NavLink>
                            </div>
                            {images.length > 4 ? 
                            (<>
                                <div 
                                    className="listing-page__secondary-container-1"
                                >
                                    {(images[1] && images[2]) && images.slice(1, 3).map(image => (
                                        <NavLink 
                                            key={image.url}
                                            className="listing-page__secondary-image-link"
                                            to="#"
                                            onClick={() => {
                                                dispatch(setCurrentImage(image.url));
                                                dispatch(openImageViewer());
                                            }}
                                        >
                                            <div className="listing-page__secondary-image-overlay">
                                                <img src={image.url} className="listing-page__secondary-image" alt="\A"/>
                                            </div>
                                        </NavLink>
                                    ))}
                                </div>
                                <div 
                                    className="listing-page__secondary-container-2"
                                >
                                    {(images[3] && images[4]) && images.slice(3, 5).map(image => (
                                        <NavLink 
                                            key={image.url}
                                            className="listing-page__secondary-image-link"
                                            to="#"
                                            onClick={() => {
                                                dispatch(setCurrentImage(image.url));
                                                dispatch(openImageViewer());
                                            }}
                                        >
                                            <div className="listing-page__secondary-image-overlay">
                                                <img src={image.url} className="listing-page__secondary-image" alt="\A"/>
                                            </div>
                                        </NavLink>
                                    ))}
                                </div>
                            </>) : 
                            <>
                            <div 
                                className="listing-page__secondary-full-container"
                                onClick={() => {
                                    dispatch(setCurrentImage(images[1].url));
                                    dispatch(openImageViewer());
                                }}
                            >
                                <NavLink
                                    className="listing-page__cover-image-link"
                                    to="#"
                                >
                                    <img src={images[1]?.url} className="listing-page__cover-image" alt="\A"/>
                                </NavLink>
                            </div>
                            </>}
                        <button 
                            className="listing-page__images-showall"
                            onClick={() => {
                                dispatch(setCurrentImage(images[0].url));
                                dispatch(openImageViewer());
                            }}
                        >
                            <i className="fas fa-th"></i>
                            <div className="listing-page__images-showall-text">
                                Show all photos
                            </div>
                        </button>
                        </div>
                    </div>
                    <div className="listing-page__hosting-booking">
                        <div
                            className="listing-page__hosting-info"
                        >
                            {`Workspace hosted by ${host}`}
                            <div className="listing-page__full-address">
                                {address}, {city}, {state}, {country}
                            </div>
                        </div>
                        {host !== currentUser && (
                            <BookingBox price={price} reviews={reviews} average={average}/>
                        )}
                    </div>
                    <div 
                        className="listing-page__description"
                    >
                        {description}
                    </div>
                    <div className="listing-page__review-section">
                    {userBooking && isBookingPast && !userBooking.Review && (
                        <ReviewCreate host={host} booking={userBooking}/>
                    )}
                        {(reviews.length > 0 && 
                            <ReviewSection reviews={reviews} average={average}/>
                        )}
                    </div>
                    {host === currentUser && <div className="listing-page__crud-links">
                        Need to update something about this listing?
                        <div className="listing-page__links-container">
                            <NavLink to={`/listings/edit/${listingId}`} className="listing-page__crud-link">
                                Edit listing
                            </NavLink>
                            <span className="listing-page__crud-or">or</span>
                            <button
                                className="listing-page__crud-button"
                                onClick={() => dispatch(showDeleteModal())}
                            >
                                    Delete listing
                            </button>
                        </div>
                    </div>}
                </div>
            </div>
        </>
    );
}