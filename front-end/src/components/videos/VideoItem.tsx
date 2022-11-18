import React from 'react';
import { Video } from './Video';

interface Props {
  video: Video;
}

function VideoItem({ video }: Props) {
  return (
    <div>
      <h1>{video.title}</h1>
    </div>
  );
}

export default VideoItem;
