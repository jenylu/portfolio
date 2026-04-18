import 'photoswipe/dist/photoswipe.css';

import { useEffect, useRef, useCallback } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import PhotoSwipe from 'photoswipe';

const images = [
  {
    src: './images/comics/Opposable_Thumbs.jpg',
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
    src: './images/comics/Bath_Time.jpg',
    width: 1600,
    height: 1600,
  },
  {
    src: './images/comics/Christmas_Pigeon_Card.jpg',
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
  {
    src: './images/comics/Birthday_Cake.jpg',
    width: 1600,
    height: 1600,
  },
];

function Comics() {
  const thumbRefs = useRef([]);
  const pswpRef = useRef(null);

  useEffect(() => {
    document.title = 'Jennifer Lu | Comics';
  }, []);

  useEffect(() => {
    return () => {
      pswpRef.current?.destroy();
      pswpRef.current = null;
    };
  }, []);

  const openGallery = useCallback((index, e) => {
    if (pswpRef.current) {
      return;
    }

    const dataSource = images.map((img, i) => ({
      src: img.src,
      width: img.width,
      height: img.height,
      element: thumbRefs.current[i] ?? undefined,
    }));

    const pswp = new PhotoSwipe({
      dataSource,
      index,
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
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 300: 1, 500: 2, 700: 3, 900: 4 }}
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

export default Comics;
