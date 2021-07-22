import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { closeImageViewer, setCurrentImage } from '../../../store/imageViewer';
import ImageViewerImage from './ImageViewerImage';
import "./ImageViewer.css";

export default function ImageViewer({ images, show }) {
    const currentImage = useSelector(state => state.imageViewer.currentImage);
    const dispatch = useDispatch();
    
    let currentIndex = images.reduce((accum, curr, i) => curr === currentImage ? i : accum, 0);

    if(!show) {
        return null;
    }

    return (
        <div
            className="image-viewer__container"
        >
            <div 
                className="sliding-image__container"
            >
                <ImageViewerImage image={currentImage}/>
            </div>
            <button
                className="image-viewer__close-button"
                onClick={() => dispatch(closeImageViewer())}
            >
                <div className="image-viewer__close-button-container">
                    <i className="fas fa-times"></i>
                    <div className="span-wrapper">
                        <span className="image-viewer__close-span">Close</span>
                    </div>
                </div>

            </button>
            {currentIndex !== images.length - 1 && 
            <button
                className="image-viewer__next-button"
                onClick={() => {
                    currentIndex += 1;
                    dispatch(setCurrentImage(images[currentIndex]))
                }}
            >
                
                
                <i class="fas fa-chevron-right"></i>
            </button>}
            {currentIndex !== 0 && <button
                className="image-viewer__previous-button"
                onClick={() => {
                    currentIndex -= 1;
                    dispatch(setCurrentImage(images[currentIndex]))
                }}
            >
                
                
                <i class="fas fa-chevron-left"></i>
            </button>}
            <span className="image-viewer__current-position">
                {`${currentIndex + 1} / ${images.length}`}
            </span>
        </div>
    );
}