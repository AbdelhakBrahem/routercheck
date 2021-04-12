import { Form } from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';

const Filter = ({setKeyRate,search,keyRate}) => {
   const onStarClick=(nextValue)=> {
        setKeyRate(nextValue);
      }

    return (
        <div className="search">
            <Form style={{width:"30%", margin:"10px",marginLeft:"100px"}}>
                <Form.Control type="text" placeholder="Movie Search" name='word' onChange={(e)=>{search(e.target.value)}}/>
            </Form>
            <StarRatingComponent
                name="keyRate"
                starCount={5}
                value={keyRate}
                onStarClick={onStarClick} 
            />
        </div>
    );
}

export default Filter;