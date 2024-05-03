import "./mainPageStyle.css";
import React from 'react';


export const metadata = {
  title: "Luxe Store",
  description: "Luxe Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
      
    </html>
  );
}
