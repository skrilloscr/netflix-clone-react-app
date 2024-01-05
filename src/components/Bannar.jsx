import React, { useState, useEffect } from 'react';
import './Bannar.css';
import tmdAxiosIns from '../tmdbAxiosIns';

function Bannar({ fetchUrl }) {
  const [Movie, setMovie] = useState({});
  const base_url = "https://image.tmdb.org/t/p/original/";

  const fetchData = async () => {
    try {
      const { data } = await tmdAxiosIns.get(fetchUrl);
      const randomIndex = Math.floor(Math.random() * data.results.length);
      setMovie(data.results[randomIndex]);
    } catch (error) {
      console.error("Error fetching data:",error);
    }
  };

  useEffect(() =>{
    fetchData();
  }, []);

  return (
    <div style={{
      height: '600px',
      backgroundImage:`url(${base_url}/${Movie?.backdrop_path})`,
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'
    }}>
        <div className='banner-content'>
          <h1>{Movie?.name}</h1>
          <h2>{Movie?.overview?.slice(0, 200)}...</h2>
        </div>
      
    </div>
  );
}

export default Bannar;
