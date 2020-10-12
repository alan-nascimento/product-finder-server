import { Request, Response } from 'express';

import { Controller } from '@/app/protocols';
import { getProductDetail } from '@/app/repositories';

class ProductController implements Controller {
  public async handle(req: Request, res: Response): Promise<Response> {
    try {
      const data = await getProductDetail(req.params.id);

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default new ProductController();
