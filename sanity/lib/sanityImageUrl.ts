import ImageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./client";

const builder = ImageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}
