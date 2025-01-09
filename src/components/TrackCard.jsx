import React from "react";
import MusicPlayer from "../components/MusicPlayer";
const TrackCard = ({ track }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img src={track.album.cover_medium} alt={track.title} className="w-full rounded" />
      <h3 className="text-lg font-bold mt-2">{track.title}</h3>
      <p className="text-gray-500">{track.artist.name}</p>
      <audio controls src={track.preview} className="w-full mt-2" />
    </div>
  );
};
const HomePage = () => {
  // ... existing code ...

  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {tracks.map((track) => (
        <MusicPlayer key={track.id} track={track} />
      ))}
    </div>
  );
};

export default TrackCard;
