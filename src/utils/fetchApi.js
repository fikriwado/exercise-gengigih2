const API_KEY = process.env.REACT_APP_GIPHY_KEY;

export const getTrendingGifs = async(limit) => {
    const response = await fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}`,
    ).then((response) => response.json())
        .then((json) => json.data);

    return response;
};

export const getGifs = async(query, limit) => {
    const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=${limit}`,
    ).then((response) => response.json())
        .then((json) => json.data);

    return response;
};
