import express from 'express';
import newApplication from '../controller/newApplication';
import setSchedule from '../controller/setSchedule';
import uploadDetails from '../controller/uploadDetails';

const router = express.Router();

router.post('/newApplication', newApplication);
router.post('/setSchedule', setSchedule);
router.post('/uploadDetails', uploadDetails);

export default router;
