import ListingForm from "../ListingPost/ListingForm";

import './ListingEdit.css';

export default function ListingEdit() {
    return (
        <div className="listing-edit__container-outer">
            <div className="listing-edit__container">
                <h2
                    className="listing-edit__header"
                >
                    Edit your listing
                </h2>
                <ListingForm context="edit"/>
            </div>
        </div>
    )
};