import "./mainPageStyle.css";
import "./mainPageScript.js"

export const metadata = {
  title: "Luxe Store",
  description: "Luxe Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {children}
    </html>
  );
}
