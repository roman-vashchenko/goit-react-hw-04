import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={css.list}>
      {images.map((img) => (
        <li key={img.id} className={css.item} onClick={() => openModal(img)}>
          <ImageCard img={img} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
