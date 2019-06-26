import express from "express";
import path from "path";

import routes from "./routes";

const app = express();
const port = 8000;

app.use("/static", express.static(path.join(__dirname, "public")));

app.use(routes);

app.listen(port, err => {
  if (err) {
    Logger.error(err);
    process.exit(1);
    return;
  }
  console.log(`App initialized on port ${port}`);
});
