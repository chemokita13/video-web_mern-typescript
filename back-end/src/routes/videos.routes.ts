import { Router } from 'express';
const router = Router();

import * as videoCtrl from './videos.controller';

router.get('/videos', videoCtrl.getVideos); // get  ALL videos

router.post('/videos/get/:id', videoCtrl.getVideo); // get ONE video

router.delete('/videos/delete/:id', videoCtrl.deleteVideo); // delete a video

router.put('/videos/update/:id', videoCtrl.updateVideo); // update a video

router.post('/videos/new', videoCtrl.createVideo); // create a video (upload)

export default router;
