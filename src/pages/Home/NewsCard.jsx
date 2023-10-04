import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {

    const { title, image_url, thumbnail_url, details, _id} = news;

    return (
        <div className="card bg-base-100 shadow-xl mb-16">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                <div>
                    {
                        details.length > 200 ? 
                        <>
                            <p>{details.slice(0, 200)}</p>
                            <Link to={`/news/${_id}`}>Read more</Link>
                        </> :
                        details
                    }
                </div>
            </div>
        </div>
    );
};

export default NewsCard;