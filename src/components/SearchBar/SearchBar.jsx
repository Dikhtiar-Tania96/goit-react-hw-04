import { useState } from "react";
import {toast} from 'react-hot-toast'

const SearchBar = ({onSubmit}) => {
  const [input, setInput] = useState("");
  
  
const handleChange =(e)=>{
    setInput(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(input.trim() === '') {
      toast.error("Будь ласка,введіть потрібну назву 😉");
      return
    }
    onSubmit(input);
    setInput('')
  };

  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"            
            value={input}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </>
  );
};

export default SearchBar;
