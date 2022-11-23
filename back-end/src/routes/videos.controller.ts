import { RequestHandler, Request, Response, NextFunction } from 'express';
import video from './video';

export const getVideos: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        res.json(await video.find());
    } catch (error) {
        next(error);
    }
};

export const getVideo: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const foundVideo = await video.findById(req.params.id);
        if (!foundVideo) return res.status(204).json();
        return res.json(foundVideo);
    } catch (error) {
        next(error);
    }
};

export const deleteVideo: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const videoToDelete = await video.findByIdAndDelete(req.params.id);
        if (!videoToDelete) return res.status(204).json();
        return res.json(videoToDelete);
    } catch (error) {
        next(error);
    }
};

export const updateVideo: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const videoToUpdate = await video.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
        if (!videoToUpdate) return res.status(204).json();
        return res.json(videoToUpdate);
    } catch (error) {
        next(error);
    }
};

export const createVideo: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const newVideo = new video(req.body);
        const savedVideo = await newVideo.save();
        res.json(savedVideo);
    } catch (error) {
        res.status(301).json(error);
    }
};
