import { useEffect } from 'react';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
import Measure from 'react-measure';

const images = [
  './portfolio/images/comics/Opposable_Thumbs.jpg',
  './portfolio/images/comics/Side_salad.jpg',
  './portfolio/images/comics/Monsters.jpg',
  './portfolio/images/comics/Bath_Time.jpg',
];

function Comics() {
  useEffect(() => {
    document.title = 'Jennifer Lu | Comics';
  }, []);

  return (
    <div className="content innerContent">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 300: 1, 500: 2, 700: 3, 900: 4 }}
      >
        <Masonry gutter="15px">
          {images.map((image, i) => (
            <Measure key={i}>
              {({ measureRef }) => (
                  <div ref={measureRef}>
                      <img
                          key={i}
                          src={image}
                          style={{width: "100%", display: "block"}}
                          alt=""
                      />
                  </div>
              )}
            </Measure>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default Comics;