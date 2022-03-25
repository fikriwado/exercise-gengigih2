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
                        <Gif key={item.id} url={item.url} title={item.title} />
                    );
                })}
            </div>
        </div>
    );
}

export default Home;
