import { someCallToGetData } from "@/utils";
import LivePreviewInitComponent from "@/ui/LivePreviewInitComponent";
export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Page({ searchParams }: { searchParams: any }) {
  const entryData = await someCallToGetData(await searchParams);

  return (
    <section className="text-red-300">
      <h1 className="text-3xl">Dynamic: {" " + entryData?.title}</h1>
      <pre>{JSON.stringify(entryData, null, 2)}</pre>
      <LivePreviewInitComponent />
    </section>
  );
}
