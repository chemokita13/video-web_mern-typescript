import { Router } from 'express';
const router = Router();

import * as videoCtrl from './videos.controller';

router.get('/videos', videoCtrl.getVideos); // get  ALL videos

router.post('/videos/:id', videoCtrl.getVideo); // get ONE video

router.post('/videos/new', videoCtrl.createVideo); // create a video (upload)

router.delete('videos/delete', videoCtrl.deleteVideo); // delete a video

router.put('videos/update', videoCtrl.updateVideo); // update a video

export default router;
