import Link from "next/link";

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Hide main nav, footer, and remove top padding for demo pages */}
      <style>{`
        body > nav { display: none !important; }
        body > footer { display: none !important; }
        body > main { padding-top: 0 !important; }
      `}</style>
      {/* Demo banner */}
      <div className="fixed top-0 left-0 right-0 z-[100] bg-accent text-white text-center py-2 text-sm font-medium">
        This is a demo site built by{" "}
        <Link href="/" className="underline font-bold">
          Patersclat
        </Link>{" "}
        &mdash;{" "}
        <Link href="/contact" className="underline">
          Want one like this?
        </Link>
      </div>
      <div className="pt-9">{children}</div>
    </>
  );
}
