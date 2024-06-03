import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.list}>
      {images.map((img) => (
        <li key={img.id} className={css.item}>
          <ImageCard img={img} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
