
import "./globals.css";

export const metadata = {
  title: "Luxe Store",
  description: "Luxe Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
