import Gif from "../../components/Gif";
import Searchbar from "../../components/Searchbar";
import data from "../../data.js";

const Home = () => {
    return (
        <div>
            <Searchbar />
            <Gif url={data.url} title={data.title} />
        </div>
    );
}

export default Home;
