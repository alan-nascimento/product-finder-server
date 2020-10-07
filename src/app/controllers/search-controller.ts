import { Request, Response } from 'express';

import http from '@/config/http-client';

class SearchController {
  public async search(req: Request, res: Response): Promise<Response> {
    try {
      const response = await http.get('/sites/MLA/search', {
        params: { q: req.query.search },
      });

      return res.status(200).json(response.data);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

export default new SearchController();
