import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

// Always resolve from project root safely
const filePath = path.join(process.cwd(), "src", "data", "home.json");

/**
 * GET /api/home
 * Read homepage CMS data
 */
router.get("/", (req, res) => {
  try {
    const rawData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(rawData);
    res.json(data);
  } catch (error) {
    res.status(500).json({
      error: "Failed to read home page data"
    });
  }
});

/**
 * PUT /api/home
 * Update homepage CMS data
 */
router.put("/", (req, res) => {
  const body = req.body;

  // 🔒 Minimal validation to protect CMS structure
  if (
    !body ||
    !body.hero ||
    !body.hero.title ||
    !body.hero.subtitle ||
    !Array.isArray(body.stories) ||
    !Array.isArray(body.services) ||
    !body.cta ||
    !body.footer
  ) {
    return res.status(400).json({
      error: "Invalid home page structure"
    });
  }

  try {
    fs.writeFileSync(filePath, JSON.stringify(body, null, 2), "utf-8");
    res.json({ message: "Home content updated successfully" });
  } catch (error) {
    res.status(500).json({
      error: "Failed to save home page data"
    });
  }
});

export default router;
