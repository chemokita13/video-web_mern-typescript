import React from 'react';
import { Video } from './Video';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';

import './VideoItem.css';
import { deleteVideo } from './VideoService';
import { toast } from 'react-toastify';

interface Props {
    video: Video;
    loadVideo: () => void;
}

function VideoItem({ video, loadVideo }: Props) {
    const navigate = useNavigate();
    const handleDelete = async (id: string) => {
        const res = await deleteVideo(id);
        if (res.status != 200) {
            toast.error('An error happened.');
            alert(1);
        } else {
            toast.success('Video deleted!');
            alert(2);
        }
        loadVideo();
    };
    return (
        <div className="col-md-4">
            <div
                className="card video-card"
                style={{
                    minHeight: '370px',
                }}
            >
                <div className="card-body">
                    <div className="d-flex justify-content-between ">
                        <h1
                            id="video-title"
                            onClick={() =>
                                navigate('/update-video/' + video._id)
                            }
                        >
                            <u>{video.title}</u>
                        </h1>
                        <span
                            className="text-danger border border-danger border-1 p-1 rounded-pill border-opacity-50"
                            style={{ height: '50%' }}
                            onClick={() => {
                                video._id && handleDelete(video._id);
                            }}
                        >
                            x
                        </span>
                    </div>
                    {video.description && <p>{video.description}</p>}
                    <div className="embed-responsive embed-responsive-16by9">
                        <ReactPlayer
                            className={'embed-responsive-item'}
                            width="auto"
                            height="auto"
                            url={video.url}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoItem;
