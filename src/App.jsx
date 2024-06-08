import { useEffect } from "react";
import { searchImageApi } from "./api";

function App() {
  useEffect(() => {
    const getArticles = async () => {
      const data = await searchImageApi()
      console.log("data", data)
    }
    getArticles()
  }, [])
  return <></>
}

export default App
