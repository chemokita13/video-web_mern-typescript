import axios from 'axios';

export const getVideos = async () =>
  await axios.get('http://localhost:8000/videos');
