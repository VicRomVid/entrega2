import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";
import { useState } from "react";


function App() {

    const [img , setImg ] = useState([]);

    const handleSubmit = async (term)=>{
      let resultado = await searchImages(term);
      setImg(resultado)
    }

    return (
      <div> 
        <SearchBar enSubmit={handleSubmit}/>
        <ImageList images={img}/>
      </div>
    )

}

export default App;

