import { useEffect, useState } from 'react';

import './Albums.css';

const Albums = () => {
  const [loading, setLoading] = useState(false);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((data) => {
        setAlbums(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading === true ? <div class='loading'>Loading&#8230;</div> : ''}
      <h2>Álbuns</h2>
      <div class='container'>
        {albums.map((album) => {
          return (
            <div class='card'>
              <div class='card-text'>
                <p class='card-meal-type'>{album.id}</p>
                <h2 class='card-title'>{album.title}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Albums;
