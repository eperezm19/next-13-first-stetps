import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h2>Hello World!!!</h2>
      <Link href={"/about"}>About Page</Link>
    </main>
  );
}
