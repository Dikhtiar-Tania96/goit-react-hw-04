const ImageCard = ({ image, onClick }) => {
  return (
      <div>
        <img
          onClick={() => onClick(image)}
          src={image.urls.small}
          alt={image.alt_description}
          width={200}
          height={250}
        />
      </div>
  );
};

export default ImageCard;
