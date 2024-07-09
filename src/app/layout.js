import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Victoria Bank Admin Portal",
  description: "This is the Victoria Bank Admin Portal for User Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="layouts">
        <div className="childrens">
          {children}
        </div>
      </body>
    </html>
  );
}
