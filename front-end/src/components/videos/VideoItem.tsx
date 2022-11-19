import React from 'react';
import { Video } from './Video';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';

import './VideoItem.css';
import { deleteVideo } from './VideoService';

interface Props {
  video: Video;
  loadVideo: () => void;
}

function VideoItem({ video, loadVideo }: Props) {
  const navigate = useNavigate();
  const handleDelete = async (id: string) => {
    await deleteVideo(id);
    loadVideo();
  };
  return (
    <div className="col-md-4">
      <div className="card video-card">
        <div className="card-body" style={{ minHeight: '370px' }}>
          <div className="d-flex justify-content-between">
            <h1 onClick={() => navigate('/update-video/' + video._id)}>
              <u>{video.title}</u>
            </h1>
            <span
              className="text-danger border border-danger border-1 p-1 rounded-pill border-opacity-50"
              style={{ height: '50%' }}
              onClick={() => video._id && handleDelete(video._id)}
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
