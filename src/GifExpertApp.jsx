import { useState } from "react";
import {AddCategory, GifGrid} from "./components";


const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    //console.log(newCategory)
    setCategories([...categories, newCategory]);
  };

  return (
    <div className="container">
      <h1 id="title" className="mt-5">GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
};

export default GifExpertApp;
