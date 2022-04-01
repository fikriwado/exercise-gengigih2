import { useState } from "react";

const Searchbar = ({ handleResultGifs }) => {
    const [query, setQuery] = useState('');

    const getGifs = async () => {
        const gifs = await fetch(
            'https://api.giphy.com/v1/gifs/search?api_key=' + process.env.REACT_APP_GIPHY_KEY + '&q=' + query + '&limit=12',
        ).then((response) => response.json())
        .then(json => json.data)
        
        handleResultGifs(gifs);
    };

    return (
        <>
            <input type="text" onChange={e => setQuery(e.target.value)} />
            <button onClick={getGifs}>Search</button>
        </> 
    );
}

export default Searchbar;