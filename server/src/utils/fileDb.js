import fs from "fs";
import path from "path";

const DATA_PATH = path.resolve("src/data/home.json");

export function readHomeData() {
  try {
    const raw = fs.readFileSync(DATA_PATH, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    throw new Error("Failed to read home.json");
  }
}

export function writeHomeData(data) {
  try {
    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), "utf-8");
  } catch (err) {
    throw new Error("Failed to write home.json");
  }
}
