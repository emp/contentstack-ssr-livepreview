import { LivePreviewQuery } from "contentstack";
import Contentstack from "contentstack";
import { headers } from "next/headers";

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
  const h = await headers();
  const referer = h.get("referer");
  console.log("referer: ", referer);
  // const url = new URL(referer ? referer : "");
  // const test = url.searchParams.get("test");
  // console.log("test: ", test);
  const stack = getStack();
  if (queryParams?.live_preview) stack.livePreviewQuery(queryParams);
  const query = stack.ContentType("post").Entry("blt9ca013deb6685bdb");
  return await query.toJSON().fetch();
}
