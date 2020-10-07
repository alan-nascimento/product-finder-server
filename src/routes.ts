import { Router } from 'express';

import { SearchProductsController, ProductController } from '@/app/controllers';

const router = Router();

router.get('/items', SearchProductsController.handle);
router.get('/items/:id', ProductController.handle);

export default router;
