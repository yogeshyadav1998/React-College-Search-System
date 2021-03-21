import express from 'express';

import { getCollege } from '../controllers/college.js';

const router = express.Router();

router.get('/', getCollege);

export default router;