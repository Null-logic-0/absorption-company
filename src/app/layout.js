import NavMenu from "@/components/NavMenu/NavMenu";
import "./globals.css";

export const metadata = {
  title: "Absorption Company",
  description:
    "There's a reason you're not feeling your supplements. Because your supplements only work if they're absorbed. That's where we come in.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <header className="fixed top-0 w-full z-50">
          <p className="bg-[#4557ff] text-white text-xs text-center p-2 max-md:text-[10px] max-sm:text-[8px] max-sm:py-1">
            These products have not been approved by or evaluated by the Food
            and Drug Administration and are not intended to diagnose, treat,
            cure or prevent any disease.
          </p>
          <NavMenu />
        </header>
        <main className="pt-[5rem]">
          <div className="flex flex-col gap-8 w-full ">{children}</div>
        </main>
      </body>
    </html>
  );
}
