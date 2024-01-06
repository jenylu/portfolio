import { PhotoAlbum } from 'react-photo-album';
import { useNavigate } from "react-router-dom";
import { Photos } from '../Constants';
import '../styles/ImageGrid.css';

function ImageGrid() {
    const navigate = useNavigate();
    const handleClick = (slug) => {
        const slugString = JSON.stringify(slug).replace(/\"/g, '');;
        navigate(`/illustration/${slugString}`)
    };

    return (
        <div className="gallery-parent">
            <PhotoAlbum 
                layout="rows" 
                photos={Photos}
                targetRowHeight={350}
                spacing={15}
                rowConstraints={{maxPhotos:3}}
                onClick={({ photo }) => {
                    handleClick(photo.slug);
                }} />
        </div>
    );
}

export default ImageGrid