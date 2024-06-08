import { useEffect, useState } from "react";
import { searchImagesApi } from "./api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const searchImages = async () => {
      try {
      setIsLoading(true)
      const data = await searchImagesApi();
      setImages(data)
      setIsLoading(false)
      } catch (error) {
        setError(true)
      }finally {
        setIsLoading(false)
      }
      
    };
    searchImages();
  }, []);


  return (<>
  {isLoading && <Loader/>}
  {error && <p>Oops....ERROR</p>}
   {images.length>0 && <ImageGallery images={images}/>} 
  {/* <ImageGallery images={images} 
  // onImageClick={handleImageClick} 
  /> */}

  </>)
}

export default App;
