import React, { useState, useEffect } from 'react';
import axios from "./axios";
import "./Row.css"

const baseUrl = "https://image.tmdb.org/t/p/original"

function Row(props) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(props.fetchURL);
            setMovies(request.data.results);

            return request;
        }
        fetchData();
    }, [props.fetchURL]) // ************************ added  movies dependency


    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="rowPosters">
                {movies.map(movie => {
                    return <img key={movie.id} className={`rowPoster ${props.isLargeRow && "rowPosterLarge"}`} src={`${baseUrl}${props.isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.original_title}></img>
                })
                }
            </div>
        </div>
    );
}

export default Row;