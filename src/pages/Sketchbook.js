import { useEffect } from 'react';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
import Measure from 'react-measure';

const images = [
  { src: './images/scribbles/mel.jpg' },
  { src: './images/scribbles/rollerskater_afro.jpg' },
  { src: './images/scribbles/Fall.jpg'},
  { src: './images/scribbles/wednesday_shapes.jpg' },
  { src: './images/scribbles/Empari_Skates.jpg' },
  { src: './images/scribbles/TakeABite.jpg' },
  { src: './images/scribbles/Esty.jpg' },
  { src: './images/scribbles/Pink_Girls.jpg' },
  { src: './images/scribbles/cool_girl.jpg' },
  { src: './images/scribbles/vi.jpg' },
  { src: './images/scribbles/wednesday.jpg' },
  { src: './images/scribbles/chinese_girl.jpg' },
  { src: './images/scribbles/jinx.jpg' },
  { src: './images/scribbles/Kels.jpg' },
  { src: './images/scribbles/mehalia_2.jpg' },
  { src: './images/scribbles/mehalia.jpg' },
  { src: './images/scribbles/Morning_Has_Broken.jpg' },
  { src: './images/scribbles/tati.jpg' },
  { src: './images/scribbles/frog.JPG' },
  { src: './images/scribbles/frog_sketch.JPG' },
  { src: './images/scribbles/Swings.jpg' },
  { src: './images/scribbles/On_The_Farm.jpg' },
  { src: './images/scribbles/Christmas.jpg' },
  { src: './images/scribbles/flower_field.jpg' },
  { src: './images/scribbles/FirstCrush.jpg' },
  { src: './images/scribbles/Fireplace.jpg' },
  { src: './images/scribbles/Holiday_Robin_Card.jpg' },
  { src: './images/scribbles/Christmas_Pigeon_Card.jpg' },
  { src: './images/scribbles/Christmas_Carol.jpg' },
  { src: './images/scribbles/coit_tower.jpg' },
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
          {images.map(({src}, i) => (
            <Measure key={i}>
              {({ measureRef }) => (
                  <div ref={measureRef}>
                    <img
                        key={i}
                        src={src}
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