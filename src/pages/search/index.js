import { useState } from "react";
import Gif from "../../components/Gif";

const Search = () => {
    const [gifs, setGifs] = useState([]);
    const [query, setQuery] = useState('');

    const getGifs = async () => {
        const gifs = await fetch(
            'https://api.giphy.com/v1/gifs/search?api_key=' + process.env.REACT_APP_GIPHY_KEY + '&q=' + query + '&limit=12',
        ).then((response) => response.json())
        .then(json => json.data)

        setGifs(gifs);
    };

    return (
        <>
            <input type="text" onChange={e => setQuery(e.target.value)} />
            <button onClick={getGifs}>Search</button>

            <div className="list-gif">
                {gifs.map((item) => {
                    return (
                        <div className="list-item" key={item.id}>
                            <Gif url={item.images.fixed_width.url} title={item.title} />
                            <p>{item.title}</p>
                        </div>
                    );
                })}
            </div>
        </> 
    );
}

export default Search;