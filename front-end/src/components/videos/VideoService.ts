import axios from 'axios';
import { Video } from './Video';

const API = process.env.API_URI || 'http://127.0.0.1:8000';

export const getVideos = async () => {
    try {
        return await axios.get(API + '/videos');
    } catch (error) {
        return { status: 301, error };
    }
};

export const sendVideo = async (video: Video) => {
    try {
        return await axios.post(API + '/videos/new', video);
    } catch (error) {
        return { status: 301, error };
    }
};

export const getVideo = async (id: string) => {
    try {
        return await axios.post(API + '/videos/get/' + id);
    } catch (error) {
        return { status: 301, error };
    }
};

export const updateVideo = async (id: string, video: Video) => {
    try {
        return await axios.put(API + '/videos/update/' + id, video);
    } catch (error) {
        return { status: 301, error };
    }
};

export const deleteVideo = async (id: string) => {
    try {
        return await axios.delete(API + '/videos/delete/' + id);
    } catch (error) {
        return { status: 301, error };
    }
};
