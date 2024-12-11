import express from "express";
import { iceCreamRoutes } from "./src/router/iceCreamRoutes.js";
import { connectDb } from "./src/config/mongo.js";
import { auth } from "./src/middleware/authMiddleware.js";
import { authRoutes } from "./src/router/authRoutes.js";
import helmet from "helmet";

process.loadEnvFile();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use(helmet());

app.use("/api/auth", authRoutes);
app.use(auth);
app.use("/api/icecreams", iceCreamRoutes);

app.listen(PORT, () => {
  console.log("Server up on port http://localhost:" + PORT);
  connectDb();
});
