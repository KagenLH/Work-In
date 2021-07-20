import ListingForm from './ListingForm';

import './ListingPost.css';

export default function ListingPost() {
    return (
        <div
            className="listing-post__container-outer"
        >
            <div 
                className="listing-post__container"
            >
                <h2
                    className="listing-post__header">
                        Create a Workspace Listing
                </h2>
                <ListingForm context="post"/>
            </div>
        </div>
    );
}