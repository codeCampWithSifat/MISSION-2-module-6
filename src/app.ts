import express, { Application} from "express";
import cors from "cors";
import router from "./app/modules/user/user.route";

const app: Application = express();

// use all the middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", router)

export default app;
