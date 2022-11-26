
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=J8YWmxcrMfO5uFfSFj92iPRqrWLN4zQJ&q=${category}&limit=5`;
    const resp = await fetch(url);
    const {data} = await resp.json();
  
    const gifts = data.map ( img => ({        
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url        
    }))
    //console.log(gifts);
    return gifts;
  };