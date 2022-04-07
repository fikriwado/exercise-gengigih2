import Gif from '../Gif';

function Gifs({gifs}) {
    return (
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
    );
}

export default Gifs;
