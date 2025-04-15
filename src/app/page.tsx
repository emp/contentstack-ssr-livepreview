import { someCallToGetData } from "@/utils";
export const dynamic = "force-static";

export default async function Page() {
  const entryData = await someCallToGetData();
  return <h1 className="text-cyan-400 text-3xl">Static: {" " + entryData?.title}</h1>;
}
