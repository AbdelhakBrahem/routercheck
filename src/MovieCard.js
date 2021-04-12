import Card from 'react-bootstrap/Card'
import StarRatingComponent from 'react-star-rating-component';
import {Link} from 'react-router-dom'


const MovieCard = ({ movie }) => {
    return (
        <div className="cards">
            <Link to={`/${movie.id}`}>

            <Card style={{ width: '18rem',margin: "1.65%", color: "black", fontSize: "18"}}>
                <Card.Img variant="top" src={movie.poster} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.description}</Card.Text>
                    <StarRatingComponent
                        name="rate"
                        starCount={5}
                        value={movie.rate}
                    />
                    
                </Card.Body>
            </Card>
            </Link>
        </div>
    );
}

export default MovieCard;