import React from "react";
import "./global.css"

import Navbar from "@/app/layout/Navbar";  
import Footer from "@/app/layout/Footer";  

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
