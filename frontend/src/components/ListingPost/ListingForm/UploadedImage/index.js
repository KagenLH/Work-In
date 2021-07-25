import { useEffect } from 'react';
import './UploadedImage.css';

export default function UploadedImage({ image, context }) {
    useEffect(() => {

    }, []);
    return (
        <img src={context === "new" ? URL.createObjectURL(image) : image.url} className="listing-create__uploaded-image" alt="\A"/>
    )
}