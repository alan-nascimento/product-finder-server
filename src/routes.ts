import { Router } from 'express';

import {
  ProductDetailController,
  SearchProductsController,
} from '@/app/controllers';

const router = Router();

router.get('/items', SearchProductsController.handle);
router.get('/items/:id', ProductDetailController.handle);

export default router;
