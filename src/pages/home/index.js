import Gif from "../../components/Gif";
import Searchbar from "../../components/Searchbar";
import data from "../../data.js";

const Home = () => {
    return (
        <div>
            <Searchbar />
            <div className="list-gif">
                {data.filter((item) => item.rating !== "g").map((item) => {
                    return (
                        <div className="list-item" key={item.id}>
                            <Gif url={item.url} title={item.title} />
                            <p>{item.title}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;
