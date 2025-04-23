import { LivePreviewQuery } from "contentstack";
import Contentstack from "contentstack";

export function getStack() {
  return Contentstack.Stack({
    api_key: process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY!,
    delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN!,
    environment: process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT!,
    live_preview: {
      preview_token: process.env.CONTENTSTACK_PREVIEW_TOKEN!,
      enable: true,
      host: "rest-preview.contentstack.com",
    },
  });
}

export async function someCallToGetData(queryParams?: LivePreviewQuery) {
  const stack = getStack();
  if (queryParams?.live_preview) stack.livePreviewQuery(queryParams);
  const query = stack
    .ContentType("post")
    .Entry("blt9ca013deb6685bdb")
    .includeReference(["modular_blocks.entry_reference.reference"]);
  return await query.toJSON().fetch();
}
