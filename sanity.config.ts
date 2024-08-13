import { defineConfig } from "sanity";
import { dataset, projectId } from "./env";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "My Place",
  basePath: "/studio",
  projectId: projectId,
  dataset: dataset,
  plugins: [],
  schema: {
    types: schemaTypes,
  },
});
