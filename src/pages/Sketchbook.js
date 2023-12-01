import { useEffect } from 'react';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
import Measure from 'react-measure';

const images = [
  './images/scribbles/mel.jpg',
  './images/scribbles/rollerskater_afro.jpg',
  './images/scribbles/Fall.jpg',
  './images/scribbles/wednesday_shapes.jpg',
  './images/scribbles/Empari_Skates.jpg',
  './images/scribbles/Esty.jpg',
  './images/scribbles/Pink_Girls.jpg',
  './images/scribbles/cool_girl.jpg',
  './images/scribbles/vi.jpg',
  './images/scribbles/wednesday.jpg',
  './images/scribbles/chinese_girl.jpg',
  './images/scribbles/jinx.jpg',
  './images/scribbles/Kels.jpg',
  './images/scribbles/mehalia_2.jpg',
  './images/scribbles/mehalia.jpg',
  './images/scribbles/Morning_Has_Broken.jpg',
  './images/scribbles/tati.jpg',
  './images/scribbles/frog.JPG',
  './images/scribbles/frog_sketch.JPG',
  './images/scribbles/Swings.jpg',
  './images/scribbles/On_The_Farm.jpg',
  './images/scribbles/Christmas.jpg',
  './images/scribbles/flower_field.jpg',
  './images/scribbles/FirstCrush.jpg',
  './images/scribbles/TakeABite.jpg',
];

function Sketchbook() {
  useEffect(() => {
    document.title = 'Jennifer Lu | Sketchbook';
  }, []);

  return (
    <div className="content innerContent">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 300: 2, 500: 2, 700: 3, 900: 4 }}
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

export default Sketchbook;