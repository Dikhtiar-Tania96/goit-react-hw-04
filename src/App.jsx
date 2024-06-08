import { useEffect, useState } from "react";
import { searchImagesApi } from "./api";
import ImageGallery from "./components/ImageGallery/ImageGallery";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const searchImages = async () => {
      const data = await searchImagesApi();
      console.log("data", data);
      setImages(data);
    };
    searchImages();
  }, []);

// const handleImageClick=(image)=>{
// }

  return <> 
  <ImageGallery images={images} 
  // onImageClick={handleImageClick} 
  />

  </>;
}

export default App;
