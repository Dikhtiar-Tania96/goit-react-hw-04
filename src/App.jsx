import { useEffect, useState } from "react";
import { searchImagesApi } from "./api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import SearchBar from "./components/SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const searchImages = async (query) => {
      try {
        setIsLoading(true);
        setImages([]);
        const data = await searchImagesApi(query, page);
        setImages(data);
        console.log("data", data);
      } catch (error) {
        setError(true);
        toast.error("Зображення не знайдено😮");
      } finally {
        setIsLoading(false);
      }
    };
    query && searchImages();
  }, [query, page]);

  // const handleSearch = (newQuery) => {
  //   setQuery(newQuery);
  // }
const handleSubmit = async(searchQuery)=>{
setQuery(searchQuery)
}

  const handleLoadMore = async() => {
    setPage(page + 1);
  }


  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <Toaster />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery images={images} />}
      {/* <ImageGallery images={images} 
  // onImageClick={handleImageClick} 
  /> */}
      {images.length > 0 && <button onClick={handleLoadMore}>Load more...</button>}
    </>
  );
}

export default App;
