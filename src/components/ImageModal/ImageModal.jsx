import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({image, onClose }) => {
  return (
    <div>
      <Modal isOpen={true} onRequestClose={onClose}> 
      <button onClick={onClose}>X</button>
        <img src={image.urls.regular} alt={image.alt_description}/>
        <p>{image.alt_description}</p>
        <p>Author: {image.user.name}</p>
        <p>Likes: {image.likes}</p>
      </Modal>
    </div>
  );
};

export default ImageModal;
