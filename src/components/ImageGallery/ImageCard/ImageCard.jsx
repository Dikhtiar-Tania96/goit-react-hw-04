const ImageCard = ({ image, onClick }) => {
  return (
    <>
      <div>
        <img
          onClick={() => onClick(image)}
          src={image.urls.small}
          alt={image.alt_description}
        />
      </div>
    </>
  );
};

export default ImageCard;
