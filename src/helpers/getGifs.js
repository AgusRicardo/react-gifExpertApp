
    // El useEffect se utiliza para ejecutar la llamada a la API solamente cuando se renderiza por primera vez 
    // Hacemos la consulta async a la api
    export const getGifs = async(category) => {
        // encodeURI() sirve para que JS reemplace los espacios 
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=k1U6uTI58MIcsXUqlFaktfMO0V6FpsyL`
        const resp = await fetch(url);
        const {data} = await resp.json();
        // Mapeamos el contenido de data que previamente lo convertimos a un json para que nos retorne los datos que necesitamos
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        // Acá estamos mandando como propiedad gifs al nuevo estado
        return gifs;

    }