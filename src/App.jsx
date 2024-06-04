import { useEffect } from "react";
import { getImagesApi } from "./api/images-api";
import { useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoader, setLoader] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setLoader(true);
        const data = await getImagesApi(query, page);
        console.log(data);
        setImages((prevImages) => [...prevImages, ...data.results]);
        setShowBtn(data.total_pages && data.total_pages !== page);
      } catch (e) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };

    query && fetchData();
  }, [query, page]);

  const handleSubmit = (query) => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  const hendleLoadMore = () => {
    setPage(page + 1);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal = (img) => {
    setIsOpen(true);
    setImage(img);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} openModal={handleOpenModal} />
      )}
      {isLoader && <Loader />}
      {showBtn && <LoadMoreBtn onClick={hendleLoadMore} />}
      {modalIsOpen && (
        <ImageModal
          isOpen={modalIsOpen}
          onClose={handleCloseModal}
          image={image}
        />
      )}
    </>
  );
}

export default App;
