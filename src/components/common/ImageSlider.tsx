import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import styles from "../styles/ImageSlider.module.css"; // Import CSS module

type ImageSliderProps = {
  images: {
    url: string;
    alt: string;
  }[];
};

export function ImageSlider({ images }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  return (
    <section aria-label="Image Slider" className={styles.imageSliderContainer}>
      <a href="#after-image-slider-controls" className={styles.skipLink}>
        Skip Image Slider Controls
      </a>
      <div className={styles.sliderContainer}>
        {images.map(({ url, alt }, index) => (
          <img
            key={url}
            src={url}
            alt={alt}
            aria-hidden={imageIndex !== index}
            className={styles.imgSliderImg}
            style={{ transform: `translateX(${-100 * imageIndex}%)` }}
          />
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className={styles.imgSliderBtn}
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        <ArrowBigLeft aria-hidden />
      </button>
      <button
        onClick={showNextImage}
        className={styles.imgSliderBtn}
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        <ArrowBigRight aria-hidden />
      </button>
      <div className={styles.imageSliderDotsContainer}>
        {images.map((_, index) => (
          <button
            key={index}
            className={styles.imgSliderDotBtn}
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <CircleDot aria-hidden />
            ) : (
              <Circle aria-hidden />
            )}
          </button>
        ))}
      </div>
      <div id="after-image-slider-controls" />
    </section>
  );
}
