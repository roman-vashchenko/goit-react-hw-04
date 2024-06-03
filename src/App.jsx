import { useEffect } from "react";
import { getImagesApi } from "./api/images-api";
import { useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  // const [page, setPage] = useState(1);
  // const [isLoader, setLoader] = useState(false);
  // const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const images = await getImagesApi(query);
        setImages((prevImages) => [...prevImages, ...images]);
      } catch (e) {
        console.log(e);
      }
    };

    query && fetchData();
  }, [query]);

  const handleSubmit = (query) => {
    setQuery(query);
    setImages([]);
  };
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {images.length && <ImageGallery images={images} />}
    </>
  );
}

export default App;
