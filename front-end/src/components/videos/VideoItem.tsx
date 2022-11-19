import React from 'react';
import { Video } from './Video';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';

import './VideoItem.css'

interface Props {
  video: Video;
}

function VideoItem({ video }: Props) {
  const navigate = useNavigate();
  return (
    <div className="col-md-4">
      <div className="card video-card" onClick={()=>navigate('/update-video/'+video.id)}>
        <div className="card-body" style={{minHeight:'330px'}}>
          <div className="d-flex justify-content-between">
            <h1>{video.title}</h1>
            <span className="text-danger">x</span>
          </div>
          {video.description && <p>{video.description}</p>}
          <div className="embed-responsive embed-responsive-16by9">
            <ReactPlayer className={'embed-responsive-item'} width='auto' height='auto' url={video.url} /> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
