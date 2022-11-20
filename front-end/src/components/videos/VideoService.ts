import axios from 'axios';
import { Video } from './Video';
//import dotenv from 'dotenv';
//dotenv.config();

const API = 'http://64.227.32.220:8000' /*my personal API if u want to use it*/|| process.env.API_URI || 'http://localhost:8000';

export const getVideos = async () => await axios.get(API + '/videos');

export const sendVideo = async (video: Video) => {
  try {
    return await axios.post(API + '/videos/new', video);
  } catch (error) {
    return { status: 301 };
  }
};

export const getVideo = async (id: string) => {
  try {
    return await axios.post(API + '/videos/get/' + id);
  } catch (error) {
    return { status: 301 };
  }
};

export const updateVideo = async (id: string, video: Video) => {
  try {
    return await axios.put(API + '/videos/update/' + id, video);
  } catch (error) {
    return { status: 301 };
  }
};

export const deleteVideo = async (id: string) => {
  try {
    return await axios.delete(API + '/videos/delete/' + id);
  } catch (error) {
    return { status: 301 };
  }
};
