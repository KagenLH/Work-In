import { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { useParams } from 'react-router';

import UploadedImage from './UploadedImage';
import FormErrors from '../../FormErrors';
import { csrfFetch } from '../../../store/csrf';
import './ListingForm.css';

export default function ListingForm({ context }) {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);
    const [newImages, setNewImages] = useState([]);
    const [validationErrors, setValidationErrors] = useState([]);

    const listingId = useParams().id
    
    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
        const mappedAcc = acceptedFiles.map(file => ({file, errors: []}));
        if(context === "post") {
            setImages(current => [...current, ...mappedAcc, ...rejectedFiles]);
        } else {
            setNewImages(current => [...current, ...mappedAcc, ...rejectedFiles]);
        }
    }, []);

    const { getRootProps, getInputProps } = useDropzone({onDrop});

    const removeImage = (e) => {
        if(context === "post") {
            setImages(images.filter(image => image.file.path !== e.target.getAttribute("urlkey")));
        } else {
            setNewImages(newImages.filter(image => image.file.path !== e.target.getAttribute("urlkey")));
        }
    }

    const removeOldImage = () => {

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("address", address);
            formData.append("city", city);
            formData.append("state", state);
            formData.append("country", country);
            formData.append("price", 20.00);
            formData.append("description", description);

            if(images && images.length !== 0) {
                for(let i = 0; i < images.length; i++) {
                    formData.append("images", images[i].file);
                }
            }

            const res = await csrfFetch('/api/listings', {
                method: 'POST',
                headers: { 'Content-Type': 'multipart/form-data'},
                body: formData
            });

            if(res.ok) {
                const listing = await res.json();
                console.log(listing);
            }

        } catch(err) {
            console.log("Something went wrong.");
            const errors = await err.json();
            console.log(errors.errors);
            setValidationErrors(errors.errors);
        }
    }

    useEffect(() => {
        if(context === "edit") {
            (async function () {
                try {
                    const res = await csrfFetch(`/api/listings/${listingId}`);
    
                    if(res.ok) {
                        const listing = await res.json();
    
                        setName(listing.name);
                        setAddress(listing.address);
                        setCity(listing.city);
                        setState(listing.state);
                        setCountry(listing.country);
                        setDescription(listing.description);
                        setImages(listing.Images);
                    }
                } catch (err) {
                    console.log(err);
                }
            })();
        }
    }, []);

    return (
        <form
            className="listing-form"
        >
            <FormErrors errors={validationErrors} keyword="name"/>
            <div className="listing-form__input-wrapper">
                <input
                    className="listing-form__input-text"
                    name="name"
                    type="text"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                />
                <span className="listing-form__floating-label">
                    Name your listing
                </span>
            </div>
            <FormErrors errors={validationErrors} keyword="address"/>
            <div className="listing-form__input-wrapper">
                <input
                    className="listing-form__input-text"
                    name="address"
                    type="text"
                    value={address}
                    required
                    onChange={(e) => setAddress(e.target.value)}
                />
                <span className="listing-form__floating-label">
                    What's the street address?
                </span>
            </div>
            <FormErrors errors={validationErrors} keyword="city"/>
            <div className="listing-form__input-wrapper">
                <input
                    className="listing-form__input-text"
                    name="city"
                    type="text"
                    value={city}
                    required
                    onChange={(e) => setCity(e.target.value)}
                />
                <span className="listing-form__floating-label">
                    Workspace City
                </span>
            </div>
            <FormErrors errors={validationErrors} keyword="state"/>
            <div className="listing-form__input-wrapper">
                <input
                    className="listing-form__input-text"
                    name="state"
                    type="text"
                    value={state}
                    required
                    onChange={(e) => setState(e.target.value)}
                />
                <span className="listing-form__floating-label">
                    Workspace State/Province
                </span>
            </div>
            <FormErrors errors={validationErrors} keyword="country"/>
            <div className="listing-form__input-wrapper">
                <input
                    className="listing-form__input-text"
                    name="country"
                    type="text"
                    value={country}
                    required
                    onChange={(e) => setCountry(e.target.value)}
                />
                <span className="listing-form__floating-label">
                    Workspace Country
                </span>
            </div>
            <div className="listing-form__input-wrapper">
                <label htmlFor="images" className="listing-form__images-label">
                    Upload some images of your place (the first will be the cover image).
                </label>
                <div {...getRootProps()} className="listing-form__input-images-box">
                    <input 
                        {...getInputProps()}
                        className="listing-form__input-images"
                        name="images"
                    />
                    <div className="listing-form__input-images-drag-message">Drag and drop your images here.</div> 
                </div>
            </div>
            {context === "edit" && <div className="listing-form__uploaded-images-label">New images to add to this listing (click to remove):</div>}
            <div className="listing-form__uploaded-images">
                {context === "post" && images.map((imageWrapper, i) => (
                    <div key={i} className="listing-form__uploaded-image-wrapper">
                        <div urlkey={imageWrapper.file.path} className="listing-form__uploaded-image-overlay"  onClick={removeImage}>
                            <UploadedImage image={imageWrapper.file} context="new"/>
                        </div>
                        <div className="listing-form__uploaded-image-label">
                            {`Image #${i + 1}` + (i === 0 ? ` (Cover Image)` : '')}
                        </div>
                    </div>
                ))}
                {context === "edit" && newImages.map((imageWrapper, i) => (
                    <div key={i} className="listing-form__uploaded-image-wrapper">
                        <div urlkey={imageWrapper.file.path} className="listing-form__uploaded-image-overlay"  onClick={removeImage}>
                            <UploadedImage image={imageWrapper.file} context="new"/>
                        </div>
                        <div className="listing-form__uploaded-image-label">
                            {`Image #${i + images.length +  1}` + (i - images.length === 0 ? ` (Cover Image)` : '')}
                        </div>
                    </div>
                ))}
            </div>
            {context === "edit" && <div className="listing-form__uploaded-images-label">Images for this listing (click to remove):</div>}
            <div className="listing-form__uploaded-images">
                {context === "edit" && images.map((image, i) => (
                    <div key={image.id} className="listing-form__uploaded-image-wrapper">
                        <div urlkey={image.id} className="listing-form__uploaded-image-overlay" onClick={removeOldImage}>
                            <UploadedImage image={image} context="old"/>
                        </div>
                        <div className="listing-form__uploaded-image-label">
                            {`Image #${i + 1}` + (i === 0 ? ` (Cover Image)` : '')}
                        </div>
                    </div>
                ))}
            </div>
            <FormErrors errors={validationErrors} keyword="description"/>
            <div className="listing-form__input-wrapper">
                <label htmlFor="description" className="listing-form__description-label">
                    Describe the details of your listing:
                </label>
                <textarea
                        className="listing-form__input-textarea"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                />
            </div>
            <div className="listing-form__submit-button-container">
                <button className="listing-form__submit-button" onClick={handleSubmit}>{context === "post" ? 'Create Listing' : 'Update Listing'}</button>
            </div>
        </form>
    );
}