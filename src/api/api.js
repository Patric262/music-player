import axios from "axios";

// Base URL for Deezer API
const BASE_URL = "https://api.deezer.com";

// Fetch tracks by search query
export const searchTracks = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search?q=${query}`);
    return response.data.data; // Returns an array of tracks
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Forward the error for handling in the component
  }
};

// Fetch track details by ID
export const getTrackDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/track/${id}`);
    return response.data; // Returns track details
  } catch (error) {
    console.error("Error fetching track details:", error);
    throw error;
  }
};
