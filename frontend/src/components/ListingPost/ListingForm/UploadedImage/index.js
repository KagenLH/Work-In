import { useEffect } from 'react';
import './UploadedImage.css';

export default function UploadedImage({ image }) {
    useEffect(() => {

    }, []);
    return (
        <img src={URL.createObjectURL(image)} className="listing-create__uploaded-image"/>
    )
}