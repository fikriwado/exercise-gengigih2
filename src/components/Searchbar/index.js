import { setQuery } from "../../redux/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { getGifs } from "../../utils/fetchApi";

const Searchbar = ({ handleResultGifs }) => {
    const { query } = useSelector((state) => state.search);
    const dispatch = useDispatch();

    const handleSubmit = async () => {
        const images = await getGifs(query, 12);
        handleResultGifs(images);
    };

    return (
        <div className="search-bar">
            <input type="text" onChange={e => dispatch(setQuery(e.target.value))} />
            <button className="btn-primary" onClick={handleSubmit}>Search</button>
        </div> 
    );
}

export default Searchbar;