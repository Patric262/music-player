import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import TrackCard from "../components/TrackCard";
import { searchTracks } from "../api/api";

const HomePage = () => {
  const [tracks, setTracks] = useState([]); // Store fetched tracks
  const [loading, setLoading] = useState(false); // Show loading state
  const [error, setError] = useState(""); // Store errors

  // Handle search query
  const handleSearch = async (query) => {
    setLoading(true); // Start loading
    setError(""); // Reset error
    try {
      const results = await searchTracks(query); // Fetch tracks
      setTracks(results); // Store results
    } catch (err) {
      setError("Failed to load tracks. Please try again.");
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="p-4">
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {tracks.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
