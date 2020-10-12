import { Request, Response } from 'express';

import { Controller } from '@/app/protocols';
import { ProductList } from '@/app/models';
import { getProducts } from '@/app/repositories';

class SearchProductsController implements Controller {
  public async handle(
    req: Request,
    res: Response
  ): Promise<Response<ProductList>> {
    try {
      const data = await getProducts(<string>req.query.search);

      if (!data.items.length) {
        return res.json({});
      }

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default new SearchProductsController();
