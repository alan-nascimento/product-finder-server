import axios from 'axios';
import { Request, Response } from 'express';

import http from '@/config/http-client';

class ProductController {
  public async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const [item, description]: any = await axios.all([
        http.get(`/items/${id}`),
        http.get(`/items/${id}/description`),
      ]);

      const result = {
        author: {
          name: 'Alan',
          lastname: 'Nascimento',
        },
        item: {
          id: item.data.id,
          title: item.data.title,
          price: {
            amount: item.data.price,
            currency: item.data.currency_id,
            decimals: 0,
          },
          picture: item.data.pictures[0].url,
          condition: item.data.condition,
          sold_quantity: item.data.sold_quantity,
          free_shipping: item.data.shipping.free_shipping,
          description: description.data.plain_text,
        },
      };

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

export default new ProductController();
