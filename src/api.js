import ApiBuilder from "claudia-api-builder";
import { close } from "./pr";

const api = new ApiBuilder();

// PRs
api.post("/pr/close", close);

// Test
api.get("/hello", () => "Hello");

module.exports = api;
