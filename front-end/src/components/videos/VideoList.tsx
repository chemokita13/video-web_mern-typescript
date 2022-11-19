import React, { useEffect, useState } from 'react';

import { Video } from './Video';
import VideoItem from './VideoItem';
import { getVideos } from './VideoService';

function VideoList() {
  const [Videos, setVideos] = useState<Video[]>([]);

  const loadVideos = async () => {
    const res = await getVideos();
    setVideos(res.data);
  };

  useEffect(() => {
    loadVideos();
  }, []);

  return (
    <div className="container">
      {Videos.map((video) => (
        <VideoItem video={video} />
      ))}
    </div>
  );
}

export default VideoList;
