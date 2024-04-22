import React from 'react';

const TopArtists = () => {
  // Replace with your actual data
  const artists = [
    { name: 'Artist 1', image: 'https://i.pinimg.com/736x/d8/3a/db/d83adb50e4e19664c6140c8ff337ccc5.jpg' },
    { name: 'Artist 2', image: 'https://i.pinimg.com/736x/d8/3a/db/d83adb50e4e19664c6140c8ff337ccc5.jpg' },
    { name: 'Artist 3', image: 'https://i.pinimg.com/736x/d8/3a/db/d83adb50e4e19664c6140c8ff337ccc5.jpg' },
  ];

  return (
    <div>
      <h2 className="text-center" style={{ fontFamily: 'Arial, sans-serif', color: '#333', fontSize: '3em', fontWeight: 'bold', textShadow: '1px 1px 2px #aaa' }}>Top Artists</h2>
      <br />
      <br />
      <div className="card-body" style={{ display: 'flex', justifyContent: 'space-around' }}>
        {artists.map((artist, index) => (
          <div key={index} className="card" style={{ width: '18rem' }}>
            <img src={artist.image} className="card-img-top" alt={artist.name} />
            <div className="card-body text-center">
              <h5 className="card-title">{artist.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopArtists;