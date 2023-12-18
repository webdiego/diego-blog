import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";

export const sanityClient = createClient({
  dataset,
  projectId,
  useCdn,
  apiVersion,
});
