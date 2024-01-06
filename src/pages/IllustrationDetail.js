import { Link, useParams } from "react-router-dom";
import { Posts } from '../Constants';
import GoToTop from '../components/GoToTop';
import '../styles/IllustrationDetails.css';

const linkStyle = {
    textDecoration: "none",
    color: 'black'
  };

function IllustrationDetail() {
    const { slug } = useParams();
    const post = Posts[slug];

    if(!post) {
        return <span>The page you've requested does not exist.</span>;
    }

    const {title, description, more_images} = post;

    let moreImagesList = null;
    if (more_images.length > 0) {
        moreImagesList = (
            more_images.map((image, index) =>
                <img key={slug+index} src={image} alt={slug+index} />
            )
        );
    }

    let prevSlug = '';
    let nextSlug = '';
    let keyFound = false;
    for (const key in Posts) {
        if (keyFound === true) {
            nextSlug = key;
            break;
        }

        if (key === slug) {
            keyFound = true;
        } else {
            prevSlug = key;
        }
    }

    return (
        <div className="postContainer">
            <div className="detailsContainer">
                <div className="detailImages">
                    {moreImagesList != null ? moreImagesList : null}
                </div>
                <div className="description">
                    <h1 className="title">{title}</h1>
                    <br />
                    <p> {description}
                    </p>
                </div>
            </div>
            <div className="linkContainer">
                <div className="left">
                    <Link to={`/`} style={linkStyle}> Back to Illustration </Link>
                </div>
                <div className="right">
                    {prevSlug !== '' && <Link to={`/illustration/${prevSlug}`}  style={linkStyle}> prev </Link>}
                    / {nextSlug !== '' && <Link to={`/illustration/${nextSlug}`}  style={linkStyle}> next </Link>}
                </div>
            </div>
            <GoToTop />
        </div>
    );
}

export default IllustrationDetail;