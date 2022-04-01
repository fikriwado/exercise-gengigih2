import { useState } from 'react';
import Gif from "../../components/Gif";
import Searchbar from "../../components/Searchbar";

const Home = () => {
    const [gifs, setGifs] = useState([]);

    const handleResultGifs = gifs => {
        setGifs(gifs);
    };

    return (
        <div>
            <Searchbar handleResultGifs={handleResultGifs} />
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
        </div>
    );
}

export default Home;
