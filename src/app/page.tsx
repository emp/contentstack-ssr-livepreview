import { someCallToGetData } from "@/utils";
export const dynamic = "force-static";

export default async function Page() {
  const entryData = await someCallToGetData();

  return (
    <section className="text-teal-300">
      <h1 className="text-3xl">Static: {" " + entryData?.title}</h1>
      <pre>{JSON.stringify(entryData, null, 2)}</pre>
    </section>
  );
}
