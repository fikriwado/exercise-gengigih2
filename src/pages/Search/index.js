import React, { useState } from 'react';
import Gifs from '../../components/Gifs';
import Searchbar from '../../components/Searchbar';

function Search() {
    const [gifs, setGifs] = useState([]);

    const handleResultGifs = (gifs) => {
        setGifs(gifs);
    };

    return (
        <div>
            <Searchbar handleResultGifs={handleResultGifs} />
            <Gifs gifs={gifs} />
        </div>
    );
}

export default Search;
