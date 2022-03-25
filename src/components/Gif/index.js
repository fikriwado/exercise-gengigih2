const Gif = ({title, url}) => {
    return (
        <div>
            <img src={url} alt={title} />
        </div>
    );
}

export default Gif;
