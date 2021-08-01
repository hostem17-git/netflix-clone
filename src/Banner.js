import axios from './axios'
import React, { useState, useEffect } from 'react'
import requests from './requests'
import "./banner.css"
const baseUrl = "https://image.tmdb.org/t/p/original"



function truncateString(str, num) {
    if (str?.length <= num) {
        return str
    }
    return str?.slice(0, num) + '...'
}

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
            return request;
        }
        fetchData();
    }, [])
    console.log(movie)

    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url(${baseUrl}${movie?.backdrop_path})`,
            backgroundPosition: "center center"
        }}>
            <div className="bannerContent">
                <h1 className="bannerTitle">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="bannerButtons">
                    <button className="bannerButton">Play</button>
                    <button className="bannerButton">My List</button>
                </div>
                <p className="bannerDescription">
                    {truncateString(movie?.overview, 200)}
                </p>
            </div>
            <div className="bannerBottomFade"></div>
        </header>
    )
}

export default Banner
