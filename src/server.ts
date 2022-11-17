import "express-async-errors";
import express from "express";
import errorMiddleware from "./middleware/errorMiddleware";
import appRoutes from "./routes";

const app = express();

app.use(express.json());
app.use(appRoutes);
app.use(errorMiddleware);

app.listen(3000, () => console.log("Server is running on PORT 3000"));
