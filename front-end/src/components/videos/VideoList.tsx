import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { Video } from './Video';
import VideoItem from './VideoItem';
import { getVideos } from './VideoService';

type AxiosData = { status: number; data?: Video[] };

function VideoList() {
    const [Videos, setVideos] = useState<Video[]>([]);

    const loadVideos = async () => {
        const res: AxiosData = await getVideos();
        if (res.status !== 200) {
            toast.error('An error happend, please press F5 to reload.');
        } else {
            if (res.data) {
                setVideos(res.data);
            }
        }
    };

    useEffect(() => {
        loadVideos();
    }, []);
    return (
        <div className="row">
            {Videos[0] /*check if Videos[] is empty*/ ? (
                Videos.map((video) => (
                    <VideoItem
                        video={video}
                        key={video._id}
                        loadVideo={loadVideos}
                    />
                ))
            ) : (
                <h1 className="col-md-4">
                    Not found data, please reload page.
                </h1>
            )}
        </div>
    );
}

export default VideoList;
