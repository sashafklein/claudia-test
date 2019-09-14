import ApiBuilder from "claudia-api-builder";
import pr from "./pr";

const api = new ApiBuilder();

api.post("/pr", pr);
api.get("/hello", () => "Hello");

export default api;
