import 'photoswipe/dist/photoswipe.css'

import { useEffect } from 'react';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
import { Gallery, Item } from 'react-photoswipe-gallery'

const images = [
  {
    src:  './images/comics/Opposable_Thumbs.jpg',
    width: 1600,
    height: 1600,
  },
  {
    src: './images/comics/Side_Salad.jpg',
    width: 1600,
    height: 1600,
  },
  {
    src: './images/comics/Monsters.jpg',
    width: 678,
    height: 1014,
  },
  {
    src:  './images/comics/Bath_Time.jpg',
    width: 1600,
    height: 1600,
  },
  {
    src: './images/scribbles/Christmas_Pigeon_Card.jpg',
    width: 1350,
    height: 1725,
  },
  {
    src: './images/comics/Birthday_Pigeon_Card.jpg',
    width: 1350,
    height: 1725,
  },
  {
    src: './images/comics/St_Patricks_Pigeon_Card.jpg',
    width: 1350,
    height: 1725,
  },
  {
    src: './images/comics/Easter_Pigeon_Card.jpg',
    width: 1350,
    height: 1725,
  },
];

function Comics() {
  useEffect(() => {
    document.title = 'Jennifer Lu | Comics';
  }, []);

  return (
    <div className="content innerContent">
      <Gallery>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 300: 1, 500: 2, 700: 3, 900: 4 }}
        >
          <Masonry gutter="15px">
            {images.map(({src, width, height}) =>
            (<Item
              original={src}
              thumbnail={src}
              width={width}
              height={height}>
              {({ ref, open }) => (
                <img
                  style={{ cursor: 'pointer' }}
                  src={src}
                  ref={ref}
                  onClick={open}
                />
              )}
            </Item>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Gallery>
    </div>
  );
}

export default Comics;