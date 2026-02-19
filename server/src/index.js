import express from "express";
import cors from "cors";
import homeRoutes from "./routes/home.routes.js";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use("/api/home", homeRoutes);

app.get("/", (req, res) => {
  res.send("Spotcast CMS API is running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
