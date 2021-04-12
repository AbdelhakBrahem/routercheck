import { Modal, Button,Form } from 'react-bootstrap'
import {useState} from 'react'
const AddMovie = ({show,handleClose,addMovie}) => {
    const [newMovie, setNewMovie] = useState({
        title: "",
        description: "",
        poster: "",
        rate:""
    })
    const handleChange =(e) =>{
        setNewMovie({...newMovie,[e.target.name]:e.target.value})
    }
    return (
        <div>
            <Modal show={show}>
                <Modal.Header closeButton onClick={handleClose}>
                    <Modal.Title>Movie title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Movie title</Form.Label>
                            <Form.Control type="text" placeholder="Enter movie title" name='title' onChange={handleChange}/>
                            <Form.Label>Movie description</Form.Label>
                            <Form.Control type="text" placeholder="Enter movie description" name='description' onChange={handleChange}/>
                            <Form.Label>Movie poster</Form.Label>
                            <Form.Control type="text" placeholder="Enter movie poster" name='poster' onChange={handleChange}/>
                            <Form.Label>Movie rate</Form.Label>
                            <Form.Control type="number" placeholder="Enter movie rate" name='rate' onChange={handleChange}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={()=>{
                        handleClose() 
                        addMovie(newMovie)}} className="btn">Add Movie</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AddMovie;