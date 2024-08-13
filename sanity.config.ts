import { defineConfig } from "sanity";
import { dataset, projectId } from "./env";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "Rusås Design",
  basePath: "/studio",
  projectId: projectId,
  dataset: dataset,
  plugins: [],
  schema: {
    types: schemaTypes,
  },
});
