import { type SchemaTypeDefinition } from "sanity";
import postSchema from "./schemas/post";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postSchema],
};
