import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { schemaTypes } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "placeholder";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export default defineConfig({
  name: "imp",
  title: "پارمان پادشاهی ایرانیان",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [structureTool({ structure })],
  schema: {
    types: schemaTypes,
  },
});
