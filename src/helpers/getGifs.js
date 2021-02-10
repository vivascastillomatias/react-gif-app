import PropTypes from 'prop-types';

const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=1N6n49hyUI351ziTsLU21cAdDwfXnaNU`
    const resp = await fetch(url)
    const {data} = await resp.json();

    const gifs = data.map( image => {
        return {
            id: image.id,
            title: image.title,
            url: image.images.downsized_still.url
        }
    })
    return(gifs)
}

getGifs.propTypes = {
    category: PropTypes.string.isRequired
}

export default getGifs