import React, { useRef, useState } from "react";

const MusicPlayer = ({ track }) => {
  const audioRef = useRef(null); // Reference to the audio element
  const [isPlaying, setIsPlaying] = useState(false); // Playback state
  const [volume, setVolume] = useState(1); // Volume state (1 = 100%)

  // Play or pause the audio
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Handle volume change
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg bg-gray-100">
      <img
        src={track.album.cover_medium}
        alt={track.title}
        className="w-full rounded"
      />
      <h3 className="text-lg font-bold mt-2">{track.title}</h3>
      <p className="text-gray-500">{track.artist.name}</p>

      <div className="mt-4">
        <audio ref={audioRef} src={track.preview}></audio>

        <div className="flex items-center mt-2">
          <button
            onClick={togglePlayPause}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>

          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
