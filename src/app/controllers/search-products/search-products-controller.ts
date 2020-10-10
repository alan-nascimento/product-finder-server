import { Request, Response } from 'express';

import { search } from '@/services';
import { Controller } from '@/app/protocols';
import { ProductList } from '@/app/models';
import { makeProductList } from '@/app/factories';

class SearchProductsController implements Controller {
  public async handle(
    req: Request,
    res: Response
  ): Promise<Response<ProductList>> {
    try {
      const data = await search(<string>req.query.search);

      if (!data.paging.total) {
        return res.json({});
      }

      return res.status(200).json(makeProductList(data));
    } catch (error) {
      return res.status(422).send(error.message);
    }
  }
}

export default new SearchProductsController();
