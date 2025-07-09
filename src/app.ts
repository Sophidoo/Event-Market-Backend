// import { Application } from "express";
import express from "express";
import { IRoute } from "./interface/route.interface";
import errorMiddleware from "./middleware/error.middleware";
import cors from "cors"

export default class App {
  public app: express.Application;
  public PORT: string | number;

  constructor(routes: IRoute[]) {
    this.app = express();
    this.PORT = 5000;
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeErrorHandling();
  }

  public listen(): void {
    this.app.listen(this.PORT, () =>
      console.log(`Server running at ${this.PORT} ${process.env.JWT_EXPIRES_IN}`)
    );
  }

  

  private initializeRoutes(routes: IRoute[]) {
    
    routes.forEach((route) => {
      this.app.use(route.router);
    });
  }

  private initializeMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(cors<express.Request>());
    this.app.use(cors({
      origin: ['http://localhost:5173', 'https://event-market.vercel.app'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true // If you need to send cookies
    }));
    this.app.use(express.urlencoded({ extended: true }));
  }

  private async initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
}
