import React from 'react'
import {useState,useEffect} from 'react'

function Description(props) {
    // const newArray=movies.find((el)=>)
    const [movie, setMovie] = useState(null)
    useEffect(() => { setMovie (props.movies.filter(el => el.id === props.match.params.id)[0] )})
    return (
        <div style={{backgroundColor:'#121212'}}>
       {movie && (<div style={{color:"white", textAlign:"center"}}>
            {movie.description}
            <iframe width="560" height="315" src={movie.url} title={movie.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>)}
        </div>
    )
}

export default Description
