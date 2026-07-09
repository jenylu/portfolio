import 'photoswipe/dist/photoswipe.css';

import { useEffect, useRef, useCallback } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import PhotoSwipe from 'photoswipe';

const images = [
  { src: './images/food/August_Recipe.jpg' },
  { src: './images/food/August_Instructions.png' },
  { src: './images/food/August_Recipe_1.jpg' },
  { src: './images/food/August_Recipe_2.jpg' },
  { src: './images/food/June_Spritzer.jpg' },
  { src: './images/food/Thai_Basil.jpg' },
  { src: './images/food/italy_food_zine.jpg' },
  { src: './images/food/italy_aperol.jpg' },
  { src: './images/food/Kimchi_Recipe.jpg' },
  { src: './images/food/Lemony_Hummus_Recipe.jpg' },
];

function FoodArt() {
  const thumbRefs = useRef([]);
  const pswpRef = useRef(null);

  useEffect(() => {
    return () => {
      pswpRef.current?.destroy();
      pswpRef.current = null;
    };
  }, []);

  useEffect(() => {
    document.title = 'Jennifer Lu | Food Art';
  }, []);

  const openGallery = useCallback((index, e) => {
    if (pswpRef.current) {
      return;
    }

    const dataSource = images.map((img, i) => {
      const element = thumbRefs.current[i] ?? undefined;
      return {
        src: img.src,
        width: element?.naturalWidth || 1600,
        height: element?.naturalHeight || 1600,
        element,
      };
    });

    const pswp = new PhotoSwipe({
      dataSource,
      index,
      paddingFn: () => ({
        top: 24,
        bottom: 24,
        left: 0,
        right: 0,
      }),
      initialPointerPos:
        e && 'clientX' in e
          ? { x: e.clientX, y: e.clientY }
          : undefined,
    });

    pswpRef.current = pswp;
    pswp.on('destroy', () => {
      pswpRef.current = null;
    });
    pswp.init();
  }, []);

  return (
    <div className="content innerContent">
      <p className="foodIntro">

        A collection of food illustration, recipes, and drink pieces inspired by
        meals, travel, and the joy of gathering around the table. These were mostly 
        created with digital paper cut collage or mixed media.
      </p>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 300: 1, 700: 2, 900: 3 }}
      >
        <Masonry gutter="15px">
          {images.map(({ src }, index) => (
            <img
              key={src}
              style={{ cursor: 'pointer', display: 'block', width: '100%' }}
              src={src}
              ref={(el) => {
                thumbRefs.current[index] = el;
              }}
              onClick={(e) => openGallery(index, e)}
              alt=""
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default FoodArt;
