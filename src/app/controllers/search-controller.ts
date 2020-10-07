import { Request, Response } from 'express';

import http from '@/config/http-client';

class SearchController {
  public async search(req: Request, res: Response): Promise<Response> {
    try {
      const { data } = await http.get('/sites/MLU/search', {
        params: { q: req.query.search },
      });

      if (!data.results.length) {
        return res.status(204).json(data.results);
      }

      const result = {
        author: {
          name: 'Alan',
          lastname: 'Nascimento',
        },
        categories: data.filters[0].values[0].path_from_root.map(
          (item: any) => item.name
        ),
        items: data.results.slice(0, 4).map((item: any) => ({
          id: item.id,
          title: item.title,
          price: {
            id: item.id,
            currency: item.currency_id,
            amount: item.installments.amount,
            decimals: 'TO_IMPLEMENT',
          },
          picture: item.thumbnail,
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
          city: item.address.city_name,
        })),
      };

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

export default new SearchController();
