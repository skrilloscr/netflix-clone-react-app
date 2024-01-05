import React, { useEffect, useState } from 'react'
import tmdAxiosIns from '../tmdbAxiosIns'
import './Row.css';

function Row({title,fetchUrl,isPoster}) {
  const [allMovies,setAllMovies] = useState()
  const base_url = "https://image.tmdb.org/t/p/original/";

  const fechData = async ()=>{
    const {data} = await tmdAxiosIns.get(fetchUrl)
    setAllMovies(data.results)
  }

console.log(allMovies);
  useEffect(()=>{
    fechData()
  },[])
  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className='movies-row'> {
        allMovies?.map(item=>(
          <img src={`${base_url}/${isPoster?item.poster_path : item.backdrop_path}`} alt="no Image" className={`movie ${isPoster && `movie-poster`}`} />
        ))
      }
      
      </div>
    </div>
  )
}

export default Row;