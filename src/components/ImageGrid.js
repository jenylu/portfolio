import { Link } from 'react-router-dom';
import { Posts } from '../Constants';
import '../styles/ImageGrid.css';

function ImageGrid() {
    const imagesList = Object.entries(Posts).map(([slug, { image }]) => (
        <a className="thumbnail" key={slug}>
            <Link to={`/illustration/${slug}`}>
                <img key={slug} src={image} alt={slug} />
            </Link>
        </a>
      ));

    return (
        <div className="gallery-parent">
            <div className="masonry-with-columns">
                {imagesList}
            </div>
        </div>
    );
}

export default ImageGrid