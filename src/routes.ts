import { Router } from 'express';

import { SearchController } from '@/app/controllers';

const router = Router();

router.get('/items', SearchController.search);

export default router;
