import { useState } from 'react';

import './ListingForm.css';

export default function ListingForm({ context }) {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');

    return (
        <form
            className="listing-form"
        >
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
                    What's the street address?
                </span>
            </div>
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
                    Workspace City
                </span>
            </div>
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
                    Workspace State/Province
                </span>
            </div>
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
                    Workspace Country
                </span>
            </div>
        </form>
    );
}