import '../ImageViewer.css';

export default function ImageViewerImage({ image }) {
    return (
        <div>
            <img className="image-viewer-image" alt="\A" src={image ? image : ''}/>
        </div>
    )
}