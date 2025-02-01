import express, { Express, Request, Response } from "express";
import { hardDataBE } from "./2hardData";
// dotenv.config();

const app: Express = express();

// const options: cors.CorsOptions = {
//   origin: ["http://localhost:5173"],
// };
// app.use(cors(options));

const port = process.env.PORT || 3000;

app.get("/dataResults", (req: Request, res: Response) => {
  setTimeout(() => {
    res.json(hardDataBE);
  }, 3000);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
