import { useEffect } from 'react';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
import Measure from 'react-measure';

const images = [
  './portfolio/images/scribbles/mel.jpg',
  './portfolio/images/scribbles/rollerskater_afro.jpg',
  './portfolio/images/scribbles/Fall.jpg',
  './portfolio/images/scribbles/wednesday_shapes.jpg',
  './portfolio/images/scribbles/Empari_Skates.jpg',
  './portfolio/images/scribbles/Esty.jpg',
  './portfolio/images/scribbles/Pink_Girls.jpg',
  './portfolio/images/scribbles/cool_girl.jpg',
  './portfolio/images/scribbles/vi.jpg',
  './portfolio/images/scribbles/wednesday.jpg',
  './portfolio/images/scribbles/chinese_girl.jpg',
  './portfolio/images/scribbles/jinx.jpg',
  './portfolio/images/scribbles/Kels.jpg',
  './portfolio/images/scribbles/mehalia_2.jpg',
  './portfolio/images/scribbles/mehalia.jpg',
  './portfolio/images/scribbles/Morning_Has_Broken.jpg',
  './portfolio/images/scribbles/tati.jpg',
  './portfolio/images/scribbles/frog.jpg',
  './portfolio/images/scribbles/frog_sketch.jpg',
  './portfolio/images/scribbles/Swings.jpg',
  './portfolio/images/scribbles/On_The_Farm.jpg',
  './portfolio/images/scribbles/Christmas.jpg',
  './portfolio/images/scribbles/flower_field.jpg',
  './portfolio/images/scribbles/FirstCrush.jpg',
  './portfolio/images/scribbles/TakeABite.jpg',
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