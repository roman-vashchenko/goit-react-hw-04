import ReactModal from "react-modal";
import css from "../ImageModal/ImageModal.module.css";

ReactModal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, 0.7)";
ReactModal.setAppElement("#root");

const customStyles = {
  content: {
    top: "54%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "1200px",
    height: "700px",
    overflow: "hidden",
    padding: "0",
    border: "none",
  },
};

const ImageModal = ({ isOpen, onClose, image }) => {
  return (
    <div>
      <ReactModal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
        <img
          src={image.urls.regular}
          alt={image.description}
          className={css.image}
        />
      </ReactModal>
    </div>
  );
};

export default ImageModal;
