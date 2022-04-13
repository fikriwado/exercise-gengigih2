import React, { useEffect, useState } from 'react';
import Gifs from '../../components/Gifs';
import { getTrendingGifs } from '../../utils/fetchApi';

export default function Trending() {
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        getTrendingGifs(12).then((result) => setGifs(result));
    }, []);

    return <Gifs gifs={gifs} />;
}
