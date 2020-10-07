import axios from 'axios';

class SearchController {
  public async search(req: any, res: any): Promise<any> {
    try {
      const { data } = await axios.get(
        `https://api.mercadolibre.com/sites/MLA/search?q=anyquery`
      );

      return res.json(data);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

export default new SearchController();
