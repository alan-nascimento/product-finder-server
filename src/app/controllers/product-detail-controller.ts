import axios from 'axios';
import { Request, Response } from 'express';

import { http } from '@/config';
import { Controller } from '@/app/protocols';
import { makeProductDetail } from '@/app/factories';

class ProductController implements Controller {
  public async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const [item, description] = await axios.all([
        http.get(`/items/${id}`),
        http.get(`/items/${id}/description`),
      ]);

      const response = makeProductDetail({
        item: item.data,
        description: description.data,
      });

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

export default new ProductController();
