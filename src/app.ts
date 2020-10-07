import 'dotenv/config';

import cors from 'cors';
import express from 'express';

import routes from './routes';

class App {
  public server = express();

  constructor() {
    this.middlewares();
    this.router();
  }

  private middlewares(): void {
    this.server.use(cors());
    this.server.use(express.json());
  }

  private router(): void {
    this.server.use('/api', routes);
  }
}

export default new App().server;
