import NavMenu from "@/components/NavMenu/NavMenu";
import "./styles/globals.css";
import Footer from "@/components/Footer";
import { ProductProvider } from "@/components/ProductsContext";

export const metadata = {
  title: "The Absorption Company",
  description:
    "There's a reason you're not feeling your supplements. Because your supplements only work if they're absorbed. That's where we come in.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <ProductProvider>
          <header className="fixed top-0 w-full z-50">
            <p className="bg-[#4557ff] text-white text-xs text-center p-2 max-md:text-[10px] max-sm:text-[8px] max-sm:py-1">
              These products have not been approved by or evaluated by the Food
              and Drug Administration and are not intended to diagnose, treat,
              cure or prevent any disease.
            </p>
            <NavMenu />
          </header>
          <main className=" flex-grow pt-[5rem] max-md:pt-[70px]">
            <div className="flex flex-col gap-8 w-full ">{children}</div>
          </main>
          <Footer />
        </ProductProvider>
      </body>
    </html>
  );
}
