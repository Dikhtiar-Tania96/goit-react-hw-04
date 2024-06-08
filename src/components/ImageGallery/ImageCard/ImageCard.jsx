const ImageCard = ({ image, onClick }) => {
  return (
      <div>
        <img
          onClick={() => onClick(image)}
          src={image.urls.small}
          alt={image.alt_description}
          width={400}
          height= {300}
        />
      </div>
  );
};

export default ImageCard;
