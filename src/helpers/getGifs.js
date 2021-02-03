const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=1N6n49hyUI351ziTsLU21cAdDwfXnaNU`
    const resp = await fetch(url)
    const {data} = await resp.json();

    const gifts = data.map( image => {
        return {
            id: image.id,
            title: image.title,
            url: image.images.downsized_still.url
        }
    })
    return(gifts)
}

export default getGifs