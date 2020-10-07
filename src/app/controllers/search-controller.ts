import { Request, Response } from 'express';

import http from '@/config/http-client';
import { ProductList } from '@/app/models';
import { makeProductList } from '@/app/factories';

class SearchController {
  public async search(
    req: Request,
    res: Response
  ): Promise<Response<ProductList>> {
    try {
      const { data } = await http.get('/sites/MLU/search', {
        params: {
          q: req.query.search,
          limit: 4,
        },
      });

      if (!data.paging.total) {
        return res.status(200).json({});
      }

      return res.status(200).json(makeProductList(data));
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

export default new SearchController();
