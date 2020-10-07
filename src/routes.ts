import { Router } from 'express';

import { SearchController, ProductController } from '@/app/controllers';

const router = Router();

router.get('/items', SearchController.handle);
router.get('/items/:id', ProductController.handle);

export default router;
