const ImageCard = ({ img }) => {
  return (
    <div>
      <img
        src={img.urls.small}
        alt={img.urls.description}
        width={350}
        height={290}
      />
    </div>
  );
};

export default ImageCard;
