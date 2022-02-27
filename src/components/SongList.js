import React, { useState, useEffect } from 'react';
import {v4 as uuid} from 'uuid';
import NewSongForm from '../components/NewSong';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'almos home', id: 1 },
    { title: 'memory gospel', id: 2 },
    { title: 'this wild darkness', id: 3 },
  ]);
  const [age, setAge] = useState(20);

  const addSong = (title) => {
    setSongs([...songs, { title: title, id: uuid() }]);
  };

  useEffect(() => {
    console.log('use effect hook', songs);
  }, [songs]);

  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return ( <li key={song.id}>{ song.title }</li> );
        })}
      </ul>
        <NewSongForm addSong={addSong}/>
        <button onClick={() => setAge(age + 1)}>Add 1 to age. { age }</button>
    </div>
  );
}
 
export default SongList;