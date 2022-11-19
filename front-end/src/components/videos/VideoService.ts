import axios from 'axios';
import { Video } from './Video';

const API = 'http://localhost:8000';

export const getVideos = async () => await axios.get(API + '/videos');

export const sendVideo = async (video: Video) => {
  try {
    return await axios.post(API + '/videos/new', video);
  } catch (error) {
    return { status: 301 };
  }
};
