import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

function GifGrid({ category }) {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Is Loading...</h2>}
      <div className="row justify-content-center h-100">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
}

export { GifGrid };
