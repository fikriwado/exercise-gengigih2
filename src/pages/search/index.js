import Gif from "../../components/Gif";
import { Component } from "react";

class Search extends Component {
    state = {
        gifs: [],
        query: ''
    };
    
    getGifs = async () => {
        const gifs = await fetch(
            'https://api.giphy.com/v1/gifs/search?api_key=' + process.env.REACT_APP_GIPHY_KEY + '&q=' + this.state.query + '&limit=12',
        ).then((response) => response.json())
        .then(json => json.data)

        this.setState({gifs});
    };

    handleInput = e => this.setState({ query: e.target.value });

    render() {
        const { gifs } = this.state;
        console.info(gifs);

        return (
            <>
                <input type="text" onChange={this.handleInput} />
                <button onClick={this.getGifs}>Search</button>

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
        )
    }
}

export default Search;