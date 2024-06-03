const ImageCard = ({ img }) => {
  return (
    <div>
      <img
        src={img.urls.small}
        alt={img.urls.description}
        width={385}
        height={320}
      />
    </div>
  );
};

export default ImageCard;
