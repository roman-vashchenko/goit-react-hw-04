import ReactModal from "react-modal";

ReactModal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, 0.5)";
ReactModal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "1000px",
    height: "600px",
  },
};

const ImageModal = ({ isOpen, onClose, image }) => {
  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src={image} alt="" />
      </ReactModal>
    </div>
  );
};

export default ImageModal;
