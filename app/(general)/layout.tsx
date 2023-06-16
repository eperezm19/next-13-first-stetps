import { Navbar } from "@/components";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <h1 className="text-lg">Hello Root Layout Main</h1>
        {children}
      </main>
    </>
  );
}
