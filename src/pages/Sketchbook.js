import { useEffect } from 'react';
import {initLightboxJS, SlideshowLightbox} from 'lightbox.js-react'

const images = [
  // characters
  { src: './images/scribbles/rollerskater_afro.jpg' },
  { src: './images/scribbles/Empari_Skates.jpg' },
  { src: './images/scribbles/Kels.jpg' },
  { src: './images/scribbles/Esty.jpg' },

  { src: './images/scribbles/cool_girl.jpg' },
  { src: './images/scribbles/Pink_Girls.jpg' },
  { src: './images/scribbles/wednesday_shapes.jpg' },
  { src: './images/scribbles/wednesday.jpg' },
  { src: './images/scribbles/chinese_girl.jpg' },
  { src: './images/scribbles/frog.JPG' },
  { src: './images/scribbles/frog_sketch.JPG' },
  { src: './images/scribbles/Boy.jpg' },
  { src: './images/scribbles/Old_Dude.jpg' },
  { src: './images/scribbles/Wk_3_HW.jpg' },
  { src: './images/scribbles/Final_Lineup.jpg' },

  // portraits
  { src: './images/scribbles/mel.jpg' },
  { src: './images/scribbles/jinx.jpg' },
  { src: './images/scribbles/vi.jpg' },
  { src: './images/scribbles/mehalia_2.jpg' },
  { src: './images/scribbles/mehalia.jpg' },
  { src: './images/scribbles/tati.jpg' },

  // collage and misc
  { src: './images/scribbles/Swings.jpg' },
  { src: './images/scribbles/Fall.jpg'},
  { src: './images/scribbles/FirstCrush.jpg' },
  { src: './images/scribbles/Fireplace.jpg' },
  { src: './images/scribbles/TakeABite.jpg' },

  // cards
  { src: './images/scribbles/Christmas.jpg' },
  { src: './images/scribbles/thankyou_flowerfield.jpg' },
  { src: './images/scribbles/Holiday_Robin_Card.jpg' },
  { src: './images/scribbles/Christmas_Pigeon_Card.jpg' },
  { src: './images/scribbles/Christmas_Carol.jpg' },
  { src: './images/scribbles/Coit_Tower.jpg' },
];

function Sketchbook() {
  useEffect(() => {
    initLightboxJS("Insert your License Key here", "individual");
  }, []);

  useEffect(() => {
    document.title = 'Jennifer Lu | Sketchbook';
  }, []);

  return (
    <div className="content innerContent">
      <SlideshowLightbox className="" lightboxIdentifier="lightbox1" theme="lightbox">
        {images.map((image) => (
            <img
              className="lightboxGrid"
              src={image.src}
              data-lightboxjs="lightbox1"
              quality={80}
            />
        ))}
      </SlideshowLightbox>
    </div>);
}

export default Sketchbook;