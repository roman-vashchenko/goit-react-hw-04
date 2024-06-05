const ImageCard = ({ img, openModal }) => {
  return (
    <div>
      <img
        src={img.urls.small}
        alt={img.urls.description}
        width={350}
        height={290}
        onClick={() => {
          openModal(img);
        }}
      />
    </div>
  );
};

export default ImageCard;
