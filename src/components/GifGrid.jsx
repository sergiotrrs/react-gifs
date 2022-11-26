import { useFetchGifs } from "../hooks/useFetchGifs";
import {GifItem} from "./GifItem";

function GifGrid({ category }) {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Is Loading</h2>}
      <h2>Cargando...</h2>
      {images.map((image) => (
        <GifItem key={image.id} {...image} />
      ))}
    </>
  );
}

export {GifGrid};