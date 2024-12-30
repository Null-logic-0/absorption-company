import "./globals.css";

export const metadata = {
  title: "Absorption Company",
  description:
    "There's a reason you're not feeling your supplements. Because your supplements only work if they're absorbed. That's where we come in.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
