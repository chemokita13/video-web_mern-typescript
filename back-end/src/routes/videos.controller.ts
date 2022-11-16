import { RequestHandler } from 'express';

export const getVideos: RequestHandler = (req, res) =>
  res.json('getting videos');

export const getVideo: RequestHandler = (req, res) =>
  res.json('getting videos');

export const deleteVideo: RequestHandler = (req, res) =>
  res.json('getting videos');

export const updateVideo: RequestHandler = (req, res) =>
  res.json('getting videos');

export const createVideo: RequestHandler = (req, res) =>
  res.json('getting videos');
